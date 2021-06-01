module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        header: ['"Dancing Script"'],
        body: ['"Fira Code"'],
        lato: ["Lato"],
      },
      backgroundImage: {
        pattern: `url("/images/webb.png")`,
        facebook: `url("/images/facebook.svg")`,
        linkedin: `url("/images/linkedin.svg")`,
        twitter: `url("/images/twitter.svg")`,
        whatsapp: `url("/images/whatsapp.svg")`,
        github: `url("/images/github.svg")`,
        image: `url("/images/background-image.png")`,
        design: `url("/images/design-unsplash.jpg")`,
        passion: `url("/images/passion-unsplash.jpg")`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
