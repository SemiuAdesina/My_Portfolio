/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom grid template columns
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      // Custom fonts
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
        Poppins: ["Poppins", "sans-serif"], // Added Poppins font
      },
      // Custom animations
      animation: {
        spin_slow: 'spin 6s linear infinite',
      },
      // Custom colors
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      // Custom box shadows
      boxShadow: {
        black: '4px 4px 0 #000',
        white: '4px 4px 0 #fff',
      },
      // Custom gradient background
      backgroundImage: {
        'light-gradient': 'linear-gradient(to bottom, #f3e6f8, #f7d9e7)', // Light gradient
      },
    },
  },
  darkMode: 'class', // Update dark mode to 'class' to toggle based on a class
  plugins: [],
};
