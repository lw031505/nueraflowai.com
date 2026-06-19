import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#03040a",
        surface: "#080c18",
        card: "#0c1020",
        primary: "#2563EB",
        cyan: "#06B6D4",
        ink: "#F1F5F9",
        muted: "#64748B",
        subtle: "#1E293B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2563EB, #06B6D4)",
        "gradient-hero": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.3), transparent)",
      },
      animation: {
        "orb-1": "float1 12s ease-in-out infinite",
        "orb-2": "float2 16s ease-in-out infinite",
        "orb-3": "float3 20s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.97)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "40%": { transform: "translate(-40px, 30px) scale(1.08)" },
          "70%": { transform: "translate(25px, -15px) scale(0.95)" },
        },
        float3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, 40px) scale(1.04)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
