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
          ink: "#0B2545",
          blue: "#166A8F",
          teal: "#0F8B78",
          aqua: "#4BB6B7",
          mint: "#DDF7F0",
          paper: "#F7FBFA",
          line: "#D9E8E6",
          slate: "#496173"
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
