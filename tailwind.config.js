/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// import withMT from "@material-tailwind/react/utils/withMT";



// // Enhance your component with Material Tailwind
// export default withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// })


// const withMT = require("@material-tailwind/react/utils/withMT");
 
// export default withMT({
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });