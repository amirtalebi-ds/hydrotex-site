import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        hydro: {
          ink: "#082B4C",
          blue: "#026CB0",
          teal: "#026CB0",
          aqua: "#00A9B7",
          mint: "#EFF6FA",
          paper: "#F8FAFC",
          line: "#DCE5ED",
          slate: "#4C6378"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(11, 37, 69, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;

