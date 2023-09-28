/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#FFF",
        page: "#F8F8F2",
        card: "#FFF",
        "card-hover": "#D8DEE9",
        "default-text": "#303446",
        "blue-accent": "#8CAAEE",
        "blue-accent-hover": "#88C0D0",
      },
    },
  },
  plugins: [],
};
