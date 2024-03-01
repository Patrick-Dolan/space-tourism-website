/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },
      fontSize: {
        "lg-h1": "9.375rem",
        "lg-h2": "6.25rem",
        "lg-h3": "3.5rem",
        "lg-h4": "2rem",
        "lg-h5": "1.75rem",
        "md-h1": "9.375rem",
        "md-h2": "5rem",
        "md-h3": "2.5rem",
        "md-h4": "1.5rem",
        "md-h5": "1.25rem",
      },
      fontFamily: {
        secondary: ["Barlow Condensed", "sans-serif"],
      },
      letterSpacing: {
        nav: "0.169rem",
        "md-h5": "0.294rem",
        subhead: "2.35rem"
      },
      spacing: {
        29: "7.25rem",
      },
    },
  },
  plugins: [],
}