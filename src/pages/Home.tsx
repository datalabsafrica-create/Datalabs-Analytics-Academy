import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { BookOpen } from 'lucide-react';

export function Home() {
  const { courses, user, enrollments } = useApp();

  return (
    <div>
      <div className="bg-blue-600 text-white min-h-[30vh] flex items-center justify-center py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Master Data Analytics</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Learn Excel, SQL, and Python without leaving your browser. 
            Earn certificates and advance your career today.
          </p>
          {!user && (
            <Link 
              to="/register" 
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-50 transition"
            >
              Start Learning for Free
            </Link>
          )}
          {user && (
            <Link 
              to="/dashboard" 
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-50 transition"
            >
              Go to Dashboard
            </Link>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Explore Our Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => {
            const isEnrolled = user && enrollments.some(e => e.courseId === course.id && e.userId === user.id);
            return (
              <div key={course.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition">
                <div className="p-8 flex-grow">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-3">{course.description}</p>
                </div>
                <div className="bg-slate-50 p-6 border-t border-slate-200 mt-auto flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-500">{course.modules.length} Modules</span>
                  {user ? (
                    isEnrolled ? (
                      <Link to={`/course/${course.id}`} className="text-blue-600 font-bold hover:underline text-sm">
                        Continue
                      </Link>
                    ) : (
                      <Link to={`/course/${course.id}`} className="bg-blue-600 text-white px-6 py-2 rounded-2xl text-sm font-bold hover:bg-blue-700 shadow-md shadow-blue-200">
                        View Course
                      </Link>
                    )
                  ) : (
                    <Link to={`/course/${course.id}`} className="bg-blue-600 text-white px-6 py-2 rounded-2xl text-sm font-bold hover:bg-blue-700 shadow-md shadow-blue-200">
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
