import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2166F0",
        secondary: "#E46A11",
        danger: "#e3342f",
        success: "#38c172",
        textColor: "#0E1521",
        textBlack: "#323232",
        textGray: "#667085",
      },
      boxShadow: {
        "custom-shadow": "0px 24px 20px -4px #10182807",
      },
    },
  },
  plugins: [],
};
export default config;
