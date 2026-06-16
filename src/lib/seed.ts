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
        content: `### Data Strategy Essentials\n\n**Primary Skill:** Data Types & Structuring\n\nDive deep into Data Strategy Essentials. In this module, we focus on mastering Data Types & Structuring. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
        quiz: {
          id: "q_1",
          title: "Knowledge Check: Data Strategy Essentials",
          passMarkPercentage: 70,
          questions: [
            {
              id: "q_1_1",
              text: "Which of the following is the core focus of this module?",
              options: ["Theoretical concepts only", "Mastering Data Types & Structuring", "General business administration", "Graphic design"],
              correctIndex: 1
            }
          ]
        }
      },
      {
        id: "m_2",
        title: "Week 2: The Cleanup Protocol",
        content: `### The Cleanup Protocol\n\n**Primary Skill:** Power Query (Excel), Text Functions\n\nDive deep into The Cleanup Protocol. In this module, we focus on mastering Power Query (Excel), Text Functions. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Formula Architect\n\n**Primary Skill:** Advanced Logic (XLOOKUP, Nested IFs)\n\nDive deep into Formula Architect. In this module, we focus on mastering Advanced Logic (XLOOKUP, Nested IFs). You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Diagnostic Analytics\n\n**Primary Skill:** Pivot Tables & Conditional Formatting\n\nDive deep into Diagnostic Analytics. In this module, we focus on mastering Pivot Tables & Conditional Formatting. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Financial Modeling 101\n\n**Primary Skill:** Scenario Planning, Goal Seek\n\nDive deep into Financial Modeling 101. In this module, we focus on mastering Scenario Planning, Goal Seek. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Capstone 1: Excel MVP\n\n**Primary Skill:** End-to-end basic dashboarding\n\nDive deep into Capstone 1: Excel MVP. In this module, we focus on mastering End-to-end basic dashboarding. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Relational Thinking\n\n**Primary Skill:** Database Architecture & SELECT statements\n\nDive deep into Relational Thinking. In this module, we focus on mastering Database Architecture & SELECT statements. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### The Join Masterclass\n\n**Primary Skill:** INNER, LEFT, RIGHT JOINs\n\nDive deep into The Join Masterclass. In this module, we focus on mastering INNER, LEFT, RIGHT JOINs. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Aggregation & Grouping\n\n**Primary Skill:** GROUP BY, HAVING, Aggregate Functions\n\nDive deep into Aggregation & Grouping. In this module, we focus on mastering GROUP BY, HAVING, Aggregate Functions. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Temporal Analysis\n\n**Primary Skill:** Date/Time Functions & Logic\n\nDive deep into Temporal Analysis. In this module, we focus on mastering Date/Time Functions & Logic. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Advanced Extractions\n\n**Primary Skill:** CTEs & Window Functions\n\nDive deep into Advanced Extractions. In this module, we focus on mastering CTEs & Window Functions. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Capstone 2: SQL Data Pipeline\n\n**Primary Skill:** View Creation & Optimization\n\nDive deep into Capstone 2: SQL Data Pipeline. In this module, we focus on mastering View Creation & Optimization. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Connecting the Dots\n\n**Primary Skill:** Power BI Data Modeling & Connections\n\nDive deep into Connecting the Dots. In this module, we focus on mastering Power BI Data Modeling & Connections. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### DAX Fundamentals\n\n**Primary Skill:** Basic Measures & Calculated Columns\n\nDive deep into DAX Fundamentals. In this module, we focus on mastering Basic Measures & Calculated Columns. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Time Intelligence\n\n**Primary Skill:** DAX Time Intelligence Functions\n\nDive deep into Time Intelligence. In this module, we focus on mastering DAX Time Intelligence Functions. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### The Art of UI/UX in BI\n\n**Primary Skill:** Layout, Bookmarks, Tooltips\n\nDive deep into The Art of UI/UX in BI. In this module, we focus on mastering Layout, Bookmarks, Tooltips. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Advanced Visuals & Security\n\n**Primary Skill:** Custom Visuals, Row Level Security\n\nDive deep into Advanced Visuals & Security. In this module, we focus on mastering Custom Visuals, Row Level Security. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Capstone 3: The Power BI Hub\n\n**Primary Skill:** End-to-End Workspace Setup\n\nDive deep into Capstone 3: The Power BI Hub. In this module, we focus on mastering End-to-End Workspace Setup. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Discovering the Need\n\n**Primary Skill:** Business Problem Identification\n\nDive deep into Discovering the Need. In this module, we focus on mastering Business Problem Identification. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### The Value Proposal\n\n**Primary Skill:** Pitching & Pricing Strategy\n\nDive deep into The Value Proposal. In this module, we focus on mastering Pitching & Pricing Strategy. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### The Portfolio That Sells\n\n**Primary Skill:** GitHub/Web Portfolio Design\n\nDive deep into The Portfolio That Sells. In this module, we focus on mastering GitHub/Web Portfolio Design. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Client Acquisition Engine\n\n**Primary Skill:** Outreach & LinkedIn Strategy\n\nDive deep into Client Acquisition Engine. In this module, we focus on mastering Outreach & LinkedIn Strategy. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Service Automation\n\n**Primary Skill:** Zapier/Make Integrations\n\nDive deep into Service Automation. In this module, we focus on mastering Zapier/Make Integrations. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Capstone 4: The Business Launch\n\n**Primary Skill:** Full Lifecycle Consulting\n\nDive deep into Capstone 4: The Business Launch. In this module, we focus on mastering Full Lifecycle Consulting. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### The Star Schema Blueprint\n\n**Primary Skill:** Fact vs Dimension Tables\n\nDive deep into The Star Schema Blueprint. In this module, we focus on mastering Fact vs Dimension Tables. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Power Query Data Cleansing\n\n**Primary Skill:** M Code & Transformations\n\nDive deep into Power Query Data Cleansing. In this module, we focus on mastering M Code & Transformations. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Filter Context & CALCULATE\n\n**Primary Skill:** Evaluation Contexts\n\nDive deep into Filter Context & CALCULATE. In this module, we focus on mastering Evaluation Contexts. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Time Intelligence Architecture\n\n**Primary Skill:** YoY, YTD, MoM Calculations\n\nDive deep into Time Intelligence. In this module, we focus on mastering YoY, YTD, MoM Calculations. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### The Executive Overview Layout\n\n**Primary Skill:** Visual Hierarchy & Principles\n\nDive deep into The Executive Overview Layout. In this module, we focus on mastering Visual Hierarchy. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Interactive App Experiences\n\n**Primary Skill:** Bookmarks, Tooltips, Drillthrough\n\nDive deep into Interactive App Experiences. In this module, we focus on mastering Bookmarks and Drillthrough. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Row Level Security (RLS)\n\n**Primary Skill:** Dynamic Security Models\n\nDive deep into Row Level Security. In this module, we focus on mastering Dynamic Security Models. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
        content: `### Pitching the BI Retainer\n\n**Primary Skill:** Value Proposal & Workspace Management\n\nDive deep into Pitching the BI Retainer. In this module, we focus on mastering Value Proposal. You will learn the theoretical foundation and immediately apply it to real-world datasets.\n\n**Action Items:**\n- Complete the video lecture.\n- Download the practice dataset.\n- Complete the practical lab.`,
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
