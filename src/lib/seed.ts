import { AppDatabase, Course } from "../types";

export const defaultCourses: Course[] = [
  {
    id: "c_phase1",
    title: "Phase 1: Foundations (Data Fluency & Excel Pro)",
    description: "Focus on cleaning, organizing, and basic analysis to build a solid data foundation.",
    price: 99.99,
    createdAt: Date.now(),
    modules: [
      {
        id: "m_1",
        title: "Week 1: Data Strategy Essentials",
        content: `### Data Strategy Essentials\n\n**Primary Skill Focus:** Data Types & Structuring\n
### 1. The Business Value (The "Dollars")
Why do clients pay for data strategy? Most businesses are drowning in data but starving for insight. They have CRMs, Excel sheets, and accounting software, but no single source of truth. When you master Data Strategy Essentials, you are setting up the foundation. Clients lose millions in operational inefficiencies because their data types are wrong, leading to broken downstream reporting. Master this, and you position yourself as an architect, not just a spreadsheet jockey. 

### 2. Core Technical Concepts
You must understand fundamental Data Types (Strings, Integers, Floats, Booleans, Dates) and Data Structures (Tabular, JSON, Hierarchical). 
- **Data Normalization**: Ensuring data is atomic (one fact per cell).
- **Primary & Foreign Keys**: The architectural connectors of relational thinking.
- **Data Architecture**: Understanding how data flows from the operational system (like Shopify or Salesforce) into a data warehouse or structured operational reporting view.

*Amateurs memorize steps; professionals understand principles.*

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Mixing text and numbers in the same column.
- Leaving blank rows and columns for "visual separation" in raw datasets.
- Hand-typing dates instead of relying on systemic Date/Time standardization formats (ISO-8601).

✅ **The Professional Approach:**
- Enforcing strict column typing before writing a single formula.
- Treating input sheets as "databases" and presentation sheets as "views".

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. **Download the Practice Dataset** from the resources tab.
2. Inspect the raw sales export. Identify the 5 critical columns with mixed data types.
3. Cleanse the data by separating the tabular data from the presentation layer.
4. Establish a primary key for every unique transaction line.
5. Formulate a 1-sentence value pitch explaining what you built and why it matters.

### 5. Real-World Client Scenario
**The Request:** "Our sales dashboard is broken because August revenues are showing up as #VALUE! errors."
**Your Execution:** You diagnose that a sales rep entered "$5,000 (approx)" into a numeric field. You lock the column data type, cleanse the historical data, and separate presentation from storage.
**The Pitch:** "I instituted strict data governance on the sales pipeline, resolving the data corruption. Your team can now trust the numbers 100%."
`,
        quiz: {
          id: "q_1",
          title: "Knowledge Check: Data Strategy Essentials",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_1_1",
              text: "Given the Practice Dataset, what is the total revenue generated across all records?",
              options: ["$2045.50", "$1500.00", "$345.50", "$5000.00"],
              correctIndex: 0
            },
            {
              id: "q_1_2",
              text: "Which category generated the highest total revenue?",
              options: ["Hardware", "Software", "Consulting", "Services"],
              correctIndex: 2
            },
            {
              id: "q_1_3",
              text: "What is the average revenue per unit sold for the 'Alpha Widget'?",
              options: ["$15.00", "$30.00", "$45.50", "$150.00"],
              correctIndex: 1
            },
            {
              id: "q_1_4",
              text: "Are there any potential data quality issues (e.g., duplicates) in this sample?",
              options: ["No issues found", "Missing values in revenue", "Record ID 1 and ID 5 appear to be identical transactions", "Date formats are inconsistent"],
              correctIndex: 2
            }
          ]
        }
      },
      {
        id: "m_2",
        title: "Week 2: The Cleanup Protocol",
        content: `### The Cleanup Protocol\n\n**Primary Skill Focus:** Power Query (Excel), Text Functions\n
### 1. The Business Value (The "Dollars")
Data cleaning is the most unglamorous, yet highly-compensated skill in analytics. Executives make billion-dollar decisions on reports. If the underlying data is dirty (duplicates, missing values, misspellings), their decisions are objectively wrong. When you can systematically diagnose and clean a corrupted dataset, you operate as a "fixer" who guarantees data integrity.

### 2. Core Technical Concepts
- **Deduplication Strategies**: Removing exact matches vs. fuzzy matching for distinct records.
- **Handling Nulls/Blanks**: Deciding whether to impute (fill in with averages/standards) or filter out missing records.
- **Text Standardization**: Utilizing TRIM(), PROPER(), and UPPER() to clean human-entry errors.
- **Outlier Detection**: Finding anomalies (like a $1,000,000 order in a bakery dataset) using standard deviation and quartile ranking.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Deleting rows manually when they see an error.
- Not keeping a "raw" backup before starting the cleaning process.

✅ **The Professional Approach:**
- Using distinct staging grounds: RAW, WORK-IN-PROGRESS, and CLEAN, ensuring absolute traceability.
- Automating cleanses using Power Query instead of manual find/replace.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. **Download the Practice Dataset** from the resources tab.
2. Implement TRIM to wipe out leading/trailing spaces in the 'Customer_Name' column.
3. Find and isolate duplicate invoice numbers using conditional highlighting or distinct counts.
4. Replace #N/A errors with systematic 0s where mathematically appropriate.

### 5. Real-World Client Scenario
**The Request:** "Our mailing list has 50,000 users, but our email client says half are invalid formats."
**Your Execution:** You run a systematic cleanup protocol targeting rogue spaces, missing @ symbols, and duplicate submissions.
**The Pitch:** "I purged 12,000 corrupted entries from the CRM and restored the integrity of your mailing list, ensuring your next campaign achieves optimal deliverability."
`,
        quiz: {
          id: "q_2",
          title: "Knowledge Check: The Cleanup Protocol",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_2_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Power Query (Excel), Text Functions", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_3",
        title: "Week 3: Formula Architect",
        content: `### Formula Architect\n\n**Primary Skill Focus:** Advanced Logic (XLOOKUP, Nested IFs)\n
### 1. The Business Value (The "Dollars")
Businesses pay for speed and automation. If a team spends 20 hours a week manually copying and pasting numbers across 5 spreadsheets, they are burning cash. Mastering advanced lookup formulas and logical arrays allows you to architect systems that update instantly, turning a 20-hour manual slog into a 1-second refresh. This is how you justify a $5,000 consulting retainer.

### 2. Core Technical Concepts
- **VLOOKUP vs. XLOOKUP:** Why XLOOKUP is the modern standard (left-to-right searching, native error handling).
- **INDEX/MATCH:** The bulletproof two-function lookup mechanism that survives column deletions.
- **Nested IFs and IFS():** Handling complex, multi-tiered logic (e.g., calculating tiered commission payouts).
- **Array Formulas:** Performing calculations across ranges without helper columns.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Hardcoding row numbers in lookups (e.g., VLOOKUP(A2, A1:D100, 2, FALSE)).
- Leaving #N/A errors exposed in client-facing dashboards.

✅ **The Professional Approach:**
- Using dynamic references and Table Arrays (e.g., Table1[Revenue]).
- Encasing all lookups in IFERROR() to return clean "-" or "Not Found" flags.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. **Download the Practice Dataset** from the resources tab.
2. Build an XLOOKUP engine to merge the standalone 'Shipping_Costs' table into the main 'Orders' ledger.
3. Use IFS() to categorize customer lifetime value into 'Bronze', 'Silver', and 'Gold' tiers.

### 5. Real-World Client Scenario
**The Request:** "We need to manually calculate our 50 sales reps' tiered commissions at the end of every month."
**Your Execution:** You architect a dynamic table using XLOOKUP and nested IFS to automatically compute the payouts based on real-time sales thresholds.
**The Pitch:** "I engineered an automated commission calculator that eliminates the 10-hour monthly processing bottleneck and mathematically prevents over-payment errors."
`,
        quiz: {
          id: "q_3",
          title: "Knowledge Check: Formula Architect",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_3_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Advanced Logic (XLOOKUP, Nested IFs)", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_4",
        title: "Week 4: Diagnostic Analytics",
        content: `### Diagnostic Analytics\n\n**Primary Skill Focus:** Pivot Tables & Conditional Formatting\n
### 1. The Business Value (The "Dollars")
Descriptive analytics tells you *what* happened. Diagnostic analytics tells you *why* it happened. Executives don't pay you to say "Sales are down 10%." They pay you to say "Sales are down 10% *because* our Midwest supply chain route was delayed by 3 days, causing stockouts." Uncovering the 'why' is the core of analytical value creation.

### 2. Core Technical Concepts
- **Pivot Tables & Multi-Dimensional Slicing:** Dynamically breaking down aggregate numbers across time, geography, and product lines.
- **Variance Analysis:** Calculating Day-over-Day, Month-over-Month, and Year-over-Year differences.
- **Correlation vs. Causation:** Using scatter plots and correlation coefficients to identify relationships (e.g., does marketing spend actually correlate with revenue?).
- **Root Cause Analysis (The 5 Whys):** A systemic framework for drilling down into the lowest level of operational data.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Looking only at averages (averages lie; they hide massive variances).
- Overloading a single chart with 5 different metrics, making it unreadable.

✅ **The Professional Approach:**
- Examining distributions and medians alongside the mean.
- Using simple, sequential slicing to isolate the problem segment rapidly.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. **Download the Practice Dataset**.
2. Identify the core anomaly: Why did Q2 profits drop while Q2 revenue increased?
3. Build a Pivot Table to slice costs by category and vendor.
4. Pinpoint the exact logistical cost segment that triggered the margin compression.

### 5. Real-World Client Scenario
**The Request:** "Our conversion rate crashed on Thursday and we don't know why."
**Your Execution:** You slice the traffic data by device, browser, and geographic region, discovering that a specific checkout script broke specifically on Safari Mobile devices.
**The Pitch:** "I localized the conversion drop specifically to a Safari Mobile checkout glitch, allowing engineering to patch it immediately and recover $15k per week in lost sales."
`,
        quiz: {
          id: "q_4",
          title: "Knowledge Check: Diagnostic Analytics",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_4_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Pivot Tables & Conditional Formatting", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_5",
        title: "Week 5: Financial Modeling 101",
        content: `### Financial Modeling 101\n\n**Primary Skill Focus:** Scenario Planning, Goal Seek\n
### 1. The Business Value (The "Dollars")
Forecasting the future is the most lucrative skill in business. CFOs and founders need to know their runway, unit economics, and return on investment (ROI). Building robust financial models allows companies to make capital allocation decisions with confidence. This is high-stakes strategy, and it commands premium rates.

### 2. Core Technical Concepts
- **The Income Statement (P&L):** Structuring Top-Line Revenue, COGS, Gross Margin, OpEx, and EBITDA.
- **Unit Economics:** Calculating Customer Acquisition Cost (CAC) and Lifetime Value (LTV).
- **Scenario Analysis:** Using Data Tables and Scenario Manager in Excel to model "Base Case", "Best Case", and "Worst Case" outcomes.
- **Discounted Cash Flow (DCF) Basics:** The Time Value of Money principles.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Hardcoding growth rates directly into formulas (e.g., '=A2 * 1.05').
- Mixing inputs, assumptions, and outputs on the same sheet.

✅ **The Professional Approach:**
- Building out a dedicated "Assumptions" dashboard where clients can toggle growth rates, churn rates, and costs in one place.
- Color-coding cells (Blue for hardcoded inputs, Black for formulas) so the model is auditable.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. **Download the Practice Dataset** featuring 12 months of historical SaaS revenue and expenses.
2. Build a forward-looking 12-month projection model.
3. Isolate the key drivers: churn rate and new customer acquisition.
4. Use Scenario Analysis to determine runway if marketing costs increase by 20%.

### 5. Real-World Client Scenario
**The Request:** "We want to hire 3 new engineers, but we aren't sure if we have the cash runway to survive Q4."
**Your Execution:** You build a dynamic burn-rate model where the founder can toggle the new hires on and off to see the impact on their cash-out date.
**The Pitch:** "I architected an interactive cash-flow model that confirms you can safely hire the 3 engineers while maintaining a 9-month safety runway under worst-case revenue scenarios."
`,
        quiz: {
          id: "q_5",
          title: "Knowledge Check: Financial Modeling 101",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_5_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Scenario Planning, Goal Seek", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_6",
        title: "Week 6: Capstone 1: Excel MVP",
        content: `### Capstone 1: Excel MVP\n\n**Primary Skill Focus:** End-to-end basic dashboarding\n
### 1. The Business Value (The "Dollars")
Clients don't care about your Excel skills; they care about the finished product. The MVP (Minimum Viable Product) proves you can take raw, chaotic business data, run it through an automated end-to-end pipeline, and output an executive-level dashboard. This specific deliverable is exactly what you will sell to small and medium businesses for $1,500 - $3,000 as a standalone project.

### 2. Core Technical Concepts
- **End-to-End Pipeline Architecture:** Connecting raw data -> staging -> processing -> presentation in one cohesive workbook.
- **Dashboard UI/UX Principles:** The "Z-Pattern" for reading dashboards, high data-to-ink ratios, and white space.
- **Dynamic Charting:** Using dynamic named ranges and OFFSET/INDEX formulas so charts update automatically when new data is added.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Sending a client a cluttered workbook with 15 visible, confusing tabs.
- Using 3D Pie Charts or default Excel styling that undermines professional credibility.

✅ **The Professional Approach:**
- Hiding all calculation and staging tabs. The client only sees the "Input" and "Dashboard" tabs.
- Locking formula cells so the client cannot accidentally break the model.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. **Download the full Capstone Project Dataset** (an e-commerce company's full year ledger).
2. Cleanse and model the data using the protocols from Weeks 1-5.
3. Design an interactive, slicer-driven executive dashboard.
4. Finalize the UI: hide gridlines, lock calculation cells, apply corporate color themes.

### 5. Real-World Client Scenario
**The Request:** "I need an automated tracker for our retail business that updates our core KPIs every time I drop a new CSV from Shopify into the folder."
**Your Execution:** You deliver the finalized Excel MVP, establishing a robust end-to-end reporting workflow for the client.
**The Pitch:** "I engineered a fully autonomous, offline executive dashboard that transforms your raw Shopify exports into strategic insights instantly, eliminating your 12-hour monthly reporting cycle."
`,
        quiz: {
          id: "q_6",
          title: "Knowledge Check: Capstone 1: Excel MVP",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_6_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering End-to-end basic dashboarding", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: "c_phase2",
    title: "Phase 2: Data Extraction (SQL Mastery)",
    description: "Focus on querying databases and managing relational data to extract actionable insights.",
    price: 149.99,
    createdAt: Date.now(),
    modules: [
      {
        id: "m_7",
        title: "Week 7: Relational Thinking",
        content: `### Relational Thinking\n\n**Primary Skill Focus:** Database Architecture & SELECT statements\n
### 1. The Business Value (The "Dollars")
When businesses scale out of Excel and into massive databases (PostgreSQL, Snowflake, BigQuery), everything breaks if you don't understand Relational Thinking. Millions of dollars are lost due to duplicated rows or disjointed data silos. By mastering relational database architecture, you unlock the ability to analyze millions of rows in seconds, securing your position as the ultimate truth-seeker in the company.

### 2. Core Technical Concepts
- **The Concept of Relational Databases (RDBMS):** How tables communicate with each other.
- **Entity-Relationship Diagrams (ERDs):** Reading and designing the blueprint of a database.
- **Primary Keys (PK) & Foreign Keys (FK):** The anchors that bind data together securely and efficiently.
- **1-to-1, 1-to-Many, and Many-to-Many Relationships.**

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Storing customer addresses directly inside the 'orders' table (redundant storage and update nightmares).
- Using names or emails as Primary Keys instead of immutable UUIDs or auto-incrementing integers.

✅ **The Professional Approach:**
- Designing strict database schemas following Normalization Rules to prevent data anomalies.
- Mapping out the ERD *before* writing a single line of SQL.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. **Download the ERD Blueprint Diagram** for the mock hospital dataset.
2. Identify the Primary and Foreign Keys linking the 'Patients', 'Doctors', and 'Appointments' tables.
3. Write a conceptual schema map identifying a Many-to-Many relationship bridging table.

### 5. Real-World Client Scenario
**The Request:** "We are migrating off Excel and need to design a backend tracking system for our inventory."
**Your Execution:** You architect an ERD defining the relationships between 'Products', 'Warehouses', and 'Shipments'.
**The Pitch:** "I architected a scalable, normalized relational database blueprint that will support your company’s inventory tracking for the next 10 years without data bloat."
`,
        quiz: {
          id: "q_7",
          title: "Knowledge Check: Relational Thinking",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_7_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Database Architecture & SELECT statements", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_8",
        title: "Week 8: The Join Masterclass",
        content: `### The Join Masterclass\n\n**Primary Skill Focus:** INNER, LEFT, RIGHT JOINs\n
### 1. The Business Value (The "Dollars")
Data rarely lives in a single table. Marketing data lives in the CRM, while revenue data lives in Stripe. If you cannot join these datasets accurately across millions of rows, you cannot calculate True ROI. Mastering SQL JOINs allows you to bridge disparate business systems, providing the elusive "360-degree view" of a customer that CMOs eagerly pay for.

### 2. Core Technical Concepts
- **INNER JOIN:** Only the overlapping truth. Returning records that have matching values in both tables.
- **LEFT / RIGHT JOIN:** Keeping all records from a primary table while pulling in optional matches from a secondary lookup table.
- **FULL OUTER JOIN:** The comprehensive view. Returning all records when there is a match in either left or right table.
- **CROSS JOIN:** The Cartesian product (rarely used, but lethal if executed accidentally).
- **Bridging conditions:** Executing joins on multiple criteria (e.g., 'ON a.user_id = b.user_id AND a.date = b.date').

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Executing an INNER JOIN when a LEFT JOIN was required, accidentally deleting 40% of the customer base from a report because they lacked a secondary attribute.
- Creating "fan-out" explosions by casually joining one-to-many tables without pre-aggregating.

✅ **The Professional Approach:**
- Systematically checking row counts 'COUNT(*)' before and after executing a heavy join to ensure fan-out hasn't occurred.
- Using table aliases ('users AS u') strictly and consistently.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. **Connect to the lab database ecosystem**.
2. Execute a LEFT JOIN to combine the 'Users' table with the 'Transactions' table to find out how many registered users have exactly 0 purchases.
3. Write a multi-join bridging 'Users', 'Orders', and 'Products' to output a master un-pivoted dataset.

### 5. Real-World Client Scenario
**The Request:** "We want to know which marketing channels drive the highest customer lifetime value (LTV)."
**Your Execution:** You execute a clean LEFT JOIN binding historical CRM ad-click records to the Stripe revenue ledger via the user's email hash.
**The Pitch:** "I unified your Stripe and HubSpot databases to reveal that your LinkedIn Ad traffic has a 400% higher LTV than Instagram traffic, allowing you to reallocate your $50k monthly budget effectively."
`,
        quiz: {
          id: "q_8",
          title: "Knowledge Check: The Join Masterclass",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_8_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering INNER, LEFT, RIGHT JOINs", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_9",
        title: "Week 9: Aggregation & Grouping",
        content: `### Aggregation & Grouping\n\n**Primary Skill Focus:** GROUP BY, HAVING, Aggregate Functions\n
### 1. The Business Value (The "Dollars")
No human can read 4 million rows of data. Aggregation is the process of compressing massive data sets into digestible executive summaries. When a CFO asks "What is our average revenue per region this month?", they are asking for a GROUP BY query. Mastering this allows you to distill chaos into signal, summarizing enterprise-wide performance in a split second.

### 2. Core Technical Concepts
- **Aggregate Functions:** SUM(), AVG(), MIN(), MAX(), COUNT(), and COUNT(DISTINCT).
- **The GROUP BY Clause:** The mechanical engine of categorization. How SQL splits data into buckets before applying the aggregate math.
- **The HAVING Clause:** Filtering data *after* it has been grouped and aggregated (vs. WHERE, which filters before).
- **Granularity levels:** Understanding the level of detail a grouped query produces.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Confusing WHERE and HAVING, leading to syntax errors or fundamentally incorrect query results.
- Overusing COUNT(*) instead of COUNT(DISTINCT user_id) when measuring unique active users.

✅ **The Professional Approach:**
- Always executing a fast aggregate baseline check before extracting details (e.g., verifying total revenue for a year matches the financial ledger before slicing by month).

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Extract the total volume of goods sold, grouped by state and product category.
2. Filter the grouped results down to only show categories that generated > $100,000 using the HAVING clause.
3. Use COUNT(DISTINCT session_id) to accurately measure Unique Visitors per day.

### 5. Real-World Client Scenario
**The Request:** "We need a leaderboard of our top-performing global regions over the last 5 years."
**Your Execution:** You write a highly optimized aggregation query compressing 50 million transaction rows down to an elegant 12-row table outputting Total Revenue, Ticket Volume, and Average Order Value grouped by Region.
**The Pitch:** "I compressed 50 million rows into a real-time tracking leaderboard, empowering the VP of Sales to see live regional performance at a glance."
`,
        quiz: {
          id: "q_9",
          title: "Knowledge Check: Aggregation & Grouping",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_9_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering GROUP BY, HAVING, Aggregate Functions", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_10",
        title: "Week 10: Temporal Analysis",
        content: `### Temporal Analysis\n\n**Primary Skill Focus:** Date/Time Functions & Logic\n
### 1. The Business Value (The "Dollars")
Business exists in time. Are we growing? Are we shrinking? How did this Black Friday compare to last year? Temporal analysis in SQL equips you to answer the highest-priority questions in any boardroom: trend identification. When you track metrics dynamically across timeframes, you become responsible for identifying the trajectory of the entire business.

### 2. Core Technical Concepts
- **Date Parts & Truncation:** Utilizing DATE_TRUNC(), EXTRACT(), and DATE_PART() to bucket timestamps into daily, weekly, or monthly cohorts.
- **Timezone Management:** The perilous journey of handling UTC vs Local Time, ensuring a midnight purchase is attributed to the correct day.
- **Rolling Windows:** Calculating trailing 7-day averages to smooth out weekend cyclical variance.
- **Lead and Lag:** Fetching a value from the previous or following row to calculate Day-over-Day percentage changes.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Ignoring timezones, resulting in massive discrepancies between the SQL data warehouse and front-end tools like Google Analytics.
- Bucketing by week without defining when the week starts (Sunday vs. Monday), wreaking havoc on financial reporting.

✅ **The Professional Approach:**
- Standardizing everything in UTC structurally, only converting to local timezones at the very final presentation layer.
- Using standardized Calendar / Date Dimension tables to join against, instead of relying on complex inline date math.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Write a query utilizing DATE_TRUNC to map 3 years of timestamped orders into a Monthly Revenue trendline.
2. Utilize the LAG() window function to calculate the precise Month-over-Month growth percentage dynamically.
3. Identify seasonality trends by extracting the Day of the Week and averaging sales volumes.

### 5. Real-World Client Scenario
**The Request:** "Our daily sales look incredibly choppy on the dashboard, it’s giving our CEO anxiety every Tuesday."
**Your Execution:** You write a query utilizing moving averages to smooth the daily variance, highlighting the underlying macro growth trend.
**The Pitch:** "I engineered a 7-day trailing velocity tracker that smooths out your inherent weekend slumps, allowing the executive team to judge true momentum rather than daily noise."
`,
        quiz: {
          id: "q_10",
          title: "Knowledge Check: Temporal Analysis",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_10_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Date/Time Functions & Logic", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_11",
        title: "Week 11: Advanced Extractions",
        content: `### Advanced Extractions\n\n**Primary Skill Focus:** CTEs & Window Functions\n
### 1. The Business Value (The "Dollars")
Sometimes the data you need is trapped inside messy strings, chaotic JSON objects, or complex multi-step logical requirements. Advanced extractions separate the junior analysts from the elite engineers. When you can parse nested JSON strings stored in PostgreSQL or utilize advanced Common Table Expressions (CTEs), you can extract value from data that other analysts dismiss as "unusable".

### 2. Core Technical Concepts
- **CTEs (Common Table Expressions - WITH clause):** Architecting readable, modular SQL queries by chaining logic together step-by-step.
- **Subqueries:** Nesting queries inside logic loops (and understanding their performance costs vs CTEs).
- **String Manipulation:** Using SUBSTRING(), POSITION(), and Regex to rip apart chaotic string data.
- **Window Functions (RANK, DENSE_RANK, ROW_NUMBER):** Executing calculations across a set of table rows that are somehow related to the current row, without collapsing them into an aggregate.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Writing 5-level deep nested subqueries that are completely unreadable and impossible to debug.
- Relying entirely on Excel to parse strings after downloading a raw database dump.

✅ **The Professional Approach:**
- Refactoring complex queries into named CTEs, operating like procedural code functions.
- Utilizing Window Functions to calculate Running Totals or Top-N-Per-Category without executing expensive self-joins.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Using a CTE, define a cohort of VIP users. In the main query, calculate the retention rate of those VIPs.
2. Utilize ROW_NUMBER() partitioned by user_id to isolate the exact date of every customer's *first* purchase.
3. Use Regex parsing to extract product metadata hidden inside a messy tracking URL string.

### 5. Real-World Client Scenario
**The Request:** "We want to reward our top 3 highest spending customers in every single state, but our database is over 10TB."
**Your Execution:** You write a beautifully optimized CTE combined with a DENSE_RANK() Window Function partitioned by state to instantly generate the leaderboard.
**The Pitch:** "I engineered an optimized extraction pipeline that parsed your 10TB ledger to instantly generate the local VIP lists, delivering the campaign targeting data instantly at zero additional computing cost."
`,
        quiz: {
          id: "q_11",
          title: "Knowledge Check: Advanced Extractions",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_11_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering CTEs & Window Functions", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_12",
        title: "Week 12: Capstone 2: SQL Data Pipeline",
        content: `### Capstone 2: SQL Data Pipeline\n\n**Primary Skill Focus:** View Creation & Optimization\n
### 1. The Business Value (The "Dollars")
In Capstone 2, you transition from "writing queries" to "building data pipelines". Clients don't want sql files; they want reliable, scheduled, accurate Data Marts that feed directly into their BI tools. A well-constructed SQL pipeline is the beating heart of modern corporate analytics, and assembling one end-to-end proves you are a highly-valuable Data Engineer.

### 2. Core Technical Concepts
- **ETL/ELT Architecture Concept:** Extracting from source, Structuring/Transforming in the warehouse, and Loading into the final analytical View.
- **Creating Views and Materialized Views:** Storing complex logic as a virtual table that business users can easily query (e.g., 'SELECT * FROM clean_sales_view').
- **Query Optimization & Explain Plans:** Proving your query is efficient and won't crash the server during peak hours.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Connecting a visualization tool directly to a chaotic, raw production database.
- Writing unformatted, un-commented SQL walls of text.

✅ **The Professional Approach:**
- Building a hardened 'Reporting View' layer—a pristine abstracted layer that shields the reporting tool from underlying schema changes.
- Naming conventions: prefixing views with 'v_rpt_' or 'dim_' / 'fact_' to clearly signal their analytical purpose.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Synthesize concepts from Weeks 7-11 to build a master data pipeline script for a mock ride-share company.
2. Cleanse timestamps, join driver metrics, aggregate financials, and calculate trailing averages via window functions in a modular CTE sequence.
3. Commit this final SQL pipeline into a formal database VIEW.

### 5. Real-World Client Scenario
**The Request:** "Our operations team needs a clean table showing our daily fulfillment rate, but the raw data is scattered across 4 different messy backend systems."
**Your Execution:** You author a modular ELT SQL script that binds the 4 tables, cleanses anomalous entries, and materializes the output into a daily tracking view.
**The Pitch:** "I architected an automated SQL data pipeline that abstracts away the chaos of your backend systems, delivering a pristine, millisecond-fast materialized view directly to your forecasting team."
`,
        quiz: {
          id: "q_12",
          title: "Knowledge Check: Capstone 2: SQL Data Pipeline",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_12_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering View Creation & Optimization", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: "c_phase3",
    title: "Phase 3: Visual Intelligence (Power BI Storytelling)",
    description: "Focus on interactive dashboards, KPIs, and stakeholder presentation.",
    price: 199.99,
    createdAt: Date.now(),
    modules: [
      {
        id: "m_13",
        title: "Week 13: Connecting the Dots",
        content: `### Connecting the Dots\n\n**Primary Skill Focus:** Power BI Data Modeling & Connections\n
### 1. The Business Value (The "Dollars")
A dashboard is only as secure and performant as its underlying data model. If you just drag-and-drop massive flat files into Power BI, the report will be sluggish, buggy, and impossible to scale. Mastering Power BI's Data Modeling engine allows you to build lightning-fast reports that can crunch 100 million rows dynamically. You sell speed, reliability, and scale.

### 2. Core Technical Concepts
- **The VertiPaq Engine:** Understanding how Power BI natively compresses and stores data in memory.
- **Dimensional Modeling Initiation:** The structural difference between Data Tables (facts) and Lookup Tables (dimensions).
- **Establishing Relationships:** 1-to-Many vs Many-to-Many cardinality inside Power BI's model view.
- **Cross-Filter Direction:** Why standardizing on "Single" cross-filtering prevents ambiguous data paths and circular errors.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Flattening the entire universe into one giant, 100-column, 50-million-row "super table" (The "Mega-Table Anti-Pattern").
- Activating Bi-Directional filtering everywhere just to force numbers to show up on the canvas.

✅ **The Professional Approach:**
- Creating a lean, perfectly structured Star Schema.
- Hiding all foreign keys in the "Fact" table so end-users are forced to slice data using the proper "Dimension" attributes.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Import 4 raw CSV files into an empty Power BI Desktop instance.
2. Navigate to the Model View and establish 1-to-many relationships connecting the Sales Ledger to the Products, Dates, and Customers lookup tables.
3. Validate the model by ensuring filtering flows strictly downwards from Dimensions to Facts.

### 5. Real-World Client Scenario
**The Request:** "Our current Power BI report takes 45 seconds to load a visual when we click a filter. It's unusable."
**Your Execution:** You diagnose that their mega-table approach is suffocating RAM. You refactor the architecture into a clean Star Schema, dropping file size by 80%.
**The Pitch:** "I re-architected your underlying data model leveraging the VertiPaq compression engine, reducing report load times from 45 seconds to instant, saving thousands of hours in executive wait time."
`,
        quiz: {
          id: "q_13",
          title: "Knowledge Check: Connecting the Dots",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_13_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Power BI Data Modeling & Connections", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_14",
        title: "Week 14: DAX Fundamentals",
        content: `### DAX Fundamentals\n\n**Primary Skill Focus:** Basic Measures & Calculated Columns\n
### 1. The Business Value (The "Dollars")
DAX (Data Analysis Expressions) is the brain of Power BI. While the frontend visuals look pretty, DAX is what calculates the complex business logic (profit margins, currency conversions, dynamic thresholds). If you cannot write accurate DAX, you cannot deliver custom business value. Mastering DAX transforms you from a "dashboard builder" into a computational architect.

### 2. Core Technical Concepts
- **Calculated Columns vs. Measures:** The most critical distinction in Power BI. Columns compute row-by-row on load; Measures compute dynamically based on user filter contexts.
- **Aggregation Basics:** SUMX vs SUM, AVERAGEX vs AVERAGE (The Iterator functions).
- **Implicit vs. Explicit Measures:** Why you should never drag a raw numeric column onto the canvas, and instead author a formal explicit DAX Measure.
- **Variables in DAX ('VAR' and 'RETURN'):** Writing readable, optimized, debuggable DAX code.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Using Calculated Columns for everything because it feels like Excel (bloating the file size and slowing down performance).
- Relying on Power BI's "auto-sum" implicit metrics.

✅ **The Professional Approach:**
- Abstracting all logic into meticulously named Explicit Measures (e.g., '[Total Revenue (USD)]').
- Using 'DIVIDE(Numerator, Denominator, 0)' instead of the standard '/' operator to intrinsically handle divide-by-zero errors.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Create a dedicated "Measure Table" inside Power BI to organize your computations.
2. Author explicit DAX measures for Total Revenue, Total Cost, and Gross Margin %.
3. Implement an Iterator measure (SUMX) to accurately calculate line-level discounted pricing dynamically across the entire model.

### 5. Real-World Client Scenario
**The Request:** "We need to calculate our exact margin dynamically, accounting for tiered volume discounts based on whatever date range the user selects."
**Your Execution:** You write an optimized SUMX measure utilizing nested variables to compute the dynamic discounts row-by-row before aggregating the final sum to the canvas.
**The Pitch:** "I engineered an optimized DAX measure that dynamically recalculates your profit margins instantly at any level of granularity, ensuring absolute mathematical accuracy across your entire product portfolio."
`,
        quiz: {
          id: "q_14",
          title: "Knowledge Check: DAX Fundamentals",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_14_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Basic Measures & Calculated Columns", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_15",
        title: "Week 15: Time Intelligence",
        content: `### Time Intelligence\n\n**Primary Skill Focus:** DAX Time Intelligence Functions\n
### 1. The Business Value (The "Dollars")
Businesses live and die on Month-over-Month and Year-over-Year growth. Executives cannot make strategic decisions without knowing if they are outpacing the same quarter from last year. If you manually calculate these dates, your reporting is useless the following day. Mastering Time Intelligence functions in DAX allows you to build dynamic comparative engines that instantly answer the board's favorite question: "Are we doing better than last time?" This is pure consultative value.

### 2. Core Technical Concepts
- **The Date Table Requirement:** You cannot perform time intelligence on a raw transactional date column. You must have a dedicated, continuous Date Dimension marked as the official Date Table.
- **CALCULATE with SAMEPERIODLASTYEAR:** Modifying the filter context automatically to shift the baseline backwards precisely one year, regardless of the current report filter.
- **YTD, QTD, MTD:** Automating the accumulation of values up to the present reporting day.
- **DATEADD vs PARALLELPERIOD:** When to shift forward/backward explicitly by intervals, and when to snap to calendar bounds.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Writing massive IF statements to determine if a date is inside "this year".
- Getting errors on leap years or missing dates because they didn't use a continuous Date Dimension.

✅ **The Professional Approach:**
- Architecting a centralized Date table that handles all corporate fiscal calendars.
- Using variables (VAR) to calculate Current vs Prior periods cleanly before returning the variance percentage.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Connect your model to the corporate Date Dimension table and mark it correctly in Power BI.
2. Author an explicit DAX measure calculating [Total Sales YTD].
3. Author a comparative measure [Total Sales SPLY] (Same Period Last Year).
4. Combine them to create a dynamic [YoY Variance %] measure that instantly alerts executives if growth dips below zero.

### 5. Real-World Client Scenario
**The Request:** "We want a dashboard that tracks our Black Friday sales against last year's Black Friday, but the dates shift every year."
**Your Execution:** You architect an advanced Time Intelligence DAX structure utilizing custom fiscal week offsets, enabling exact comparative matching independent of calendar drift.
**The Pitch:** "I engineered a dynamic reporting matrix that automatically aligns your shifting promotional calendars, allowing the CMO to track live performance against historical promotions instantly."
`,
        quiz: {
          id: "q_15",
          title: "Knowledge Check: Time Intelligence",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_15_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering DAX Time Intelligence Functions", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_16",
        title: "Week 16: The Art of UI/UX in BI",
        content: `### The Art of UI/UX in BI\n\n**Primary Skill Focus:** Layout, Bookmarks, Tooltips\n
### 1. The Business Value (The "Dollars")
The harshest reality of analytics: if the dashboard is ugly or confusing, the client won't trust the numbers. Poor UI/UX leads to low adoption rates, which means your $50,000 BI implementation is deemed a failure. Mastering BI design isn't about making things "pretty"; it's about reducing cognitive load. You sell clarity and adoption. When an executive can find their answer in 3 seconds instead of 30, you've secured your retainer for life.

### 2. Core Technical Concepts
- **The Z-Pattern & Visual Hierarchy:** Placing high-level KPIs at the top left, trending charts below, and granular detail tables at the bottom.
- **High Data-to-Ink Ratio:** Eliminating all unnecessary gridlines, background colors, and 3D effects. The data should be the only ink on the page.
- **Bookmarks & Selections:** Acting like a web developer. Creating hidden panels, pop-out slicers, and toggle switches to save canvas real estate.
- **Custom Tooltips:** Embedding mini-reports inside hover actions, offering detail without cluttering the main screen.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Putting 15 complex visuals on a single page, resulting in cognitive overload and terrible performance.
- Using bright red and dark green as primary colors (ignoring color blindness accessibility standards).

✅ **The Professional Approach:**
- Adhering to a strict maximum of 5 visuals per page.
- Utilizing neutral color palettes (grays, slates) and only using bright colors (like crimson red) to highlight actionable anomalies.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Re-design the messy default sales dashboard into a sleek executive overview.
2. Implement an interactive pop-out filter pane using Bookmarks.
3. Build a custom Report Page Tooltip that reveals daily sales velocity when a user hovers over a monthly aggregate bar.

### 5. Real-World Client Scenario
**The Request:** "Our sales team hates logging into our BI tool because the dashboard feels too complicated."
**Your Execution:** You strip away 70% of the clutter, design a fluid pop-out navigation menu, and implement strategic white space, mimicking a modern web application.
**The Pitch:** "I overhauled the user interface to reduce cognitive friction, resulting in a 300% increase in daily active dashboard usage across your sales force this week."
`,
        quiz: {
          id: "q_16",
          title: "Knowledge Check: The Art of UI/UX in BI",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_16_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Layout, Bookmarks, Tooltips", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_17",
        title: "Week 17: Advanced Visuals & Security",
        content: `### Advanced Visuals & Security\n\n**Primary Skill Focus:** Custom Visuals, Row Level Security\n
### 1. The Business Value (The "Dollars")
A single data leak to the wrong department can cost a company millions and lead to termination. Clients need to know that their data is secure at the row-level. Row Level Security (RLS) is the ultimate enterprise feature. By implementing dynamic RLS, you prove you can deploy a single global dashboard where the CEO sees everything, but the California Regional Manager only sees California. This multi-tenant security architecture commands elite consulting rates.

### 2. Core Technical Concepts
- **Row Level Security (RLS) Filters:** Intercepting queries before they execute. Filtering the underlying model based on the logged-in user.
- **Dynamic RLS via USERPRINCIPALNAME():** Using a mapping table to grant access based on the user's Entra ID (Azure AD) email address.
- **Custom Visual Ecosystem:** Escaping the default visual constraints via the AppSource marketplace (e.g., Zebra BI, HTML Content).
- **Field Parameters:** Allowing users to dynamically swap the axes or metrics (e.g., swapping 'Revenue' to 'Profit' without changing pages).

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Creating 50 different copies of the exact same report, one for each state manager, leading to maintenance hell.
- Hardcoding user emails directly into RLS roles, forcing a redeployment every time an employee is hired or fired.

✅ **The Professional Approach:**
- Deploying a single definitive master report containing dynamic RLS tied directly to the corporate HR hierarchy table.
- Utilizing Field Parameters to condense 5 reporting views down into 1 highly-interactive matrix.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Create an 'Access_Matrix' table binding employee emails to regional codes securely.
2. Implement Dynamic RLS using the DAX PATH() and USERPRINCIPALNAME() functions.
3. Publish the report to the Power BI Service and test the security roles "As User".

### 5. Real-World Client Scenario
**The Request:** "We want to roll out to 500 franchisees, but absolutely nobody can see another franchisee's financial data."
**Your Execution:** You architect a bulletproof dynamic RLS model connected to the client's internal directory.
**The Pitch:** "I instituted an enterprise-grade Row Level Security model. You now have a single, highly-performant master dashboard that dynamically and securely adapts to all 500 distinct end-users based on their corporate identity."
`,
        quiz: {
          id: "q_17",
          title: "Knowledge Check: Advanced Visuals & Security",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_17_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Custom Visuals, Row Level Security", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_18",
        title: "Week 18: Capstone 3: The Power BI Hub",
        content: `### Capstone 3: The Power BI Hub\n\n**Primary Skill Focus:** End-to-End Workspace Setup\n
### 1. The Business Value (The "Dollars")
Clients don't buy Power BI Desktop files; they buy operational systems. A report is just a file until it's properly deployed into the Power BI Service within a governed Workspace, bundled into an App, and scheduled for automated refresh. If you can establish an End-to-End Workspace Setup, you are no longer just an analyst—you are an Architect setting up a client's entire BI infrastructure. This commands deployment fees scaling upwards of $10,000.

### 2. Core Technical Concepts
- **Workspace Architecture:** Dev vs Test vs Prod. Managing artifact isolation correctly.
- **Power BI Apps:** The professional method of distributing dashboards to end-users (never sharing individual reports).
- **Data Gateways & Refresh Schedules:** Establishing the secure bridge between the cloud and the client's on-premise SQL servers.
- **Deployment Pipelines:** Migrating datasets and reports across environments without breaking production.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Sharing reports directly out of a "My Workspace", locking out the organization if the creator leaves the company.
- Leaving datasets on manual refresh, forcing you to constantly intervene.

✅ **The Professional Approach:**
- Deploying all reports inside formal Shared Workspaces attached to Microsoft 365 Groups.
- Decoupling Datasets from Reports (the "Golden Dataset" architecture) so multiple reports can live off a single source of truth.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Finalize the full Capstone interactive report with RLS and dynamic metrics.
2. Publish your 'Golden Dataset' to the service, and connect a thin 'Report' file to it.
3. Configure the daily scheduled refresh via the personal/enterprise gateway.
4. Package the Workspace into a polished Power BI App for end-user distribution.

### 5. Real-World Client Scenario
**The Request:** "We have 10 different Power BI files flying around in Outlook and nobody knows which one is accurate."
**Your Execution:** You halt all ad-hoc sharing, deploy a central Hub architecture, certify the Golden Datasets, and launch an official corporate 'App'.
**The Pitch:** "I architected and deployed your official enterprise Reporting Hub. Your entire executive team now accesses a single, certified, auto-refreshing portal, immediately eliminating the rampant 'competing numbers' problem."
`,
        quiz: {
          id: "q_18",
          title: "Knowledge Check: Capstone 3: The Power BI Hub",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_18_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering End-to-End Workspace Setup", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: "c_phase4",
    title: "Phase 4: Monetization & Career Launch",
    description: "Focus on freelancing, proposal writing, and building an automated consulting business.",
    price: 249.99,
    createdAt: Date.now(),
    modules: [
      {
        id: "m_19",
        title: "Week 19: Discovering the Need",
        content: `### Discovering the Need\n\n**Primary Skill Focus:** Business Problem Identification\n
### 1. The Business Value (The "Dollars")
Freelancing fails when you try to sell "dashboards". No business owner wakes up saying, "I want to buy a dashboard." They wake up saying, "I am bleeding cash and I don't know where." Business Problem Identification is the highest-leverage skill in consulting. If you can diagnose a client's operational pain, calculate the financial impact of that pain, and pitch a data solution, you transition from a $30/hr coder into a $150/hr strategic partner.

### 2. Core Technical Concepts
- **The Discovery Call Framework:** The structured methodology for extracting the client's core pain points in the first 15 minutes.
- **The SPIN Selling Model:** Situation, Problem, Implication, Need-Payoff questions applied to data analytics.
- **ROI Computation:** Calculating the exact dollar cost of a client's manual processes (Hours Spent * Hourly Rate * Weeks = Liability).
- **Defining Scope:** Establishing exactly what questions will be answered, preventing scope creep before the contract is signed.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Starting the conversation by talking about SQL, Python, or Power BI licenses. The client tunes out instantly.
- Accepting a vague request like "We just need better reporting" without drilling down.

✅ **The Professional Approach:**
- Ignoring the software completely and focusing strictly on the business processes and bottlenecks.
- Forcing the client to quantify their pain. "If we don't fix this reporting delay by Q4, how much revenue is at risk?"

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Review the provided mock transcript of a CEO complaining about their inventory.
2. Isolate the core 'Problem' and the associated 'Financial Implication'.
3. Draft a Discovery Call agenda containing 5 targeted SPIN questions designed to uncover the monetary value of their bottleneck.

### 5. Real-World Client Scenario
**The Request:** "I think we need a Power BI guy to help us track orders, we've outgrown Excel."
**Your Execution:** You run a Discovery session, digging past the "Excel" problem to realize they are missing out on volume discounts because their purchasing manager lacks visibility.
**The Pitch:** "Your core issue isn't Excel; you are actively losing $120k annually because your buyers cannot see consolidated reorder points. My solution will trigger automated reorder alerts to capture those discounts."
`,
        quiz: {
          id: "q_19",
          title: "Knowledge Check: Discovering the Need",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_19_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Business Problem Identification", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_20",
        title: "Week 20: The Value Proposal",
        content: `### The Value Proposal\n\n**Primary Skill Focus:** Pitching & Pricing Strategy\n
### 1. The Business Value (The "Dollars")
The proposal is where the deal is won or lost. If you send an hourly estimate ("40 hours at $50/hr"), the client views you as a risky commodity. A Value Proposal flips the psychology: you price the project based on the financial outcome you are delivering. If your dashboard automation saves a company $100,000 in wasted labor annually, charging $15,000 for it is a bargain. This is how you escape the hourly billing trap.

### 2. Core Technical Concepts
- **Value-Based Pricing vs Hourly Billing:** Understanding why hourly billing penalizes expertise and efficiency.
- **The 3-Tier Option Strategy:** Why you must always present the client with a Bronze, Silver, and Gold package (anchoring).
- **Risk Reversal:** Structuring the deal so the client feels no financial anxiety (milestone payments, clear deliverables).
- **The "Cost of Inaction":** A dedicated section in your proposal mathematically proving why doing nothing is the most expensive choice.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Sending a bare-bones word document that just says "Dashboard setup - $2,000".
- Justifying their price by listing the amount of hours they think it will take them to write the SQL code.

✅ **The Professional Approach:**
- Drafting a high-ticket proposal that focuses 80% on business outcomes and 20% on technical implementation.
- Anchoring the price against the massive cost of their current inefficient state.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Review the provided case study of a logistics firm losing $8k a month to manual reporting errors.
2. Construct a 3-tier value proposal.
3. Establish the base investment at a 10:1 ROI ratio based on the client's annualized loss.
4. Draft the specific "Cost of Inaction" paragraph.

### 5. Real-World Client Scenario
**The Request:** "Can you send over an estimate for how many hours this reporting tool will take?"
**Your Execution:** You send a comprehensive Value Proposal that doesn't mention hours once. It focuses entirely on migrating their workflow to real-time.
**The Pitch:** "I don't bill by the hour, I bill by the outcome. This proposal outlines exactly how we will eliminate the $96k annualized reporting deficit, deploying a full solution for a fixed, risk-free investment of $12,500."
`,
        quiz: {
          id: "q_20",
          title: "Knowledge Check: The Value Proposal",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_20_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Pitching & Pricing Strategy", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_21",
        title: "Week 21: The Portfolio That Sells",
        content: `### The Portfolio That Sells\n\n**Primary Skill Focus:** GitHub/Web Portfolio Design\n
### 1. The Business Value (The "Dollars")
A resume gets you an HR interview; a portfolio gets you the consulting contract. When a CEO is about to hand you a $10,000 retainer, they don't care where you went to school; they need proof that you can execute. A high-converting Web Portfolio acts as your 24/7 autonomous sales asset. It proves your competence visually, showcasing interactive reports, clean code repositories, and most importantly, business case studies.

### 2. Core Technical Concepts
- **The "Case Study" Framework:** Every project must include: The Problem, The Technical Solution, and The Business Impact.
- **GitHub Hygiene:** Ensuring your repository has pristine README files, well-commented SQL/DAX code, and architectural schemas.
- **Live Integration:** Embedding interactive Power BI 'Publish to Web' reports directly into your portfolio site so clients can touch the data.
- **The Lead Magnet:** Designing your site to capture client emails or schedule strategy calls directly (Calendly integration).

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Building a dashboard utilizing the generic "Superstore" or "Titanic" dataset (it proves you are a beginner following a Youtube tutorial).
- Having a portfolio site that just shows screenshots of charts without any context as to *why* the chart was built.

✅ **The Professional Approach:**
- Using real-world, messy, scraped datasets for bespoke projects.
- Writing case studies that focus heavily on the simulated ROI and the specific architectural challenges you solved to clean the data.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Finalize the styling and architecture of your Capstone 2 SQL Pipeline and Capstone 3 Power BI App.
2. Draft the professional Case Study narrative for the portfolio.
3. Configure your GitHub repository to act as a public-facing asset.
4. Publish the interactive report and embed it into your professional landing page.

### 5. Real-World Client Scenario
**The Request:** "We're talking to a few freelancers, do you have any examples of your work?"
**Your Execution:** You don't just send a link. You send a link directly to a specific Case Study on your site that mirrors their exact industry problem.
**The Pitch:** "Absolutely. Here is a link to my live interactive portfolio. Specifically, look at the supply chain case study—I executed a highly similar predictive data model to the one we discussed today to resolve their logistics bottleneck."
`,
        quiz: {
          id: "q_21",
          title: "Knowledge Check: The Portfolio That Sells",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_21_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering GitHub/Web Portfolio Design", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_22",
        title: "Week 22: Client Acquisition Engine",
        content: `### Client Acquisition Engine\n\n**Primary Skill Focus:** Outreach & LinkedIn Strategy\n
### 1. The Business Value (The "Dollars")
You can be the best SQL developer in the world, but if nobody knows you exist, your revenue is zero. The Client Acquisition Engine is the difference between hoping for referrals and predicting your monthly income. Mastering Outreach & LinkedIn Strategy allows you to consistently generate high-quality B2B leads, filling your pipeline with executives who are actively seeking solutions to their data chaos.

### 2. Core Technical Concepts
- **B2B Persona Targeting:** Identifying exactly who holds the budget (e.g., Dir. of RevOps, CFO, VP of Sales).
- **The "Giveaway" Strategy:** Providing immediate, asymmetric value in your cold outreach (e.g., sending a free mini-audit or a custom mock-up).
- **LinkedIn Authority Building:** Transitioning your profile from a "Resume" to a "Landing Page".
- **The Cold Email/DM Architecture:** Hook -> Relevancy -> Value Proposition -> Low Friction Call-To-Action.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Sending generic "I am a freelance data analyst, hire me" messages that get instantly deleted.
- Creating content on LinkedIn that just talks about DAX formulas (which only attracts other data analysts, not clients).

✅ **The Professional Approach:**
- Identifying a company that recently hired a new VP of Sales, and sending a highly-targeted message about overhauling their archaic CRM reporting.
- Creating content that discusses *business outcomes*, attracting the executives who actually hold the purse strings.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Revamp your LinkedIn Profile to serve as a high-converting Landing Page optimizing for your target niche.
2. Use Sales Navigator (or advanced search) to build a prospect list of 20 high-value targets.
3. Draft the 3-step outreach sequence: The Initial Value Hook, The Follow-Up, and The "Break-Up" sequence.
4. Execute the sequence.

### 5. Real-World Client Scenario
**The Request:** (Your calendar is empty).
**Your Execution:** You run your structured acquisition engine, spending 1 hour a day sending 10 highly-targeted, high-value customized Loom video audits to local businesses.
**The Pitch (Outreach):** "I noticed you just expanded into 3 new regional territories. Usually, managing inventory across new regions causes massive reporting delays. I built a mock-up showing how you could automate this—mind if I send over the 2-minute video?"
`,
        quiz: {
          id: "q_22",
          title: "Knowledge Check: Client Acquisition Engine",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_22_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Outreach & LinkedIn Strategy", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_23",
        title: "Week 23: Service Automation",
        content: `### Service Automation\n\n**Primary Skill Focus:** Zapier/Make Integrations\n
### 1. The Business Value (The "Dollars")
As a highly-paid consultant, your time is your most constrained asset. If you are manually onboarding clients, manually sending invoices, and manually configuring their datasets, you will hit an income ceiling rapidly. Service Automation, utilizing tools like Zapier and Make, allows you to decouple your income from your hours. You generate a seamless, professional experience for your clients while reclaiming 15 hours a week of administrative labor.

### 2. Core Technical Concepts
- **Workflow Triggers & Actions:** The core mechanic of no-code automation platforms.
- **Client Onboarding Pipelines:** Automating the flow from "Signed Proposal" -> "Stripe Invoice" -> "Google Drive Folder Creation" -> "Welcome Email".
- **API Webhooks:** Connecting disparate tools (like a lead generation form to your personal CRM) without writing native code.
- **Automated Data Ingestion:** Setting up pipelines that automatically grab email attachments and dump them into a SharePoint folder to trigger the Power BI refresh.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Manually copy/pasting data from a Typeform into a Google Sheet as new client leads come in.
- Forgetting to send invoices or follow-up documents because of administrative chaos.

✅ **The Professional Approach:**
- Building a fully automated CRM using Airtable and Zapier that handles the entire pipeline autonomously.
- Delivering a world-class, instant onboarding experience the second a client signs the contract, projecting absolute high-end authority.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Set up a Zapier account.
2. Build an automation trigger: When a new lead fills out your Portfolio Contact Form, route their details immediately into an Airtable/Notion CRM.
3. Build an onboarding trigger: When a Proposal is signed, auto-generate a generic Google Drive folder structure for the client's assets and email them the link.

### 5. Real-World Client Scenario
**The Request:** "I've signed the contract, what are next steps?"
**Your Execution:** Zero manual effort on your part.
**The Pitch (Internal):** The automation instantly triggers. An invoice is dispatched, their secure data-drop folder is provisioned, and they receive a highly-polished Welcome Packet via email outlining the exact technical timeline. You wake up to a $5,000 Stripe notification and a fully prepped workspace.
`,
        quiz: {
          id: "q_23",
          title: "Knowledge Check: Service Automation",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_23_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Zapier/Make Integrations", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_24",
        title: "Week 24: Capstone 4: The Business Launch",
        content: `### Capstone 4: The Business Launch\n\n**Primary Skill Focus:** Full Lifecycle Consulting\n
### 1. The Business Value (The "Dollars")
This is the culmination of Datalabs Analytics Academy. You are not just building technical assets; you are launching a full-scale Data Consulting firm. This module enforces the integration of your technical mastery, your portfolio, your pitching strategy, and your sales engine into a cohesive, unstoppable business system. Execution here is what generates the revenue.

### 2. Core Technical Concepts
- **Entity Setup:** Understanding the basics of establishing an LLC and securing professional liability insurance for enterprise clients.
- **The Tech Stack of Consulting:** Standardizing on your tool belt (e.g., QBO for invoicing, Slack Connect for client comms, GitHub for code).
- **The Retainer Model:** Transitioning from one-off projects to Monthly Recurring Revenue (MRR) by offering Analytics-as-a-Service, guaranteeing dashboard uptime and iterative strategy calls.
- **Full Lifecycle Consulting:** Running a project from cold lead -> discovery -> proposal -> architecture -> modeling -> deployment -> hand-off.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Endlessly tweaking the portfolio font colors while avoiding the scary task of sending cold emails.
- Finishing a project, handing the files over, and walking away, leaving $2,000/mo in retainer revenue on the table.

✅ **The Professional Approach:**
- Launching imperfectly but aggressively. Iterating on the sales pitch based on actual client rejection/feedback.
- Proposing the ongoing "Support & Evolution" retainer in the very first proposal, anchoring the expectation of a long-term partnership.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Perform a systemic audit of your Portfolio, Data Pipelines, and Capstone BI Dashboards.
2. Finalize your standard B2B Value Proposal template.
3. Execute your first batch of 50 targeted outreaches via LinkedIn or Email.
4. Book your first strategy call.

### 5. Real-World Client Scenario
**The Request:** "Execute the plan."
**Your Execution:** You combine the raw technical power of DAX, SQL, and Power Query with the consultative leverage of Value-Pricing and Needs-Discovery. You are no longer waiting for permission; you are autonomously generating business.
**The Pitch:** "I run a boutique data architecture firm. We specialize in eliminating millions in operational waste by migrating companies off fragile spreadsheets and onto automated, bulletproof reporting structures. Let's schedule 15 minutes to see if we're a fit."
`,
        quiz: {
          id: "q_24",
          title: "Knowledge Check: Capstone 4: The Business Launch",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_24_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Full Lifecycle Consulting", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: "c_pbi_1",
    title: "Phase 1: Architecture & Modeling",
    description: "Build robust, scalable data models that serve as the foundation for executive reporting.",
    price: 99.99,
    createdAt: Date.now(),
    modules: [
      {
        id: "m_pbi_1",
        title: "Week 1: The Star Schema Blueprint",
        content: `### The Star Schema Blueprint\n\n**Primary Skill Focus:** Fact vs Dimension Tables\n
### 1. The Business Value (The "Dollars")
In the enterprise analytics realm, terrible data architecture is the leading cause of failed BI implementations. When reporting takes 5 minutes to load or constantly crashes, user adoption drops to zero. A flawless Star Schema is the difference between a high-performing global dashboard and a sluggish mess. Executing this correctly ensures scalability, allowing the client to transition seamlessly from 10k rows to 100M rows, protecting their IT investment and securing your technical authority.

### 2. Core Technical Concepts
- **Fact vs. Dimension Tables:** Deep dive into atomic transaction records (Facts) versus filtering lookup tables (Dimensions).
- **Surrogate Keys:** Implementing integer-based meaningless keys over natural alphanumeric keys to massively optimize storage and join speed.
- **Snowflaking and Granularity:** Understanding when to normalize a dimension further and the severe performance costs associated with over-snowflaking.
- **The Centrality of the Date Dimension:** Why nearly 80% of all analytical queries require a continuous, gapless Calendar dimension.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Creating a single, flat "Mega Table" with 100 columns.
- Establishing bi-directional relationships everywhere to force the model to work, introducing wild ambiguity in DAX results.

✅ **The Professional Approach:**
- Engineering a strict, pure Star Schema utilizing active single-direction filtration exclusively.
- Abstracting all foreign keys into integer IDs to maximize the VertiPaq engine's dictionary compression capabilities.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Assess the raw, denormalized corporate JSON extract provided in the lab.
2. Execute a full architectural breakdown: map out the ERD separating the transactional events from the descriptive attributes.
3. Establish the formal relationship model ensuring explicit 1-to-Many cardinality flows.
4. Validate the architecture mathematically against a baseline aggregate query.

### 5. Real-World Client Scenario
**The Request:** "Our global reporting system grinds to a halt when the CFO tries to slice revenue by product category and region simultaneously."
**Your Execution:** You rip out their massive flat file architecture. You deploy a highly compressed, integer-indexed Star Schema.
**The Pitch:** "I re-architected your backend data model. By moving to a formal Star Schema, we reduced the cloud memory footprint by 85% and increased query rendering speed to under half a second. Your CFO will never wait for a refresh again."
`,
        quiz: {
          id: "q_pbi_1",
          title: "Knowledge Check: The Star Schema",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_pbi_1_1",
              text: "Which of the following describes a Fact Table?",
              options: ["Contains descriptive attributes", "Contains quantitative data and foreign keys", "A flat table with all data", "Contains images"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_pbi_2",
        title: "Week 2: Power Query Data Cleansing",
        content: `### Power Query Data Cleansing\n\n**Primary Skill Focus:** M Code & Transformations\n
### 1. The Business Value (The "Dollars")
Data from the real world is notoriously dirty. Erroneous timestamps, nested JSON, and misspelled categories cost companies millions in miscalculated KPIs. Power Query is the automated ETL engine of the Microsoft stack. By mastering M code and advanced transformations, you transition manual, grueling 10-hour weekend data-prep tasks into a 5-second automated refresh. This capability allows you to bill for automation, not hours.

### 2. Core Technical Concepts
- **The M Execution Engine:** Understanding the step-by-step sequential processing of the Power Query Formula Language.
- **Query Folding:** The holy grail of ETL performance. How to guarantee that your transformations are pushed back to the SQL server rather than executing locally in RAM.
- **Unpivoting Data:** Transforming wide, static, human-readable tables into tall, machine-readable datasets required for DAX modeling.
- **Custom Functions in M:** Encapsulating logic (like an API call or complex string extraction) into a reusable function you can invoke across an entire table.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Breaking Query Folding on Step 2 by changing a data type too early, forcing the local machine to download gigabytes of raw data.
- Hardcoding file paths, destroying the refresh the moment a file is moved.

✅ **The Professional Approach:**
- Parameterizing file paths and server names so the model can be migrated seamlessly between Dev and Prod environments.
- Ensuring Query Folding remains intact until the absolute final step, maximizing server-side compute efficiency.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Download the chaotic, un-pivoted 5-year legacy dataset.
2. Parameterize the source connection.
3. Unpivot the date columns, standardize the transactional flags using conditional M logic, and implement aggressive error handling.
4. Stress-test the query folding diagnostics within the Power Query editor.

### 5. Real-World Client Scenario
**The Request:** "Every Monday at 6 AM, my team spends 4 hours cleaning and formatting the regional sales CSVs before we can even begin to analyze them."
**Your Execution:** You script a hardened M-code pipeline. The user drops the new CSV in a folder, clicks refresh, and the pipeline autonomously executes the 4 hours of cleaning logic instantly.
**The Pitch:** "I have entirely retired your manual prep phase. The Power Query pipeline now handles all data standardization autonomously, reclaiming 200 hours of highly-paid labor annually."
`,
        quiz: {
          id: "q_pbi_2",
          title: "Knowledge Check: Power Query",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_pbi_2_1",
              text: "What language does Power Query use under the hood?",
              options: ["DAX", "SQL", "Python", "M"],
              correctIndex: 3
            }
          ]
        }
      }
    ]
  },
  {
    id: "c_pbi_2",
    title: "Phase 2: DAX Formula Mastery",
    description: "Write dynamic, complex calculations that answer high-level business questions.",
    price: 149.99,
    createdAt: Date.now(),
    modules: [
      {
        id: "m_pbi_3",
        title: "Week 3: Filter Context & CALCULATE",
        content: `### Filter Context & CALCULATE\n\n**Primary Skill Focus:** Evaluation Contexts\n
### 1. The Business Value (The "Dollars")
If you don't deeply understand Filter Context, your DAX numbers are objectively wrong. When you present incorrect calculations to an executive board, your consulting credibility vanishes instantly. 'CALCULATE' is the single most powerful function in the DAX language. Mastering it allows you to dynamically override or alter the natural context of the data to answer extraordinarily complex questions (e.g., "What is our profit margin specifically for products that were launched in Q3 but sold in Q4?").

### 2. Core Technical Concepts
- **Filter Context:** The invisible environment evaluating every measure based on slicers, rows, columns, and cross-filters applied at that exact millisecond.
- **The Power of CALCULATE:** The *only* function in DAX that can modify the Filter Context programmatically.
- **Context Transition:** How row context inside an iterator (SUMX) is transformed into an equivalent filter context by an implicit or explicit CALCULATE.
- **KEEPFILTERS vs REMOVEFILTERS (ALL):** Strategically deciding whether to respect the user's canvas filters or violently rip them away to calculate grand totals for percentage derivations.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Writing massive, nested 'IF' statements inside visual components because they don't understand how to manipulate the context engine.
- Returning blank or erroneous data because they accidentally wiped out the required dimensional filter.

✅ **The Professional Approach:**
- Utilizing 'CALCULATE' surgically to compute dynamic denominators, allowing for real-time market share and percentage-of-total calculations.
- Deeply tracing the lineage of the contextual filters before they hit the calculation engine.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Implement a baseline measure to act as the numerator.
2. Utilize 'CALCULATE' and 'ALL(DimProducts)' to author a measure that returns the grand total of sales across the entire catalog, unaffected by local product slicers.
3. Combine these outputs to engineer a dynamic robust [Market Share %] measure.

### 5. Real-World Client Scenario
**The Request:** "We need to know what percentage of our total North American revenue is derived exclusively from our new recurring subscription product, regardless of what the user clicks on the report."
**Your Execution:** You architect a dynamic measure using 'CALCULATE', enforcing a static override for the subscription tier while respecting the geographic slicer context.
**The Pitch:** "I deployed dynamic filter overrides securing the market-share math. You now have a resilient metric that guarantees accurate penetration calculations even when the users dramatically alter the surrounding dashboard controls."
`,
        quiz: {
          id: "q_pbi_3",
          title: "Knowledge Check: CALCULATE",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_pbi_3_1",
              text: "What is the primary function of CALCULATE?",
              options: ["To do basic math", "To change the filter context", "To format numbers", "To export data"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_pbi_4",
        title: "Week 4: Time Intelligence Architecture",
        content: `### Time Intelligence Architecture\n\n**Primary Skill Focus:** YoY, YTD, MoM Calculations\n
### 1. The Business Value (The "Dollars")
Time is the universal axis of business performance. Every board meeting revolves around MoM, QoQ, and YoY. If you hardcode these calculations, they break dynamically. By engineering a robust Time Intelligence Architecture, you provide automated, rolling comparative insights. You essentially build an autonomous financial analyst that never sleeps and never misaligns a fiscal period.

### 2. Core Technical Concepts
- **The Gapless Date Dimension:** The absolute requirement of Time Intelligence. A continuous table from January 1st to December 31st.
- **SAMEPERIODLASTYEAR & DATEADD:** Modifying the temporal filter context to shift the baseline flawlessly, accounting for leap years and missing transactional dates.
- **Rolling Windows:** Using DATESINPERIOD to construct trailing 30-day, 90-day, or 12-month averages dynamically.
- **Handling Incomplete Periods:** Engineering DAX to hide YTD comparisons if the current month is only 3 days old, preventing a false "95% drop in YoY sales" panic.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Relying on Power BI's "Auto Date/Time" setting, which bloats the underlying model size massively and breaks across custom fiscal years.
- Displaying a massive negative YoY drop simply because last year's month is fully complete while the current month is only 2 days in.

✅ **The Professional Approach:**
- Disabling "Auto Date/Time" universally. Sourcing a definitive corporate Date Dimension.
- Utilizing 'MAX(FactTable[Date])' inside variables to truncate historical comparisons dynamically against incomplete current periods.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Connect and mark the official Date Table.
2. Author dynamic measures calculating YTD Sales and Prior Year YTD Sales.
3. Engineer a sophisticated variance measure that utilizes a conditional 'IF' wrapper, ensuring it only calculates up to the exact day of the running month.

### 5. Real-World Client Scenario
**The Request:** "Every month, our dashboard causes a panic because it looks like sales are down 80% YoY, but it's just because the month isn't over yet."
**Your Execution:** You deploy a hardened Time Intelligence DAX structure utilizing fair-comparison truncation logic.
**The Pitch:** "I overhauled the temporal architecture. Your YoY comparisons are now mathematically bound to equivalent date progress, eliminating the mid-month false alarms and delivering actionable, balanced forecasting."
`,
        quiz: {
          id: "q_pbi_4",
          title: "Knowledge Check: Time Intelligence",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_pbi_4_1",
              text: "Which DAX function calculates Year-to-Date?",
              options: ["TOTALYTD", "SUMYTD", "YTD_SUM", "CALCULATEYTD"],
              correctIndex: 0
            }
          ]
        }
      }
    ]
  },
  {
    id: "c_pbi_3",
    title: "Phase 3: Visual Storytelling & UI",
    description: "Design applications that non-technical users actually want to use.",
    price: 199.99,
    createdAt: Date.now(),
    modules: [
      {
        id: "m_pbi_5",
        title: "Week 5: The Executive Overview Layout",
        content: `### The Executive Overview Layout\n\n**Primary Skill Focus:** Visual Hierarchy & Principles\n
### 1. The Business Value (The "Dollars")
A report is only valuable if it drives action. If the layout is chaotic, the executive is paralyzed. The Executive Overview is your flagship deliverable; it is the $10,000 asset. Mastering UI/UX principles allows you to guide the stakeholder's eye immediately to the bleeding bottleneck or the explosive growth opportunity. You are engineering the digital environment where multimillion-dollar decisions are made.

### 2. Core Technical Concepts
- **Cognitive Load Optimization:** Removing gridlines, axis titles (when obvious), and legend clutter to maximize the data-to-ink ratio.
- **The Z-Pattern Journey:** Structuring the page reading path. Top-left (Macro KPIs) -> Middle (Trends) -> Bottom-Right (Granular details).
- **Proportional Scaling & Alignment:** Hard-coding X and Y coordinates to achieve pixel-perfect alignment.
- **Strategic Color Theory:** Retaining neutral palettes globally and reserving highly saturated colors (Red/Green) exclusively for actionable thresholds or anomalies.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Building out 15 different pie charts on a single page because it "feels like a dashboard."
- Using arbitrary bright colors for every category, turning the report into an illegible rainbow.

✅ **The Professional Approach:**
- Adhering to the "3-Second Rule": Can the CEO determine if we are on target or missing target within 3 seconds of opening the page?
- Utilizing advanced layout wireframes (Figma) before ever opening Power BI Desktop.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Analyze the provided "messy" legacy dashboard.
2. Apply the cognitive load reduction protocol: strip all chart junk and background noise.
3. Realign the remaining 4 critical visuals into a strict Z-Pattern grid.
4. Implement conditional formatting on the KPI cards to dynamically flag negative variance.

### 5. Real-World Client Scenario
**The Request:** "The board hates our current BI tool. They say it's just a wall of numbers and they still have to export to Excel to understand anything."
**Your Execution:** You execute a brutal reductionist redesign, implementing a clean executive wireframe that highlights ONLY the variance from target.
**The Pitch:** "I redesigned the analytical environment for the board. By stripping out the noise and engineering a strict visual hierarchy, they can diagnose global target variances instantly without a single manual export."
`,
        quiz: {
          id: "q_pbi_5",
          title: "Knowledge Check: Layout",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_pbi_5_1",
              text: "Where is the highest value real-estate on a dashboard?",
              options: ["Bottom right", "Top left", "Center", "Bottom left"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_pbi_6",
        title: "Week 6: Interactive App Experiences",
        content: `### Interactive App Experiences\n\n**Primary Skill Focus:** Bookmarks, Tooltips, Drillthrough\n
### 1. The Business Value (The "Dollars")
Modern organizations expect software, not static PDFs. If a user cannot slice, drill, and interact fluidly with the data, your solution feels archaic. Mastering Bookmarks, Tooltips, and Drillthroughs allows you to compress what would normally be a 20-page report down into a sleek, 3-page interactive App. This massively enhances user adoption and elevates your deliverable from "a report" to an "Enterprise Application".

### 2. Core Technical Concepts
- **Bookmarks & Selections:** Acting as a frontend developer to create hidden filter panes, toggle switches, and tabbed navigation interfaces.
- **Custom Report Page Tooltips:** Designing micro-reports that dynamically render additional granularity when the user hovers over a data point.
- **Drillthrough & Cross-Report Drillthrough:** Architecting secure, logical pathways for a user to vault from a macro Executive summary down to the exact row-level line item.
- **Sync Slicers:** Ensuring filter persistence as users navigate seamlessly across multiple tabs.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Building 30 identical pages just to show different static cuts of the data.
- Overloading the main canvas with 15 huge slicers, crushing the aesthetic and the rendering performance.

✅ **The Professional Approach:**
- Engineering a sleek, hidden pop-out menu utilizing Bookmarks and a dark-overlay backdrop.
- Deploying deep Drillthrough hierarchies so the page remains entirely clean until the exact moment the user requests granular detail.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Build a hidden filter pane targeting the Selection layer, utilizing Bookmarks to capture the open/close state.
2. Design a micro-tooltip page displaying daily velocity, and bind it to the main monthly aggregate visuals.
3. Configure a Drillthrough destination page allowing users to inspect the atomic transaction log of any anomalous product category.

### 5. Real-World Client Scenario
**The Request:** "We have 40 different departments and our current report is 40 pages long. Nobody can find what they need."
**Your Execution:** You collapse the redundant 40 pages into a single, masterful interactive application.
**The Pitch:** "I transformed your fragmented reporting sprawl into a unified interactive application. By utilizing deep Drillthrough and pop-out navigation, we compressed 40 pages into a 3-page hub, massively streamlining departmental discovery."
`,
        quiz: {
          id: "q_pbi_6",
          title: "Knowledge Check: Interactivity",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_pbi_6_1",
              text: "What feature allows you to capture the current state of a report page?",
              options: ["Screenshots", "Bookmarks", "Dashboards", "Slicers"],
              correctIndex: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: "c_pbi_4",
    title: "Phase 4: Deployment & Monetization",
    description: "Secure, publish, and sell your reporting infrastructure.",
    price: 249.99,
    createdAt: Date.now(),
    modules: [
      {
        id: "m_pbi_7",
        title: "Week 7: Row Level Security (RLS)",
        content: `### Row Level Security (RLS)\n\n**Primary Skill Focus:** Dynamic Security Models\n
### 1. The Business Value (The "Dollars")
Data leakage is a fatal liability. A company cannot deploy a unified dashboard if the New York manager can see the compensation metrics of the London office. Row Level Security (RLS) is an enterprise-grade security requirement. Mastering dynamic RLS proves you are an architect capable of handling sensitive, global deployments. You ensure that a single master file dynamically adapts, providing thousands of users with highly restricted, personalized views.

### 2. Core Technical Concepts
- **The Concept of RLS:** Implementing DAX filters that execute *beneath* the visualization layer, altering the actual dataset available based on identity.
- **Static vs. Dynamic RLS:** Transitioning from hardcoded roles to fluid, scalable architectures using 'USERPRINCIPALNAME()'.
- **The Security Mapping Table:** Architecting the bridge between an Active Directory (Entra ID) employee roster and the local data schema.
- **Cross-Filtering Security Constraints:** Understanding how bi-directional security propagation fundamentally differs from standard data propagation.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Hardcoding employee emails directly into Power BI Desktop roles, requiring massive manual intervention every time someone is hired or fired.
- Forgetting to lock down the underlying Workspace, meaning users just bypass RLS by accessing the raw dataset.

✅ **The Professional Approach:**
- Tying the Dynamic RLS mapping table directly to the corporate HR/Active Directory database via Power Query.
- Publishing the secured dataset to a heavily governed App environment, ensuring users only have 'Viewer' access.

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Import a mock Active Directory roster binding emails to specific Regional IDs.
2. Author the Dynamic RLS DAX protocol utilizing 'PATHCONTAINS' to handle hierarchical management chains securely.
3. Test the deployment locally using the "View As Role" simulator.
4. Establish the governing policies required for a secure Service deployment.

### 5. Real-World Client Scenario
**The Request:** "We want to give all 1,500 of our global salespeople access to the pipeline tracker, but they absolutely cannot see each other's deals."
**Your Execution:** You architect a dynamic RLS hierarchy, allowing you to deploy one single elegant App that securely partitions the underlying database 1,500 different ways instantly.
**The Pitch:** "I instituted an enterprise-grade security framework mapped to your corporate directory. You can now confidently deploy the unified pipeline to all 1,500 reps with zero risk of data contamination or internal leakage."
`,
        quiz: {
          id: "q_pbi_7",
          title: "Knowledge Check: RLS",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_pbi_7_1",
              text: "What does RLS stand for in Power BI?",
              options: ["Row Level Security", "Report Level Security", "Restricted Line System", "Region Level Service"],
              correctIndex: 0
            }
          ]
        }
      },
      {
        id: "m_pbi_8",
        title: "Week 8: Pitching the BI Retainer",
        content: `### Pitching the BI Retainer\n\n**Primary Skill Focus:** Value Proposal & Workspace Management\n
### 1. The Business Value (The "Dollars")
A dashboard is built once, but business logic evolves forever. A common trap is delivering a successful project, shaking hands, and returning to zero income the next day. BI is not a static product; it is a living operational system. By pitching a high-value Support & Evolution Retainer, you generate predictable Monthly Recurring Revenue (MRR). You transform from a disposable freelancer into checking the box for "Outsourced Analytics Department".

### 2. Core Technical Concepts
- **Analytics-as-a-Service (AaaS):** Structuring your offering to provide guaranteed uptime, data pipeline maintenance, and iterative enhancement.
- **The Post-Deployment Friction:** Understanding the exact moment the client realizes they need ongoing help (when metrics shift, APIs update, or new staff need onboarding).
- **Pricing the Retainer:** Scaling the monthly fee based on the complexity of the data pipeline and the required SLAs (Service Level Agreements).
- **Defining the Boundaries:** Structuring the SOW (Statement of Work) to prevent the "All-You-Can-Eat" scope creep disaster.

### 3. Consultant's Corner (Pro Tips & Pitfalls)
❌ **The Amateur Approach:**
- Saying "Call me if it breaks," thereby charging by the hour for stressful emergency fixes.
- Promising "unlimited dashboard updates," leading to massive burnout and negative profit margins.

✅ **The Professional Approach:**
- Proposing the evolution retainer natively within the initial project pitch. "Phase 1 is the build; Phase 2 is the operational partnership."
- Including highly defined deliverables: e.g., "Guaranteed pipeline monitoring, 1 monthly strategic architecture call, and up to 10 hours of iterative DAX/UI modification."

### 4. Step-by-Step Implementation Lab
**Your Action Items:**
1. Draft the formal Retainer clause to be appended to all future Capstone proposals.
2. Define the exact SLA boundaries (turnaround times, communication channels).
3. Architect the monthly "Value Report"—a document you will send the client every month proving the ROI of your continued retainer presence.

### 5. Real-World Client Scenario
**The Request:** "The dashboard is beautiful, thanks for the hard work. We'll let you know if we need anything else."
**Your Execution:** You intercept the sign-off, initiating the pre-planned Retainer Transition.
**The Pitch:** "The architecture is live. As your data volume scales and your fiscal targets shift next quarter, the logic will require iterative evolution. I offer a dedicated 'Data Partner' retainer ensuring zero-downtime, continuous optimization, and monthly strategic mapping for $2,500/mo. Shall we activate the partnership?"
`,
        quiz: {
          id: "q_pbi_8",
          title: "Knowledge Check: Monetization",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_pbi_8_1",
              text: "What is the best pricing model for an ongoing BI service?",
              options: ["Hourly billing", "Value-based monthly retainer", "Pro-bono", "Per-report flat fee"],
              correctIndex: 1
            }
          ]
        }
      }
    ]
  }
];

export const initialDbState: AppDatabase = {
  users: [
    {
      id: "u_admin",
      email: "admin@data2dollars.com",
      name: "System Admin",
      role: "admin",
      createdAt: Date.now()
    }
  ],
  courses: defaultCourses,
  enrollments: [],
  certificates: []
};
