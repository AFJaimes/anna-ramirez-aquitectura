module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#e8d7bd",
      secondary: "#f4ebde",
      yellow: "#f6cc90",
      green: "#607943",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#222b18",
      secondary: "#607943",
      yellow: "#c69a5a",
    }),
    extend: {
      fontFamily: {
        body: ["Ubuntu"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
