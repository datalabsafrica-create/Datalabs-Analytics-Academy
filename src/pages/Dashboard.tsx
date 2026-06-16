import React from 'react';
import { useApp } from '../context/AppContext';
import { Link, Navigate } from 'react-router-dom';
import { Award, BookOpen, CheckCircle, Search } from 'lucide-react';

export function Dashboard() {
  const { user, courses, enrollments, certificates } = useApp();

  if (!user) return <Navigate to="/login" />;

  const userEnrollments = enrollments.filter(e => e.userId === user.id);
  const enrolledCourseIds = userEnrollments.map(e => e.courseId);
  const enrolledCourses = courses.filter(c => enrolledCourseIds.includes(c.id));
  const otherCourses = courses.filter(c => !enrolledCourseIds.includes(c.id));
  const userCertificates = certificates.filter(c => c.userId === user.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 w-full">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">My Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        <div className="md:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Courses Enrolled</p>
            <p className="text-3xl font-bold text-slate-900">{enrolledCourses.length}</p>
          </div>
        </div>
        <div className="md:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="p-4 bg-green-100 text-green-600 rounded-2xl">
            <CheckCircle className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Completed</p>
            <p className="text-3xl font-bold text-slate-900">{userEnrollments.filter(e => e.isCompleted).length}</p>
          </div>
        </div>
        <div className="md:col-span-4 bg-blue-600 p-6 rounded-3xl text-white flex items-center space-x-4 shadow-lg shadow-blue-100">
          <div className="p-4 bg-white/20 rounded-2xl">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium opacity-80">CERTIFICATES</p>
            <p className="text-3xl font-bold">{userCertificates.length}</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-900">Continue Learning</h2>
          <div className="flex gap-4">
            <Link to="/resources" className="bg-slate-100 text-slate-700 hover:bg-slate-200 px-4 py-2 rounded-xl text-sm font-bold flex items-center transition">
              <BookOpen className="w-4 h-4 mr-2" />
              Resource Center
            </Link>
            <Link to="/analyzer" className="bg-purple-50 text-purple-700 hover:bg-purple-100 px-4 py-2 rounded-xl text-sm font-bold flex items-center transition">
              <Search className="w-4 h-4 mr-2" />
              Launch AI Analyst
            </Link>
          </div>
        </div>
        {enrolledCourses.length === 0 ? (
          <div className="bg-slate-50 p-8 rounded-3xl border border-dashed border-slate-300 text-center">
            <p className="text-slate-500 mb-4">You haven't enrolled in any courses yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map(course => {
              const enrollment = userEnrollments.find(e => e.courseId === course.id);
              const progress = enrollment?.progress || 0;
              
              return (
                <div key={course.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col hover:shadow-md transition">
                  <h3 className="font-bold text-2xl text-slate-900 mb-2">{course.title}</h3>
                  <div className="mb-6 flex-1">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-500 font-medium">Course Progress</span>
                      <span className="text-slate-500 font-bold">{progress}% Complete</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 flex justify-between items-center">
                    <Link to={`/course/${course.id}`} className="bg-blue-600 text-white font-bold px-6 py-3 rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition">
                      {progress === 100 ? 'Review Course' : 'Resume Lesson'}
                    </Link>
                    {progress === 100 && (
                      <Link to={`/certificate/${course.id}`} className="bg-green-600 text-white font-bold px-6 py-3 rounded-2xl hover:bg-green-700 shadow-lg shadow-green-200 transition text-sm">
                        Get Certificate
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {otherCourses.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-6">Discover More Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherCourses.map(course => (
              <div key={course.id} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col hover:shadow-md transition">
                <h3 className="font-bold text-lg mb-2 text-slate-900">{course.title}</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{course.description}</p>
                <div className="mt-auto">
                  <Link to={`/course/${course.id}`} className="block text-center w-full bg-slate-50 text-blue-700 font-bold px-4 py-3 rounded-2xl hover:bg-slate-100 transition text-sm">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
