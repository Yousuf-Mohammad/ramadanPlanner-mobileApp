// Asset-related types

// Color theme types
export interface ColorTheme {
  PRIMARY: string;
  SECONDARY: string;
  CONTRAST: string;
  ACCENT: string;
  WARNING: string;
  GRADIENT_START: string;
  GRADIENT_END: string;
  BLACK: string;
  WHITE: string;
  ERROR: string;
  DISABLE: string;
}

export interface Colors {
  light: Partial<ColorTheme>;
  dark: ColorTheme;
}

// Font types
export interface FontFamily {
  regular?: string;
  bold?: string;
  light?: string;
  medium?: string;
  semiBold?: string;
}

export interface FontSizes {
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
}

// Dimension types
export interface Dimensions {
  screenWidth: number;
  screenHeight: number;
  padding: {
    small: number;
    medium: number;
    large: number;
  };
  margin: {
    small: number;
    medium: number;
    large: number;
  };
  borderRadius: {
    small: number;
    medium: number;
    large: number;
  };
}

// Static text types
export interface StaticTexts {
  [key: string]: string;
}

// Hijri months
export type HijriMonth = {
  number: number;
  name: string;
  arabicName: string;
};

export type HijriMonths = HijriMonth[];
