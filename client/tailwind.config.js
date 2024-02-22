module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        6: "6 6 0%",
        7: "7 7 0%",
        8: "8 8 0%",
      },
      width: {
        main: "1280px",
      },
      backgroundColor: {
        main: "#ee3131",
      },
      colors: {
        main: "#ee3131",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            "-webkit-transform": "translateY(40px);",
            transform: "translateY(40px);",
          },
          "100%": {
            "-webkit-transform": "translateY(0);",
            transform: "translateY(0);",
          },
        },
        "slide-top-sm": {
          "0%": {
            "-webkit-transform": "translateY(8px);",
            transform: "translateY(8px);",
          },
          "100%": {
            "-webkit-transform": "translateY(0);",
            transform: "translateY(0);",
          },
        },
      },
      animation: {
        "slide-top":
          "slide-top 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "slide-top-sm":
          "slide-top-sm 0.2s linear both;",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
