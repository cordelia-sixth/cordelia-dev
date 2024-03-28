import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        arrowAnimation: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        arrowAnimation: "arrowAnimation 0.5s linear alternate infinite",
      },
    },
  },
  plugins: [],
};
export default config;
