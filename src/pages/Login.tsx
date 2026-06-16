import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export function Login() {
  const [email, setEmail] = useState('');
  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    // In our fake auth, login() will redirect to dashboard via app context state update 
    // Wait, let's just push manually after a tick
    setTimeout(() => {
      navigate('/dashboard');
    }, 100);
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
          <p className="text-sm text-slate-500">Sign in to continue your learning journey.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-slate-300 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. admin@data2dollars.com"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-2xl hover:bg-blue-700 transition shadow-md shadow-blue-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Admin check: <span className="text-slate-900 font-mono">admin@data2dollars.com</span>
        </div>
        
        <div className="mt-6 text-center text-sm">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
