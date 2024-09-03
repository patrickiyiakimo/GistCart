import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(2.2)" },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    // other plugins can be added here if needed
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
export default config;
