/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        inactive: "var(--inactive)",
        opaque: "var(--opaque)",
      },
      borderColor: {
        primary: "var(--border)"
      },
      fontSize: {
        sub: "0.875rem",
        "lg-h1": "9.375rem",
        "lg-h2": "6.25rem",
        "lg-h3": "3.5rem",
        "lg-h4": "2rem",
        "lg-h5": "1.75rem",
        "md-h1": "9.375rem",
        "md-h2": "5rem",
        "md-h3": "2.5rem",
        "md-h4": "1.5rem",
        "md-h5": "1.25rem",
        "md-p": "1rem"
      },
      fontFamily: {
        primary: ["Barlow", "sans-serif"],
        "primary-condensed": ["Barlow Condensed", "sans-serif"],
        secondary: ["Bellefair", "serif"],
      },
      letterSpacing: {
        nav: "0.169rem",
        "md-h5": "0.211rem",
        subhead: "0.147rem"
      },
      spacing: {
        26: "6.5rem",
        29: "7.25rem",
        "mobile-button": "9.375rem",
        "tablet-button": "15.125rem",
        "desktop-button": "17.125rem",
      },
      leading: {
        md: "1.75rem"
      },
      backgroundImage: {
        "home-mobile": "url('./assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('./assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('./assets/home/background-home-desktop.jpg')",
        "destination-mobile": "url('./assets/destination/background-destination-mobile.jpg')",
        "destination-tablet": "url('./assets/destination/background-destination-tablet.jpg')",
        "destination-desktop": "url('./assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('./assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('./assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('./assets/crew/background-crew-desktop.jpg')",
        "technology-mobile": "url('./assets/technology/background-technology-mobile.jpg')",
        "technology-tablet": "url('./assets/technology/background-technology-tablet.jpg')",
        "technology-desktop": "url('./assets/technology/background-technology-desktop.jpg')",
      },
      height: {
        planet: "10.625rem",
        crew: "13.875rem",
        "nav-dot": "0.625rem",
      },
      width: {
        planet: "10.625rem",
        "nav-dot": "0.625rem",
        "smallest-screen": "600px",
        112: "28rem"
      },
      maxWidth: {
        103: "25.75rem",
        112: "28rem"
      },
      borderWidth: {
        3: "3px"
      },
      gap: {
        39: "9.75rem"
      },
      opacity: {
        17: "0.17"
      },
      backdropBlur: {
        tiny: "1px"
      },
    },
  },
  plugins: [],
}