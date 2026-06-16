import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Course, Enrollment, Certificate, AppDatabase } from '../types';
import { LocalDB } from '../lib/db';

interface AppContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  register: (name: string, email: string) => void;
  // DB queries
  courses: Course[];
  enrollments: Enrollment[];
  certificates: Certificate[];
  enrollCourse: (courseId: string) => void;
  updateProgress: (courseId: string, moduleId: string, isCompleted: boolean) => void;
  payForCertificate: (courseId: string) => void;
  generateCertificate: (courseId: string) => void;
  // Admin
  isAdmin: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [db, setDb] = useState<AppDatabase>(LocalDB.getDB());
  const [user, setUser] = useState<User | null>(null);

  // Sync DB to localStorage whenever it changes
  useEffect(() => {
    LocalDB.saveDB(db);
  }, [db]);

  useEffect(() => {
    // Sync any new courses directly to the DB if missing
    import('../lib/seed').then(({ defaultCourses }) => {
      let updated = false;
      let currentCourses = [...db.courses];
      
      // Update existing courses and add new ones
      defaultCourses.forEach(dc => {
        const existingIndex = currentCourses.findIndex(c => c.id === dc.id);
        if (existingIndex !== -1) {
          // If the course completely changed (stringified)
          if (JSON.stringify(currentCourses[existingIndex]) !== JSON.stringify(dc)) {
            currentCourses[existingIndex] = dc;
            updated = true;
          }
        } else {
          currentCourses.push(dc);
          updated = true;
        }
      });
      
      if (updated) {
        setDb(prev => ({ ...prev, courses: currentCourses }));
      }
    });

    const savedUserId = sessionStorage.getItem('activeUser');
    if (savedUserId) {
      const foundUser = db.users.find(u => u.id === savedUserId);
      if (foundUser) setUser(foundUser);
    }
  }, []);

  const login = (email: string) => {
    const foundUser = db.users.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      sessionStorage.setItem('activeUser', foundUser.id);
    } else {
      alert("User not found! Try signing up or use admin@data2dollars.com");
    }
  };

  const register = (name: string, email: string) => {
    if (db.users.find(u => u.email === email)) {
      alert("User with this email already exists");
      return;
    }
    const newUser: User = {
      id: "u_" + Date.now().toString(),
      email,
      name,
      role: 'student',
      createdAt: Date.now()
    };
    setDb(prev => ({ ...prev, users: [...prev.users, newUser] }));
    setUser(newUser);
    sessionStorage.setItem('activeUser', newUser.id);
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('activeUser');
  };

  const enrollCourse = (courseId: string) => {
    if (!user) return;
    const exists = db.enrollments.find(e => e.userId === user.id && e.courseId === courseId);
    if (exists) return;

    const newEnrollment: Enrollment = {
      courseId,
      userId: user.id,
      progress: 0,
      completedModules: [],
      isCompleted: false,
      isPaidForCertificate: false,
      enrolledAt: Date.now()
    };

    setDb(prev => ({
      ...prev,
      enrollments: [...prev.enrollments, newEnrollment]
    }));
  };

  const updateProgress = (courseId: string, moduleId: string, isModuleCompleted: boolean) => {
    if (!user) return;
    const course = db.courses.find(c => c.id === courseId);
    if (!course) return;

    setDb(prev => {
      const enrollments = [...prev.enrollments];
      const eIndex = enrollments.findIndex(e => e.userId === user.id && e.courseId === courseId);
      if (eIndex === -1) return prev;

      const e = { ...enrollments[eIndex] };
      const completedSet = new Set(e.completedModules);
      
      if (isModuleCompleted) completedSet.add(moduleId);
      else completedSet.delete(moduleId);

      e.completedModules = Array.from(completedSet);
      e.progress = Math.round((e.completedModules.length / course.modules.length) * 100);
      if (e.progress === 100) e.isCompleted = true;

      enrollments[eIndex] = e;
      return { ...prev, enrollments };
    });
  };

  const payForCertificate = (courseId: string) => {
    if (!user) return;
    setDb(prev => {
      const enrollments = [...prev.enrollments];
      const eIndex = enrollments.findIndex(e => e.userId === user.id && e.courseId === courseId);
      if (eIndex > -1) {
        enrollments[eIndex] = { ...enrollments[eIndex], isPaidForCertificate: true };
      }
      return { ...prev, enrollments };
    });
  };

  const generateCertificate = (courseId: string) => {
    if (!user) return;
    const alreadyOwns = db.certificates.find(c => c.userId === user.id && c.courseId === courseId);
    if (alreadyOwns) return;

    const newCert: Certificate = {
      id: "CERT-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
      courseId,
      userId: user.id,
      issuedAt: Date.now()
    };
    
    setDb(prev => ({
      ...prev,
      certificates: [...prev.certificates, newCert]
    }));
  };

  return (
    <AppContext.Provider value={{
      user, login, logout, register,
      courses: db.courses, 
      enrollments: db.enrollments, 
      certificates: db.certificates,
      enrollCourse, updateProgress, payForCertificate, generateCertificate,
      isAdmin: user?.role === 'admin'
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
