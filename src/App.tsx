import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { CourseDetail } from './pages/CourseDetail';
import { ModuleViewer } from './pages/ModuleViewer';
import { CertificateView } from './pages/CertificateView';
import { AdminDashboard } from './pages/AdminDashboard';
import { DataAnalyzer } from './pages/DataAnalyzer';
import { Curriculum } from './pages/Curriculum';
import { Resources } from './pages/Resources';

import { PowerBICurriculum } from './pages/PowerBICurriculum';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useApp();
  if (user === undefined) return null; // loading state 
  if (user === null) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="curriculum" element={<Curriculum />} />
            
            <Route path="resources" element={<Resources />} />
            <Route path="curriculum/power-bi" element={<PowerBICurriculum />} />
            <Route path="course/:id" element={<CourseDetail />} />
            <Route path="course/:courseId/module/:moduleId" element={<ModuleViewer />} />
            
            {/* Protected Routes */}
            <Route path="dashboard" element={
              <ProtectedRoute><Dashboard /></ProtectedRoute>
            } />
            <Route path="certificate/:id" element={
              <ProtectedRoute><CertificateView /></ProtectedRoute>
            } />
            
            {/* Admin Routes */}
            <Route path="admin" element={
              <ProtectedRoute><AdminDashboard /></ProtectedRoute>
            } />
            <Route path="analyzer" element={
              <ProtectedRoute><DataAnalyzer /></ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
