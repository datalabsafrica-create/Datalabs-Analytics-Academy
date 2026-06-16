import React from 'react';
import { useApp } from '../context/AppContext';
import { Navigate } from 'react-router-dom';
import { Download, FileSpreadsheet, FileText, FileCode, Archive } from 'lucide-react';

export function Resources() {
  const { user } = useApp();

  if (!user) return <Navigate to="/login" />;

  const downloadFile = (fileName: string, content: string, mimeType: string) => {
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

  const handleDownloadDataset = (name: string) => {
    const csvContent = "ID,Date,Product,Category,Revenue,Units_Sold\n1,2024-01-01,Alpha Widget,Hardware,150.00,5\n2,2024-01-02,Beta License,Software,500.00,1\n3,2024-01-03,Gamma Tool,Hardware,45.50,12\n4,2024-01-04,Delta Service,Consulting,1200.00,1";
    downloadFile(name, csvContent, 'text/csv');
  };

  const handleDownloadDoc = (name: string) => {
    const content = `DATA-TO-DOLLARS ACCELERATOR RESOURCE\n\nCheat Sheet / Note: ${name}\n\nContents for this resource go here.`;
    downloadFile(name, content, 'text/plain');
  };

  const resourceGroups = [
    {
      title: 'Datasets & Templates',
      icon: <FileSpreadsheet className="w-6 h-6 text-green-600" />,
      color: 'bg-green-100',
      items: [
        { name: 'Phase 1: Messy eCommerce Dataset.csv', action: () => handleDownloadDataset('Phase_1_Messy_Dataset.csv') },
        { name: 'Phase 1: Cash Flow Projection Model.xlsx', action: () => handleDownloadDataset('Cash_Flow_Model.csv') },
        { name: 'Phase 2: Customer Journey (Tables A & B).csv', action: () => handleDownloadDataset('Customer_Journey_Tables.csv') },
        { name: 'Phase 3: Sales Power BI Staging Data.csv', action: () => handleDownloadDataset('Sales_Staging_Data.csv') },
      ]
    },
    {
      title: 'Cheat Sheets & Playbooks',
      icon: <FileCode className="w-6 h-6 text-purple-600" />,
      color: 'bg-purple-100',
      items: [
        { name: 'Excel Advanced Formulas Cheat Sheet.pdf', action: () => handleDownloadDoc('Excel_Formulas_Cheat_Sheet.txt') },
        { name: 'SQL JOINs & Window Functions Guide.pdf', action: () => handleDownloadDoc('SQL_Joins_Guide.txt') },
        { name: 'DAX Time Intelligence Patterns.pdf', action: () => handleDownloadDoc('DAX_Patterns.txt') },
        { name: 'High-Ticket Proposal Template.doc', action: () => handleDownloadDoc('Proposal_Template.txt') },
      ]
    },
    {
      title: 'PDF Lecture Notes',
      icon: <FileText className="w-6 h-6 text-red-600" />,
      color: 'bg-red-100',
      items: [
        { name: 'Phase 1: Foundations Complete Notes.pdf', action: () => handleDownloadDoc('Phase1_Notes.txt') },
        { name: 'Phase 2: Data Extraction Complete Notes.pdf', action: () => handleDownloadDoc('Phase2_Notes.txt') },
        { name: 'Phase 3: Visual Intelligence Complete Notes.pdf', action: () => handleDownloadDoc('Phase3_Notes.txt') },
        { name: 'Phase 4: Monetization Complete Notes.pdf', action: () => handleDownloadDoc('Phase4_Notes.txt') },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 w-full">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Resource Center</h1>
        <p className="text-slate-600 max-w-2xl text-lg">
          Access all course assets in one place. Download sample datasets, analytical templates, and offline copies of lecture materials to accelerate your learning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {resourceGroups.map((group, gIdx) => (
          <div key={gIdx} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-center gap-4">
              <div className={`p-3 ${group.color} rounded-2xl`}>
                {group.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-900">{group.title}</h2>
            </div>
            <div className="p-4 flex-1">
              <ul className="space-y-2">
                {group.items.map((item, iIdx) => (
                  <li key={iIdx}>
                    <button
                      onClick={item.action}
                      className="w-full text-left flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition group"
                    >
                      <span className="font-medium text-slate-700 group-hover:text-blue-700 transition">
                        {item.name}
                      </span>
                      <div className="bg-slate-100 text-slate-500 p-2 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-600 transition">
                        <Download className="w-4 h-4" />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
