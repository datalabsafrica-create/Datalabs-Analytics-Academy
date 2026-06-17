import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { BarChart3, LogOut, User as UserIcon } from 'lucide-react';

export function Navbar() {
  const { user, logout, isAdmin } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-blue-900">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">D</div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">Data2Dollars</span>
              <span className="font-bold text-xl tracking-tight sm:hidden">D2D</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/curriculum" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium hidden md:block">
              Curriculum Roadmap
            </Link>
            {user ? (
              <>
                <span className="text-slate-600 text-sm hidden sm:inline-block">
                  Hello, <span className="font-medium text-slate-900">{user.name}</span>
                </span>
                
                {isAdmin ? (
                  <Link to="/admin" className="text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium">
                    Admin Panel
                  </Link>
                ) : (
                  <>
                    <Link to="/dashboard" className="text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium">
                      My Dashboard
                    </Link>
                    <Link to="/curriculum" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">
                      Academy
                    </Link>
                    <Link to="/curriculum/power-bi" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">
                      Power BI Masterclass
                    </Link>
                    <Link to="/resources" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">
                      Resources
                    </Link>
                    <Link to="/analyzer" className="bg-purple-50 text-purple-700 hover:bg-purple-100 px-3 py-2 rounded-md text-sm font-bold flex items-center">
                      AI Analyst
                    </Link>
                  </>
                )}

                <button 
                  onClick={handleLogout}
                  className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">
                  Log in
                </Link>
                <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-200 transition-colors">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
