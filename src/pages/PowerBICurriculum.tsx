import React, { useState } from 'react';
import { Presentation, CheckCircle, ChevronDown, ChevronUp, BookOpen, Database, LayoutDashboard, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const phases = [
  {
    id: "c_pbi_1",
    title: "Phase 1: Architecture & Modeling",
    description: "Build robust, scalable data models that serve as the foundation for executive reporting.",
    icon: <Database className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-100",
    weeks: [
      {
        week: 1,
        title: "The Star Schema Blueprint",
        skill: "Fact vs Dimension Tables",
        hook: "Rescuing clients from the \"spaghetti data model\" that takes 10 minutes to load.",
        deliverable: "Optimized Star Schema Diagram",
        details: "Learn why a single flat table is a disaster in Power BI. We focus strictly on building a canonical Star Schema to optimize DAX performance and usability."
      },
      {
        week: 2,
        title: "Power Query Data Cleansing",
        skill: "M Code & Transformations",
        hook: "\"I will automate your data cleaning so you never manually copy-paste again.\"",
        deliverable: "Automated Data Refresh Workflow",
        details: "Master M Code to fetch, clean, and reshape raw data before it ever hits the data model. Transform messy ERP extracts into clean dimensional data."
      }
    ]
  },
  {
    id: "c_pbi_2",
    title: "Phase 2: DAX Formula Mastery",
    description: "Write dynamic, complex calculations that answer high-level business questions.",
    icon: <LayoutDashboard className="w-6 h-6 text-indigo-600" />,
    color: "bg-indigo-100",
    weeks: [
      {
        week: 3,
        title: "Filter Context & CALCULATE",
        skill: "Evaluation Contexts",
        hook: "Building dynamic KPIs that perfectly adjust to any executive filter selection.",
        deliverable: "Core KPI Measure Library",
        details: "The most important concept in Power BI. Understand the difference between Row Context and Filter Context, and how to command the CALCULATE function."
      },
      {
        week: 4,
        title: "Time Intelligence Architecture",
        skill: "YoY, YTD, MoM Calculations",
        hook: "Instantly comparing this year's seasonal trends to last year's performance.",
        deliverable: "Dynamic Calendar & Time Comparison Dashboard",
        details: "Business runs on time comparisons. Build a robust Calendar table and master DATESYTD, SAMEPERIODLASTYEAR, and custom fiscal calendars."
      }
    ]
  },
  {
    id: "c_pbi_3",
    title: "Phase 3: Visual Storytelling & UI",
    description: "Design applications that non-technical users actually want to use.",
    icon: <Presentation className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-100",
    weeks: [
      {
        week: 5,
        title: "The Executive Overview Layout",
        skill: "Visual Hierarchy & Principles",
        hook: "Turning a messy scatterplot into a clear, one-glance story that drives action.",
        deliverable: "C-Suite Dashboard Mockup",
        details: "Remove the chart junk. Learn the Z-pattern, the golden ratio of dashboarding, and how to select the right visual for the right question."
      },
      {
        week: 6,
        title: "Interactive App Experiences",
        skill: "Bookmarks, Tooltips, Drillthrough",
        hook: "\"I don't just build reports; I build data applications with app-like navigation.\"",
        deliverable: "Multi-page App with Custom Navigation",
        details: "Use bookmarks to create tabbed navigation, pop-up filters, and custom tooltips that give deeper context without cluttering the screen."
      }
    ]
  },
  {
    id: "c_pbi_4",
    title: "Phase 4: Deployment & Monetization",
    description: "Secure, publish, and sell your reporting infrastructure.",
    icon: <Rocket className="w-6 h-6 text-orange-600" />,
    color: "bg-orange-100",
    weeks: [
      {
        week: 7,
        title: "Row Level Security (RLS)",
        skill: "Dynamic Security Models",
        hook: "Deploying one dashboard that serves 50 franchisees, showing only their own data.",
        deliverable: "Multi-Tenant Security Architecture",
        details: "Implement strict access rules so regional managers only see their regions, ensuring data privacy across the organization using the exact same report file."
      },
      {
        week: 8,
        title: "Pitching the BI Retainer",
        skill: "Value Proposal & Workspace Management",
        hook: "Selling an ongoing \"Data-as-a-Service\" monthly retainer to small businesses.",
        deliverable: "BI Retainer Proposal & Workspace Launch",
        details: "How to package your Power BI skills into a lucrative monthly retainer. Manage workspaces, schedule refreshes, and handle incremental stakeholder requests."
      }
    ]
  }
];

export function PowerBICurriculum() {
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
          <Presentation className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Power BI Masterclass</h1>
        <p className="text-slate-600 text-lg">
          Transform raw data into beautiful, interactive, and highly profitable executive dashboards. Learn the tools, the storytelling, and the exact pitch to sell BI services.
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
                                    to={`/course/${phase.id}/module/m_pbi_${w.week}`}
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
