// Data model types

// Salah (Prayer) related types
export interface SalahTiming {
  name: string;
  time: string;
  timestamp?: number;
}

export interface PrayerTimes {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

export interface SalahCheckboxState {
  fardh_fajr: boolean;
  sunnah_fajr: boolean;
  fardh_duhr: boolean;
  sunnah_duhr: boolean;
  fardh_asr: boolean;
  sunnah_asr: boolean;
  fardh_maghrib: boolean;
  sunnah_maghrib: boolean;
  fardh_isha: boolean;
  sunnah_isha: boolean;
  sunnah_taraweeh: boolean;
  sunnah_tahajjud: boolean;
  sunnah_duha: boolean;
}

// Hijri/Arabic Date types
export interface HijriDate {
  day: number;
  month: number;
  year: number;
  monthName: string;
  formatted: string;
}

// Quran recitation types
export interface RecitationInfo {
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  juzNumber: number;
  pageNumber: number;
  // User progress fields
  unit?: string;
  target_value?: number | null;
  last_read_surah?: number;
  last_read_value?: number | null;
  completed_value?: number | null;
}

export type AyatNumberMappings = {
  label: string;
  value: number;
};

export interface InputRangeProps {
  label: string;
  placeholder?: string;

  isSurahFocus: boolean;
  setIsSurahFocus: (focus: boolean) => void;
  surahValue: any;
  setSurahValue: (value: any) => void;

  isAyatFocus: boolean;
  setIsAyatFocus: (focus: boolean) => void;
  ayatValue: any;
  setAyatValue: (value: any) => void;
}

export interface SurahInfo {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  revelationType: 'Meccan' | 'Medinan';
}

export interface QuranProgress {
  currentSurah: number;
  currentAyah: number;
  lastReadDate: string;
  totalPagesRead: number;
  dailyTarget: number;
}

// Task/Todo types
export interface Task {
  id: string;
  name: string;
  is_completed: boolean;
  createdAt?: string;
  order?: number;
}

export interface DailyTodoList {
  date: string;
  tasks: Task[];
}

// Dua types
export interface Dua {
  id: string;
  arabic: string;
  transliteration?: string;
  translation: string;
  reference?: string;
  category: string;
}

// Location types
export interface Location {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
  address?: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
