import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Layout() {
  useEffect(() => {
    // Only inject the script once
    if (!document.querySelector('script[src*="edb8f63f575ec553c4807dafae9f75ec/invoke.js"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = 'https://pl29774681.effectivecpmnetwork.com/edb8f63f575ec553c4807dafae9f75ec/invoke.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <div className="w-full flex justify-center py-4 bg-white border-t border-slate-200 overflow-hidden mt-auto">
        <div id="container-edb8f63f575ec553c4807dafae9f75ec" className="w-full max-w-[728px] min-h-[90px] mx-4 flex justify-center items-center"></div>
      </div>
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Datalabs Analytics Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
