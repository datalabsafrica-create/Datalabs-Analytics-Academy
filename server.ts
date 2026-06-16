import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // API to analyze data
  app.post("/api/analyze-data", async (req, res) => {
    try {
      const { goal, dataset } = req.body;

      if (!goal || !dataset) {
        return res.status(400).json({ error: "Goal and dataset are required" });
      }

      if (!process.env.GEMINI_API_KEY) {
         return res.status(500).json({ error: "Gemini API key is not configured on the server." });
      }

      const prompt = `You are an expert data scientist and business analyst. Your goal is to analyze business datasets and provide actionable, high-level insights.

When provided with a dataset (CSV, JSON, or table format), perform the following steps:
1. Data Profiling: Briefly identify the data types, missing values, and any anomalies.
2. Trend Analysis: Identify key trends, correlations, and outliers that impact business performance.
3. Strategic Recommendations: Propose specific, data-backed actions to improve KPIs (e.g., revenue growth, operational efficiency).
4. Visual Suggestions: Recommend the best chart types (e.g., heatmaps, trend lines, waterfall charts) to represent these findings visually.

Output Requirements:
- Keep insights concise and professional.
- Always focus on "Business Impact."
- If the data is ambiguous, specify what is missing.
- Maintain a professional, advisory tone.
- Format the output in clean Markdown.

Here is the business goal for this analysis:
${goal}

Here is the provided dataset sample:
${dataset}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      res.json({ analysis: response.text });
    } catch (error: any) {
      console.error("Error analyzing data:", error);
      res.status(500).json({ error: error.message || "Failed to analyze data" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
