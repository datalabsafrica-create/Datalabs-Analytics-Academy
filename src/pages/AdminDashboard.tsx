import React from 'react';
import { useApp } from '../context/AppContext';
import { Navigate } from 'react-router-dom';
import { Users, BookOpen, Award, CheckCircle } from 'lucide-react';

export function AdminDashboard() {
  const { user, isAdmin, courses, enrollments, certificates } = useApp();

  if (!user || !isAdmin) return <Navigate to="/dashboard" />;

  const uniqueUsersEnrolled = new Set(enrollments.map(e => e.userId)).size;
  const totalRevenue = enrollments.filter(e => e.isPaidForCertificate)
    .reduce((sum, e) => {
      const c = courses.find(cr => cr.id === e.courseId);
      return sum + (c ? c.price : 0);
    }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 w-full">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Admin Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Active Students</p>
            <p className="text-3xl font-bold text-slate-900">{uniqueUsersEnrolled}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Total Enrollments</p>
            <p className="text-3xl font-bold text-slate-900">{enrollments.length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="p-4 bg-green-100 text-green-600 rounded-2xl">
            <CheckCircle className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Completions</p>
            <p className="text-3xl font-bold text-slate-900">{enrollments.filter(e => e.isCompleted).length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="p-4 bg-yellow-100 text-yellow-600 rounded-2xl">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Certificates</p>
            <p className="text-3xl font-bold text-slate-900">{certificates.length}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-900">Recent Enrollments</h2>
          <span className="font-bold text-green-700 bg-green-100 px-4 py-1.5 rounded-full text-sm">
            Total Revenue: ${totalRevenue.toFixed(2)}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-sm text-slate-500">
                <th className="py-3 px-6 font-medium">User ID</th>
                <th className="py-3 px-6 font-medium">Course</th>
                <th className="py-3 px-6 font-medium">Progress</th>
                <th className="py-3 px-6 font-medium">Status</th>
                <th className="py-3 px-6 font-medium">Certificate</th>
              </tr>
            </thead>
            <tbody className="text-sm border-b border-slate-100">
              {enrollments.slice().reverse().map((e, idx) => {
                const c = courses.find(cr => cr.id === e.courseId);
                const hasCert = certificates.some(cert => cert.userId === e.userId && cert.courseId === e.courseId);
                return (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-6 font-mono text-xs">{e.userId}</td>
                    <td className="py-3 px-6 font-bold text-slate-900">{c?.title || e.courseId}</td>
                    <td className="py-3 px-6">
                       <div className="flex items-center">
                         <div className="w-16 bg-slate-200 rounded-full h-1.5 mr-2">
                           <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${e.progress}%` }}></div>
                         </div>
                         <span className="text-xs text-slate-500">{e.progress}%</span>
                       </div>
                    </td>
                    <td className="py-3 px-6">
                      {e.isCompleted ? (
                        <span className="text-green-600 font-bold text-xs">Completed</span>
                      ) : (
                        <span className="text-blue-600 font-bold text-xs">In Progress</span>
                      )}
                    </td>
                    <td className="py-3 px-6">
                      {hasCert ? (
                        <span className="text-yellow-600 font-bold text-xs flex items-center">
                          <Award className="w-3 h-3 mr-1" /> Issued
                        </span>
                      ) : (
                        <span className="text-slate-400 text-xs">-</span>
                      )}
                    </td>
                  </tr>
                );
              })}
              {enrollments.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-500">No enrollments yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
