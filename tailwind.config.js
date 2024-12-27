/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Grid Template Columns
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      // Custom Fonts
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      // Custom Animations
      animation: {
        spin_slow: 'spin 6s linear infinite',
        elastic: 'elasticBackground 4s ease-in-out infinite',
        gradientFlow: 'gradientFlow 15s ease infinite',
        ripple: 'rippleEffect 5s ease-out infinite', // Added ripple animation
      },
      // Keyframes
      keyframes: {
        elasticBackground: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.1)' },
          '60%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        rippleEffect: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(2.5)', opacity: 0 },
        },
      },
      // Custom Colors
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      // Custom Box Shadows
      boxShadow: {
        black: '4px 4px 0 #000',
        white: '4px 4px 0 #fff',
      },
      // Background Gradients
      backgroundImage: {
        'light-gradient': 'linear-gradient(to bottom, #f3e6f8, #f7d9e7)',
        'elastic-gradient': 'linear-gradient(120deg, #3b82f6, #9333ea, #f43f5e)', // Elastic gradient
      },
    },
  },
  darkMode: 'class', // Toggle dark mode using a class
  plugins: [],
};
