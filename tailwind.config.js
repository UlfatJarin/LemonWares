/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': '#B00000',
      },

      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        
        // font-family: "Poppins", sans-serif;
        // font-family: "Inter", sans-serif;
      }
    },
  },
  plugins: [],
}