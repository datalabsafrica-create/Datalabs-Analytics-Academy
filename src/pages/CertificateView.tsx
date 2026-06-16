import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Award, Download, Printer, ShieldCheck } from 'lucide-react';

export function CertificateView() {
  const { id: courseId } = useParams();
  const { user, courses, enrollments, certificates, payForCertificate, generateCertificate } = useApp();
  const [showPayment, setShowPayment] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const course = courses.find(c => c.id === courseId);
  const enrollment = enrollments.find(e => e.courseId === courseId && e.userId === user?.id);
  const cert = certificates.find(c => c.courseId === courseId && c.userId === user?.id);

  if (!user || !course || !enrollment) return <div className="p-8 text-center text-gray-500">Not found</div>;

  if (enrollment.progress < 100) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Award className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Certificate Not Ready</h1>
        <p className="text-slate-500 mb-6">Complete all modules in {course.title} to claim your certificate.</p>
        <Link to={`/course/${course.id}`} className="text-blue-600 font-bold hover:underline">
          Return to course
        </Link>
      </div>
    );
  }

  const handleFakePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      payForCertificate(course.id);
      generateCertificate(course.id);
      setIsProcessing(false);
      setShowPayment(false);
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!cert) {
    if (showPayment) {
      return (
        <div className="max-w-md mx-auto px-4 py-16">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <ShieldCheck className="w-6 h-6 text-green-600 mr-2" /> Certificate Fee
            </h2>
            <div className="mb-6 pb-6 border-b border-slate-100">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-500 font-bold">Course Verification</span>
                <span className="font-bold text-slate-900">$9.99</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-500 font-bold">Processing</span>
                <span className="font-bold text-slate-900">$0.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t border-slate-100">
                <span>Total Due</span>
                <span>$9.99</span>
              </div>
            </div>
            
            <button 
              onClick={handleFakePayment}
              disabled={isProcessing}
              className={`w-full text-white font-bold py-4 px-4 rounded-2xl transition shadow-md mb-3 ${isProcessing ? 'bg-blue-400 cursor-not-allowed shadow-none' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'}`}
            >
              {isProcessing ? 'Processing Payment...' : 'Simulate Card Payment (Dev)'}
            </button>

            <button 
              onClick={handleFakePayment}
              disabled={isProcessing}
              className={`w-full text-slate-900 border-2 border-yellow-400 font-bold py-4 px-4 rounded-2xl transition shadow-md flex items-center justify-center ${isProcessing ? 'bg-yellow-200 cursor-not-allowed shadow-none' : 'bg-yellow-400 hover:bg-yellow-500 shadow-yellow-200'}`}
            >
              {isProcessing ? 'Processing Payment...' : (
                <>
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M11.996 9.873l2.806 2.806-2.806 2.806-2.806-2.806 2.806-2.806zm4.613-1.807L11.996 3.453l-4.613 4.613 1.807 1.807 2.806-2.806 2.806 2.806 1.807-1.807zm0 9.227l-1.807-1.807-2.806 2.807-2.806-2.807-1.807 1.807 4.613 4.613 4.613-4.613zm5.938-4.613L18.423 8.557l-1.807 1.807 2.308 2.309zM5.577 15.443l1.807-1.807-2.309-2.309 2.309-2.309-1.807-1.807L1.455 11.28z"/></svg> 
                  Pay with Binance Pay
                </>
              )}
            </button>
            <p className="text-xs text-center text-slate-400 mt-4">
              * This is a simulated payment gateway. No real charges are made.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Congratulations!</h1>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          You've successfully completed <strong>{course.title}</strong>. Claim your professional certificate now to showcase your skills.
        </p>
        
        <button 
          onClick={() => setShowPayment(true)}
          className="bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl hover:bg-blue-700 transition shadow-lg shadow-blue-200"
        >
          Claim Certificate for $9.99
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8 print:hidden">
        <Link to="/dashboard" className="text-blue-600 font-bold hover:underline">
          &larr; Back to Dashboard
        </Link>
        <button 
          onClick={handlePrint}
          className="flex items-center space-x-2 bg-slate-900 text-white font-bold px-6 py-3 rounded-2xl hover:bg-slate-800 transition"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Download PDF</span>
        </button>
      </div>

      <div className="border border-gray-200 bg-white p-2 sm:p-8 shadow-lg max-w-[800px] mx-auto print:shadow-none print:border-none">
        <div className="border-8 border-gray-900 p-8 sm:p-16 relative bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]">
          <div className="absolute top-8 left-8 text-blue-600">
             <Award className="w-16 h-16 opacity-20" />
          </div>
          <div className="text-center relative z-10">
            <h2 className="text-xl font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">Certificate of Completion</h2>
            <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-12">Data-to-Dollars Accelerator</h1>
            
            <p className="text-lg text-gray-600 mb-4">This is to certify that</p>
            <p className="text-3xl font-bold text-blue-900 border-b-2 border-gray-200 pb-4 mb-4 mx-8 inline-block min-w-[300px]">
              {user.name.toUpperCase()}
            </p>
            
            <p className="text-lg text-gray-600 mb-6">has successfully completed the course</p>
            <p className="text-2xl font-bold text-gray-800 mb-16">{course.title}</p>
            
            <div className="flex justify-between items-end mt-12 pt-8">
              <div className="text-left w-1/3">
                <p className="text-sm font-bold border-b border-gray-300 pb-2 mb-2 font-mono">{cert.id}</p>
                <p className="text-xs text-gray-500 uppercase">Certificate ID</p>
              </div>
              <div className="text-center w-1/3">
                <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full border-2 border-blue-200 flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-blue-600 relative z-10" />
                  <div className="absolute w-28 h-28 border-4 border-dashed border-blue-100 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]"></div>
                </div>
              </div>
              <div className="text-right w-1/3">
                <p className="text-sm font-bold border-b border-gray-300 pb-2 mb-2">
                  {new Date(cert.issuedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-xs text-gray-500 uppercase">Issue Date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
