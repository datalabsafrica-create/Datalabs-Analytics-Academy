import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowLeft, CheckCircle, FileText, Lock } from 'lucide-react';

export function CourseDetail() {
  const { id } = useParams();
  const { courses, user, enrollments, enrollCourse } = useApp();
  const navigate = useNavigate();
  
  const course = courses.find(c => c.id === id);
  const enrollment = enrollments.find(e => e.courseId === id && e.userId === user?.id);

  if (!course) return <div className="p-8 max-w-7xl mx-auto">Course not found.</div>;

  const handleEnroll = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    enrollCourse(course.id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 w-full">
      <Link to="/dashboard" className="text-sm text-blue-600 hover:underline flex items-center mb-6">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Dashboard
      </Link>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 mb-8 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-50 rounded-full opacity-50 pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{course.title}</h1>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl">{course.description}</p>
          
          {!enrollment && (
            <button 
              onClick={handleEnroll}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition"
            >
              Enroll in Course
            </button>
          )}
          
          {enrollment && (
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Your Progress</h3>
              <div className="flex items-center space-x-4">
                <div className="w-full bg-white rounded-full h-3 border border-blue-100">
                  <div className="bg-blue-600 h-3 rounded-full transition-all" style={{ width: `${enrollment.progress}%` }}></div>
                </div>
                <span className="font-bold text-blue-900">{enrollment.progress}%</span>
              </div>
              {enrollment.progress === 100 && (
                <p className="text-sm text-green-700 mt-2 font-bold">Course completed! You can claim your certificate.</p>
              )}
            </div>
          )}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Modules</h2>
      <div className="space-y-4">
        {course.modules.map((module, idx) => {
          const isCompleted = enrollment?.completedModules.includes(module.id);
          const isLocked = !enrollment;
          
          return (
            <div key={module.id} className={`bg-white rounded-3xl border p-6 flex items-center justify-between ${isLocked ? 'border-slate-200 bg-slate-50' : 'border-slate-200'}`}>
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                  {isCompleted ? <CheckCircle className="w-5 h-5" /> : (idx + 1)}
                </div>
                <div>
                  <h3 className={`font-bold ${isLocked ? 'text-slate-500' : 'text-slate-900'}`}>{module.title}</h3>
                  <div className="text-xs text-slate-500 flex items-center mt-1">
                    <FileText className="w-3 h-3 mr-1" /> Lesson & Quiz
                  </div>
                </div>
              </div>
              
              {!isLocked ? (
                <Link to={`/course/${course.id}/module/${module.id}`} className="bg-white border-2 border-slate-200 text-slate-700 font-bold px-6 py-2 rounded-2xl hover:bg-slate-50 text-sm transition shadow-sm">
                  {isCompleted ? 'Review' : 'Start'}
                </Link>
              ) : (
                <Lock className="text-slate-300 w-5 h-5" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
