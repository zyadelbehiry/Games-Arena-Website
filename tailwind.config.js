/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3333",
        secondary: {
          100: "#9b5aff",
          200: "#5b9aff",
        },
      },
      fontFamily: {
        myFont: ["Poppins"],
      },
      screens: {
        mobile: "300px",
      },
      height: {
        90: "90%",
      },
      width: {
        sign_width: "520px",
        mobile_sign_width: "350px",
      },
    },
  },
  plugins: [],
};
