import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowLeft, CheckCircle, ChevronRight, AlertCircle, FileText, Download, FileSpreadsheet } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function ModuleViewer() {
  const { courseId, moduleId } = useParams();
  const { courses, user, enrollments, updateProgress } = useApp();
  const navigate = useNavigate();

  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const course = courses.find(c => c.id === courseId);
  const module = course?.modules.find(m => m.id === moduleId);
  const enrollment = enrollments.find(e => e.courseId === courseId && e.userId === user?.id);

  if (!course || !module) {
    return <div className="p-8">Module not available.</div>;
  }

  const isCompleted = enrollment?.completedModules.includes(module.id) || false;
  const quiz = module.quiz;
  
  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) correct++;
    });
    return (correct / quiz.questions.length) * 100;
  };

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allAnswered = quiz.questions.every(q => quizAnswers[q.id] !== undefined);
    if (!allAnswered) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const score = calculateScore();
    setShowResults(true);

    if (score >= quiz.passMarkPercentage && user) {
      updateProgress(course.id, module.id, true);
    }
  };

  const downloadFile = (fileName: string, content: string, mimeType: string = 'text/plain') => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPDF = () => {
    const generateDetailText = () => {
      const title = module.title.toLowerCase();
      if (title.includes("sql") || title.includes("join") || title.includes("temporal") || title.includes("extraction") || title.includes("aggregation") || title.includes("relational")) {
        return `DETAILED TOPIC BREAKDOWN:
In this module, we dive deep into database extraction. SQL is the industry standard for communicating with relational databases. 
- You will learn how to write efficient queries that don't overwhelm the production database.
- You will establish strong foundations in SELECT, FROM, and WHERE clauses.
- When working with joins, remember that an INNER JOIN only returns rows with a match in both tables, while a LEFT JOIN returns all rows from the left table and matched rows from the right.
- Performance tip: Only query the columns you actually need, rather than using SELECT *. Use indexes where possible.
- Business Application: This allows you to pull direct answers for stakeholders without waiting for the engineering team.`;
      }
      if (title.includes("excel") || title.includes("formula") || title.includes("pivot") || title.includes("strategy") || title.includes("cleanup") || title.includes("modeling")) {
        return `DETAILED TOPIC BREAKDOWN:
In this module, we focus on advanced spreadsheet operations. Excel is still the operating system of the business world.
- We go beyond basic SUM formulas to master logical functions (IF, AND, OR) and lookups (VLOOKUP, XLOOKUP, INDEX/MATCH).
- Pivot Tables are covered extensively as they allow rapid summarization of millions of data points without writing code.
- Data cleaning via Power Query is emphasized because 80% of data work is simply cleaning up messy inputs.
- Business Application: Building automated reports that update themselves when new data is pasted in, saving hours of manual labor per week.`;
      }
      if (title.includes("power bi") || title.includes("dax") || title.includes("visual") || title.includes("dots")) {
        return `DETAILED TOPIC BREAKDOWN:
In this module, we master business intelligence platforms. Power BI is the premier tool for interactive dashboarding.
- The star schema is crucial: you must separate your data into FACT tables (transactions) and DIMENSION tables (lookups like dates, products).
- DAX (Data Analysis Expressions) is introduced for creating dynamic measures that respond to user filters.
- We cover Time Intelligence natively (e.g., Year-over-Year calculations) which is a top request from executives.
- Business Application: Delivering a self-serve reporting portal for management to monitor KPIs in real-time, eliminating the need for daily static PDF exports.`;
      }
      if (title.includes("monetization") || title.includes("proposal") || title.includes("freelanc") || title.includes("portfolio") || title.includes("client") || title.includes("automation") || title.includes("business launch") || title.includes("need")) {
         return `DETAILED TOPIC BREAKDOWN:
In this module, we cover the exact methods for monetizing your technical skills. It's not enough to be good at the tools; you must be able to sell the outcome.
- We focus on Value-Based Pricing instead of hourly billing. If you save a business $50,000, you shouldn't charge $50/hr.
- Portfolio construction: highlighting the business impact rather than just showing off complex code.
- Client outreach strategies: utilizing LinkedIn and targeted cold email to reach decision-makers who actually have budget.
- Business Application: Landing high-ticket consulting clients and transitioning from an employee mindset to a business-owner mindset.`;
      }
      
      return `DETAILED TOPIC BREAKDOWN:
This module covers vital data analytics concepts bridging the gap between technical execution and business value. 
- You are learning tools that directly impact the bottom line.
- Always tie your technical work back to a core business objective (increasing revenue, decreasing costs, or mitigating risk).
- Business Application: Transforming raw, chaotic data into structured insights that decision-makers are willing to pay a premium for.`;
    };

    const pdfContent = `================================================
LECTURE NOTES: ${module.title}
================================================

${module.content.replace(/###/g, '').replace(/\*\*/g, '')}

------------------------------------------------
${generateDetailText()}

------------------------------------------------
PRACTICE QUESTIONS FOR SAMPLE DATASET
------------------------------------------------
Given the attached "Sample_Dataset.csv", try to answer the following questions to test your understanding:

1. What is the total revenue generated across all records?
2. Which category generated the highest total revenue?
3. What is the average revenue per unit sold for the 'Alpha Widget'?
4. Are there any potential data quality issues (e.g., duplicates) in this sample?

------------------------------------------------
ANSWER KEY
------------------------------------------------
1. Total Revenue: $2045.50
   (150.00 + 500.00 + 45.50 + 1200.00 + 150.00)

2. Highest Revenue Category: Consulting
   (Hardware: 345.50, Software: 500.00, Consulting: 1200.00)

3. Average Unit Revenue for Alpha Widget: $30.00
   ($150.00 / 5 units = $30.00)

4. Data Quality Issues: Yes, Record ID 1 and ID 5 appear to be identical transactions for Alpha Widget on different dates. When data cleaning, you would flag this to ensure it's not a duplicate entry.

================================================
This material is part of the Data-to-Dollars Accelerator.`;

    downloadFile(`Lecture_${module.id}.txt`, pdfContent, 'text/plain');
    alert("Simulated PDF download started! (Downloaded as .txt for demo purposes)");
  };

  const handleDownloadDataset = () => {
    const csvContent = "ID,Date,Product,Category,Revenue,Units_Sold\n1,2024-01-01,Alpha Widget,Hardware,150.00,5\n2,2024-01-02,Beta License,Software,500.00,1\n3,2024-01-03,Gamma Tool,Hardware,45.50,12\n4,2024-01-04,Delta Service,Consulting,1200.00,1\n5,2024-01-05,Alpha Widget,Hardware,150.00,5";
    downloadFile('Sample_Dataset.csv', csvContent, 'text/csv');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 w-full">
      <Link to={`/course/${course.id}`} className="text-sm text-blue-600 hover:underline flex items-center mb-6">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to {course.title}
      </Link>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="bg-slate-50 border-b border-slate-200 p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">{module.title}</h1>
          {isCompleted && (
            <span className="inline-flex items-center text-sm font-bold text-green-700 bg-green-100 px-4 py-1.5 rounded-full">
              <CheckCircle className="w-4 h-4 mr-1" /> Completed
            </span>
          )}
        </div>
        
        <div className="p-8 prose prose-blue max-w-none text-slate-700 border-b border-slate-200">
          <ReactMarkdown>{module.content}</ReactMarkdown>
        </div>

        <div className="bg-slate-50 p-6">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center">
             Module Resources
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleDownloadPDF}
              className="flex items-center justify-center bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-3 px-6 rounded-2xl transition shadow-sm flex-1"
            >
              <FileText className="w-5 h-5 mr-2 text-red-500" />
              Download Lecture (PDF)
            </button>
            <button 
              onClick={handleDownloadDataset}
              className="flex items-center justify-center bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-3 px-6 rounded-2xl transition shadow-sm flex-1"
            >
              <FileSpreadsheet className="w-5 h-5 mr-2 text-green-600" />
              Sample Dataset (CSV)
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl shadow-sm border border-slate-800 p-8 text-white">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          Knowledge Check: {quiz.title}
        </h2>
        
        <form onSubmit={handleQuizSubmit}>
          <div className="space-y-6">
            {quiz.questions.map((q, qIndex) => (
              <div key={q.id} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <p className="font-bold text-white mb-4">{qIndex + 1}. {q.text}</p>
                <div className="space-y-3">
                  {q.options.map((opt, oIndex) => {
                    const isSelected = quizAnswers[q.id] === oIndex;
                    const isCorrect = oIndex === q.correctIndex;
                    
                    let bgClass = "bg-slate-900 hover:bg-slate-700";
                    let borderClass = isSelected ? "border-blue-500 ring-1 ring-blue-500" : "border-slate-600";
                    
                    if (showResults) {
                      if (isCorrect) {
                        bgClass = "bg-green-900/40";
                        borderClass = "border-green-500 ring-1 ring-green-500";
                      } else if (isSelected && !isCorrect) {
                        bgClass = "bg-red-900/40";
                        borderClass = "border-red-500 ring-1 ring-red-500";
                      }
                    }

                    return (
                      <label 
                        key={oIndex} 
                        className={`flex items-center p-4 border rounded-2xl cursor-pointer transition ${bgClass} ${borderClass}`}
                      >
                        <input 
                          type="radio" 
                          name={`question_${q.id}`}
                          value={oIndex}
                          checked={isSelected}
                          onChange={() => !showResults && setQuizAnswers(prev => ({...prev, [q.id]: oIndex}))}
                          disabled={showResults}
                          className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-slate-500 bg-slate-800"
                        />
                        <span className="ml-3 text-sm text-slate-200">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {!showResults ? (
            <div className="mt-8">
              <button 
                type="submit"
                className="bg-white text-slate-900 font-bold py-3 px-8 rounded-2xl hover:bg-slate-100 transition shadow-sm w-full sm:w-auto"
              >
                Submit Answers
              </button>
            </div>
          ) : (
            <div className={`mt-8 p-6 rounded-2xl border ${calculateScore() >= quiz.passMarkPercentage ? 'bg-green-900/30 border-green-500/50' : 'bg-red-900/30 border-red-500/50'}`}>
              <h3 className={`font-bold text-lg mb-2 ${calculateScore() >= quiz.passMarkPercentage ? 'text-green-400' : 'text-red-400'}`}>
                {calculateScore() >= quiz.passMarkPercentage ? 'Quiz Passed!' : 'Quiz Failed'}
              </h3>
              <p className="mb-4 text-slate-300">You scored {calculateScore()}% (Required: {quiz.passMarkPercentage}%)</p>
              
              {!user && calculateScore() >= quiz.passMarkPercentage && (
                 <div className="bg-orange-900/30 border border-orange-500/50 p-4 rounded-xl mb-4">
                   <p className="text-orange-300 text-sm mb-2"><AlertCircle className="w-4 h-4 inline mr-1" /> Progress not saved because you are browsing anonymously.</p>
                   <Link to="/login" className="text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg inline-block">Log in to save progress</Link>
                 </div>
              )}
              
              {calculateScore() < quiz.passMarkPercentage && (
                <button 
                  type="button"
                  onClick={() => {
                    setShowResults(false);
                    setQuizAnswers({});
                  }}
                  className="bg-slate-800 border border-slate-600 text-white font-bold py-2 px-6 rounded-2xl hover:bg-slate-700 transition"
                >
                  Retry Quiz
                </button>
              )}
              {calculateScore() >= quiz.passMarkPercentage && (
                <Link 
                  to={`/course/${course.id}`}
                  className="bg-blue-600 text-white font-bold py-2 px-6 rounded-2xl hover:bg-blue-700 inline-flex items-center transition"
                >
                  Continue Course <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
