// Utility function types and interfaces
import { Coordinates, Location, HijriDate, PrayerTimes } from '../models';

// Geolocation utilities
export interface GeolocationResult {
  coords: Coordinates;
  timestamp: number;
}

export interface ReverseGeocodingResult {
  address: string;
  city: string;
  country: string;
  postalCode?: string;
}

// Date utilities
export interface DateTimeInfo {
  date: Date;
  timestamp: number;
  formatted: string;
}

export interface AstronomicalTime {
  sunrise: Date;
  sunset: Date;
  solarNoon: Date;
}

// Prayer time calculation
export interface PrayerTimeCalculationParams {
  coordinates: Coordinates;
  date: Date;
  method?: 'MWL' | 'ISNA' | 'Egypt' | 'Makkah' | 'Karachi' | 'Tehran' | 'Jafari';
}

export interface PrayerTimeResult {
  times: PrayerTimes;
  qibla: number;
}

// Validation utilities
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface EmailValidation extends ValidationResult {}
export interface PasswordValidation extends ValidationResult {
  strength?: 'weak' | 'medium' | 'strong';
}

// Cache utilities
export interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

export interface CacheOptions {
  expirationTime?: number;
  key: string;
}
