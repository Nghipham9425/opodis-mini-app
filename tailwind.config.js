/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["selector", '[zaui-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        opodis: {
          50: "#f5f7f3",
          100: "#e9f2e9",
          200: "#bfd2c0",
          500: "#3f7658",
          700: "#194735",
          text: "#18372c",
          muted: "#6f7f76",
          border: "#dce7de",
          sky: "#e7efea",
          cream: "#f4eddd",
        },
      },
      borderRadius: {
        opodis: "18px",
        "opodis-lg": "26px",
      },
      boxShadow: {
        opodis: "0 8px 24px rgba(35, 76, 56, 0.08)",
        "opodis-floating": "0 16px 40px rgba(35, 76, 56, 0.14)",
      },
    },
  },
  plugins: [],
};
