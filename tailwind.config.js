module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // ~ Colour palette
    colors: {
      error: "#ff1b39b7",
      primary: "#fda917",
      secondary: {
        100: "#1a3763",
        200: "#0d1f3b",
      },
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        sans: ["QS"],
      },
    },
    keyframes: {
      pulse: {
        "0%, 75%": { opacity: "1", transform: "scale(1)" },
        "75%, 100%": { opacity: "0", transform: "scale(1.25)" },
      },
    },
    animation: {
      pulse: "pulse 1s ease-out infinite",
    },
    screens: {
      sm: { raw: "(max-height: 375px)" },
    },
  },
};
