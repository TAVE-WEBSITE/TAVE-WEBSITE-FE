/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".title-1": {
          fontFamily: "Pretendard, sans-serif",
          fontSize: "40px",
          fontWeight: "700",
          lineHeight: "58px",
          letterSpacing: "-1.8px",
        },
        ".title-2": {
          fontFamily: "Pretendard, sans-serif",
          fontSize: "36px",
          fontWeight: "500",
          lineHeight: "42px",
          letterSpacing: "-1.62px",
        },
        ".body-light": {
          fontFamily: "Pretendard",
          fontSize: "20px",
          fontWeight: "300",
          lineHeight: "30px",
          letterSpacing: "-0.9px",
        },
        ".body-highlight-1": {
          fontFamily: "Pretendard, sans-serif",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "36px",
          letterSpacing: "-1.08px",
        },
      });
    },
  ],
};
