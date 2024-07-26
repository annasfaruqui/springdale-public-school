/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "page-header":
          "linear-gradient(to right, rgba(0, 0, 0, 0.7) , rgba(0, 0, 0, 0.2) 85%),url('./images/school-img-2.jpg')",
      },
    },
  },
  plugins: [],
};
