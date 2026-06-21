export const colors = {
  background: {
    base: "#080e2c",
    dark: "#141B34",
    secondary: "#142052",
  },
  text: {
    default: "#f7f7f7",
    strong: "#bfbfbf",
    extraStrong: "#8c8c8c",
    onPrimary: "#142052",
  },
  button: {
    cta: "#c8b390",
    secondary: "#142052",
  },
  border: {
    muted: "rgba(255, 255, 255, 0.17)",
    muted2: "rgba(255, 255, 255, 0.08)",
  },
  icon: {
    default: "#ffffff",
  },
} as const;

export const spacing = {
  100: "8px",
  200: "8px",
  300: "12px",
  400: "16px",
  500: "18px",
  600: "24px",
  700: "32px",
  800: "40px",
  1300: "80px",
} as const;

export const radius = {
  full: "9999px",
  lg: "12px",
  md: "8px",
} as const;

export const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  "2xl": "1920px",
} as const;

export const shadows = {
  lg: "0 4px 6px -2px rgba(16, 24, 40, 0.08), 0 12px 16px -4px rgba(16, 24, 40, 0.08)",
} as const;
