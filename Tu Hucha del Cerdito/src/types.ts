export enum Page {
  Home = 'Inicio',
  Tips = 'Blog y Consejos',
  Simulator = 'Simulador',
  Quiz = 'Test Financiero',
  Account = 'Cuenta',
}

export type ContentBlock = string | {
  subheading: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
};

export interface Tip {
  id: number;
  category: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  content: ContentBlock[];
  author: {
    name: string;
    avatar: React.ComponentType<{ className?: string }>;
  };
  featured?: boolean;
}

export interface ChartData {
  year: number;
  'Tu Dinero': number;
  'Aportaciones': number;
}

export interface QuizQuestion {
  id: number;
  situation?: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: 'simple' | 'compleja';
}

export interface Transaction {
  id: number;
  type: 'ingreso' | 'gasto';
  description: string;
  amount: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}