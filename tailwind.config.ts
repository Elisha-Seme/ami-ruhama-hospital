import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — deep teal-blue: trust, clinical credibility (echoes the logo's blue swoosh)
        brand: {
          50: "#eefafd",
          100: "#d4f1f7",
          200: "#aee3ef",
          300: "#75cce0",
          400: "#35acca",
          500: "#1a90b0",
          600: "#157494",
          700: "#155d78",
          800: "#174d63",
          900: "#0f3f54",
          950: "#082836",
        },
        // Warm gold/amber — mission warmth, hope (from the logo's gold)
        gold: {
          50: "#fdf8ed",
          100: "#f9ecca",
          200: "#f2d690",
          300: "#ecbd56",
          400: "#e7a531",
          500: "#df8a1f",
          600: "#c56a17",
          700: "#a44d17",
          800: "#863d19",
          900: "#6f3318",
        },
        // Care red — the faith/medical cross; used sparingly for accents & the logo
        care: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          400: "#f87171",
          500: "#e23b3b",
          600: "#cf2727",
          700: "#ad1f1f",
          800: "#8f1d1d",
        },
        // Warm neutral canvas
        sand: {
          50: "#faf9f6",
          100: "#f4f2ec",
          200: "#e8e4d9",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,63,84,0.04), 0 8px 24px -8px rgba(15,63,84,0.12)",
        lift: "0 2px 4px rgba(15,63,84,0.06), 0 18px 40px -12px rgba(15,63,84,0.22)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "float-slow": "float-slow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
