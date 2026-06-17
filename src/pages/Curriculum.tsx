import React, { useState } from 'react';
import { Calendar, CheckCircle, Database, LayoutDashboard, Rocket, Presentation, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const phases = [
  {
    id: "c_phase1",
    title: "Phase 1: Foundations (Data Fluency & Excel Pro)",
    description: "Focus on cleaning, organizing, and basic analysis to build a solid data foundation.",
    icon: <Database className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-100",
    weeks: [
      {
        week: 1,
        title: "Data Strategy Essentials",
        skill: "Data Types & Structuring",
        hook: "Organizing chaotic business data into usable assets",
        deliverable: "Data structuring audit report",
        details: "Learn the fundamentals of organizing business data. We will cover structuring variables and observations, determining the right data types, and setting up raw datasets for downstream reporting."
      },
      {
        week: 2,
        title: "The Cleanup Protocol",
        skill: "Power Query (Excel), Text Functions",
        hook: "\"I will fix your broken, messy spreadsheets so you can trust your numbers again.\"",
        deliverable: "Automated data cleaning template",
        details: "Master Power Query and Excel text functions to clean dirty data automatically. This is where you learn to remove duplicates, fix formatting errors, and handle missing values."
      },
      {
        week: 3,
        title: "Formula Architect",
        skill: "Advanced Logic (XLOOKUP, Nested IFs)",
        hook: "Saving small business owners 10 hours a week with automated lookups",
        deliverable: "Dynamic pricing calculator",
        details: "Move beyond basic SUM and AVERAGE. Learn XLOOKUP and complex nested IF statements to dynamically pull and calculate metrics, saving hours of manual labor."
      },
      {
        week: 4,
        title: "Diagnostic Analytics",
        skill: "Pivot Tables & Conditional Formatting",
        hook: "Instantly identifying money-losing products and top margin drivers",
        deliverable: "Sales performance matrix",
        details: "Pivot tables are the industry standard for rapid data summarization. Group dates, calculate metrics, and apply conditional formatting to instantly spot business trends."
      },
      {
        week: 5,
        title: "Financial Modeling 101",
        skill: "Scenario Planning, Goal Seek",
        hook: "\"I will build a model to forecast cash flow based on 3 growth scenarios.\"",
        deliverable: "3-Year cash flow projection model",
        details: "Build a robust financial model connecting assumptions to outcomes. We teach you how to forecast what-if scenarios and use Goal Seek for profit targeting."
      },
      {
        week: 6,
        title: "Capstone 1: Excel MVP",
        skill: "End-to-end basic dashboarding",
        hook: "Delivering an \"MVP Data Hub\" for a struggling local business",
        deliverable: "Interactive Excel Executive Dashboard",
        details: "Your first capstone. Bring together formulas, cleaning, and pivots into a unified executive dashboard that non-technical stakeholders can interact with."
      }
    ]
  },
  {
    id: "c_phase2",
    title: "Phase 2: Data Extraction (SQL Mastery)",
    description: "Focus on querying databases and managing relational data to extract actionable insights.",
    icon: <LayoutDashboard className="w-6 h-6 text-indigo-600" />,
    color: "bg-indigo-100",
    weeks: [
      {
        week: 7,
        title: "Relational Thinking",
        skill: "Database Architecture & SELECT statements",
        hook: "\"I will extract the specific data you need from your software without you having to ask the devs.\"",
        deliverable: "Database schema mapping diagram",
        details: "Transition from spreadsheets to relational databases. Understand table architecture, primary keys, and writing your first optimized SELECT statements."
      },
      {
        week: 8,
        title: "The Join Masterclass",
        skill: "INNER, LEFT, RIGHT JOINs",
        hook: "Merging fragmented marketing and sales data to find the true ROI of ad spend",
        deliverable: "Multi-table customer journey query",
        details: "The most important SQL skill. Learn how to merge different tables logically. We focus on diagnosing data loss and preventing accidental duplication during JOINs."
      },
      {
        week: 9,
        title: "Aggregation & Grouping",
        skill: "GROUP BY, HAVING, Aggregate Functions",
        hook: "Creating daily top-level summary metrics that executives want to see every morning",
        deliverable: "Automated top-level KPIs script",
        details: "Summarize millions of rows instantly. Master GROUP BY and distinguish between WHERE (filtering rows) and HAVING (filtering aggregated metrics)."
      },
      {
        week: 10,
        title: "Temporal Analysis",
        skill: "Date/Time Functions & Logic",
        hook: "Analyzing seasonal churn rates to identify exactly when clients cancel their subscriptions",
        deliverable: "Churn timeline analysis report",
        details: "Time is central to business data. Extract months, calculate days between events, and analyze cohort behavior using advanced date/time functions."
      },
      {
        week: 11,
        title: "Advanced Extractions",
        skill: "CTEs & Window Functions",
        hook: "Calculating week-over-week growth and running totals for investor updates",
        deliverable: "Advanced SQL investor reporting script",
        details: "Level up your SQL. Use Common Table Expressions (CTEs) for readable queries and Window Functions (OVER, PARTITION BY) for running totals and rankings."
      },
      {
        week: 12,
        title: "Capstone 2: SQL Data Pipeline",
        skill: "View Creation & Optimization",
        hook: "\"I will build a robust SQL view that serves as the single source of truth for your business.\"",
        deliverable: "Optimized SQL Reporting View",
        details: "Capstone project: Write an end-to-end extraction script that creates an optimized View, acting as the foundation for a business's reporting infrastructure."
      }
    ]
  },
  {
    id: "c_phase3",
    title: "Phase 3: Visual Intelligence (Power BI Storytelling)",
    description: "Focus on interactive dashboards, KPIs, and stakeholder presentation.",
    icon: <Presentation className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-100",
    weeks: [
      {
        week: 13,
        title: "Connecting the Dots",
        skill: "Power BI Data Modeling & Connections",
        hook: "Replacing 5 different manual reports with one automated, live dashboard",
        deliverable: "Star schema data model",
        details: "Connecting Power BI to your SQL databases or Excel files. Learn the critical importance of Star Schema layout (fact and dimension tables)."
      },
      {
        week: 14,
        title: "DAX Fundamentals",
        skill: "Basic Measures & Calculated Columns",
        hook: "\"I'll create custom KPIs that off-the-shelf software doesn't track.\"",
        deliverable: "Core KPI DAX Measure Library",
        details: "DAX is the formula language of Power BI. We focus on Measures vs Calculated Columns and creating scalable arithmetic for dynamic filtering."
      },
      {
        week: 15,
        title: "Time Intelligence",
        skill: "DAX Time Intelligence Functions",
        hook: "Year-over-Year and Month-over-Month comparison logic that business owners crave",
        deliverable: "YTD & YoY Growth Dashboard",
        details: "Automating YoY and MoM calculations. You will build a dedicated Calendar table and use CALCULATE to manipulate evaluation contexts."
      },
      {
        week: 16,
        title: "The Art of UI/UX in BI",
        skill: "Layout, Bookmarks, Tooltips",
        hook: "Building dashboards that non-technical CEOs actually understand and use",
        deliverable: "CEO-ready executive summary view",
        details: "It is not just about the data; it is about the story. Learn visual hierarchy, reducing chart junk, and adding interactive page-turners using bookmarks."
      },
      {
        week: 17,
        title: "Advanced Visuals & Security",
        skill: "Custom Visuals, Row Level Security",
        hook: "Setting up a franchisor dashboard where each branch can only see their own data",
        deliverable: "Multi-tenant sales dashboard with RLS",
        details: "Deploying security models. Learn how to restrict user access so managers only see their own department's data within the exact same dashboard."
      },
      {
        week: 18,
        title: "Capstone 3: The Power BI Hub",
        skill: "End-to-End Workspace Setup",
        hook: "Delivering an automated business intelligence operating system for a client",
        deliverable: "Complete Power BI Workspace & App",
        details: "Assemble your data models, DAX, and UI into a published Power BI workspace app ready for stakeholder consumption."
      }
    ]
  },
  {
    id: "c_phase4",
    title: "Phase 4: Monetization & Career Launch",
    description: "Focus on freelancing, proposal writing, and building an automated consulting business.",
    icon: <Rocket className="w-6 h-6 text-orange-600" />,
    color: "bg-orange-100",
    weeks: [
      {
        week: 19,
        title: "Discovering the Need",
        skill: "Business Problem Identification",
        hook: "Translating a client's vague \"we need more data\" into a $5k structured project",
        deliverable: "Discovery call script & problem matrix",
        details: "Learn how to conduct high-value discovery calls. We teach you the exact questions to ask to uncover the financial pain points behind data requests."
      },
      {
        week: 20,
        title: "The Value Proposal",
        skill: "Pitching & Pricing Strategy",
        hook: "Moving from \"hourly rate\" to selling the financial outcome (Value-Based Pricing)",
        deliverable: "High-ticket consulting proposal template",
        details: "Stop charging by the hour. Learn to price based on the value generated for the client. Includes access to our proven proposal template."
      },
      {
        week: 21,
        title: "The Portfolio That Sells",
        skill: "GitHub/Web Portfolio Design",
        hook: "Showcasing business impact instead of just dumping code on a page",
        deliverable: "Hosted Data Analytics Portfolio",
        details: "Build a portfolio that speaks to business owners, not just engineers. Focus on case studies that highlight the ROI of your previous projects."
      },
      {
        week: 22,
        title: "Client Acquisition Engine",
        skill: "Outreach & LinkedIn Strategy",
        hook: "Reaching decision-makers directly with personalized data strategy teardowns",
        deliverable: "Lead generation sequence & scripts",
        details: "Master inbound and outbound lead generation. Learn how to write cold emails and LinkedIn messages that get responses from decision-makers."
      },
      {
        week: 23,
        title: "Service Automation",
        skill: "Zapier/Make Integrations",
        hook: "Automating data pipelines so you get paid a retainer without doing manual work",
        deliverable: "Automated data reporting workflow",
        details: "Build recurring revenue. Use tools like Zapier to automate data refreshes, allowing you to charge monthly retainers with zero ongoing labor."
      },
      {
        week: 24,
        title: "Capstone 4: The Business Launch",
        skill: "Full Lifecycle Consulting",
        hook: "Landing your first paying freelance client or high-end corporate job offer",
        deliverable: "Active Client Contract / Job Offer",
        details: "You are ready. Your final capstone is entirely outcome-driven: secure an interview for an Analyst role or close a freelance project contract."
      }
    ]
  }
];

export function Curriculum() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (week: number) => {
    if (expandedRow === week) {
      setExpandedRow(null);
    } else {
      setExpandedRow(week);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 w-full">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">24-Week Datalabs Analytics Academy</h1>
        <p className="text-slate-600 text-lg">
          A blueprint designed to bridge the gap between technical mastery and real-world income generation. Master Excel, SQL, and Power BI while learning how to monetize your skills.
        </p>
      </div>

      <div className="space-y-12">
        {phases.map((phase, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-8 border-b border-slate-200 bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className={`p-4 ${phase.color} rounded-2xl`}>
                  {phase.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{phase.title}</h2>
                  <p className="text-slate-600 mt-1">{phase.description}</p>
                </div>
              </div>
              <Link 
                to={`/course/${phase.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold flex items-center shrink-0 shadow-lg shadow-blue-200 transition"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Go to Course
              </Link>
            </div>
            
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-white text-sm text-slate-500 uppercase tracking-widest border-b border-slate-200">
                    <th className="py-4 px-6 font-bold w-16">Week</th>
                    <th className="py-4 px-6 font-bold w-1/4">Module Title</th>
                    <th className="py-4 px-6 font-bold w-1/4">Primary Technical Skill</th>
                    <th className="py-4 px-6 font-bold w-1/4">The Revenue Hook</th>
                    <th className="py-4 px-4 font-bold w-12 text-center">Details</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {phase.weeks.map((w) => (
                    <React.Fragment key={w.week}>
                      <tr 
                        className={`border-b border-slate-100 hover:bg-slate-50 transition cursor-pointer ${expandedRow === w.week ? 'bg-slate-50' : ''}`}
                        onClick={() => toggleRow(w.week)}
                      >
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold">
                            {w.week}
                          </span>
                        </td>
                        <td className="py-4 px-6 font-bold text-slate-900 border-r border-slate-100">{w.title}</td>
                        <td className="py-4 px-6 text-slate-700 border-r border-slate-100">
                          <div className="inline-flex bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium text-xs">
                             {w.skill}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-slate-600 italic border-r border-slate-100">"{w.hook}"</td>
                        <td className="py-4 px-4 text-center">
                          <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition">
                            {expandedRow === w.week ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                        </td>
                      </tr>
                      {expandedRow === w.week && (
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <td colSpan={5} className="py-6 px-8">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6">
                              <div className="flex-1">
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Module Overview</h4>
                                <p className="text-slate-700 leading-relaxed text-base">
                                  {w.details}
                                </p>
                              </div>
                              <div className="flex-1 md:border-l md:border-slate-100 md:pl-6 pt-4 md:pt-0 border-t border-slate-100 md:border-t-0">
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Portfolio Deliverable</h4>
                                <div className="flex items-start">
                                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="font-bold text-slate-900 text-base">{w.deliverable}</span>
                                </div>
                                <div className="mt-6">
                                  <Link 
                                    to={`/course/${phase.id}/module/m_${w.week}`}
                                    className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition"
                                  >
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    Launch Module {w.week}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
