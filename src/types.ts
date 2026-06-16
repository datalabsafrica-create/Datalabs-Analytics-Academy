export type Role = 'admin' | 'student';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt: number;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
}

export interface Quiz {
  id: string;
  title: string;
  passMarkPercentage: number;
  questions: Question[];
}

export interface Module {
  id: string;
  title: string;
  content: string; // Markdown/HTML or just text
  quiz: Quiz;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  modules: Module[];
  createdAt: number;
  price: number;
}

export interface Enrollment {
  courseId: string;
  userId: string;
  progress: number; // 0 to 100
  completedModules: string[];
  isCompleted: boolean;
  isPaidForCertificate: boolean;
  enrolledAt: number;
}

export interface Certificate {
  id: string;
  courseId: string;
  userId: string;
  issuedAt: number;
}

export interface AppDatabase {
  users: User[];
  courses: Course[];
  enrollments: Enrollment[];
  certificates: Certificate[];
}
