/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        title: "var(--title-color)",
        text: "var(--text-color)",
      },
      screens: {
        sm: "576px",
        md: "868px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1400",
      },
    },
  },
  plugins: [],
};