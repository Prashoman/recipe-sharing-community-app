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
        primary: "#006A4E",
      },
      fontSize: {
        10: "0.625em",
        12: "0.75em",
        13: "0.8125em",
        14: "0.875em",
        15: "0.9375em",
        16: "1em",
        18: "1.125em",
        20: "1.25em",
        24: "1.5em",
        26: "1.625em",
        32: "2em",
        36: "2.25em",
        40: "2.5em",
        48: "3em",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
