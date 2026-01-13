// Redux slice state types
import { HijriDate, SalahCheckboxState, Task, RecitationInfo, Dua } from '../models';

// Authentication state
export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: UserInfo | null;
  loading: boolean;
  error: string | null;
}

export interface UserInfo {
  id: string;
  email: string;
  name?: string;
}

export interface AuthTokenState {
  token: string | null;
}

// Arabic Date state
export interface ArabicDateState {
  currentDate: HijriDate | null;
  loading: boolean;
  error: string | null;
}

// Salah Checklist state
export interface SalahInfoState {
  checkboxes: SalahCheckboxState;
  lastUpdated: string | null;
}

export interface SalahChecklistState {
  data: SalahCheckboxState | null;
  loading: boolean;
  error: string | null;
}

// Recitation Info state
export interface RecitationInfoState {
  currentRecitation: RecitationInfo | null;
  lastRead: RecitationInfo | null;
  dailyTarget: number;
  progress: number;
  loading: boolean;
  error: string | null;
}

// Daily Todolist state
export interface TodolistInfoState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

export interface DailyTodolistState {
  currentDate: string;
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

// Dua state
export interface DuaState {
  duas: Dua[];
  selectedDua: Dua | null;
  loading: boolean;
  error: string | null;
}
