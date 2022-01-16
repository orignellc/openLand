module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        half: "50%",
        "2/3": "75%",
      },
      colors: {
        "green-650": "#0FB95D",
        "green-25": "#E3FCEF",
        "green-950": "#002C14",
        "teal-500": "#38A3A5",
      },
    },
    // colors: {},
    fontFamily: {
      body: ["Inter", "san-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
