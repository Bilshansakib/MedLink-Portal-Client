/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rob: "'Roboto', sans-serif",
        fah: "'Fahkwang', sans-serif",
        fir: "'Fira Sans Condensed', sans-serif",
        che: "'Chela One', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
});
