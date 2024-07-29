import bgImage from "./images/school-img-2.jpg";

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "page-header": `linear-gradient(to right, rgba(0, 0, 0, 0.7) , rgba(0, 0, 0, 0.2) 85%),url(${bgImage})`,
      },
    },
  },
  plugins: [],
};
