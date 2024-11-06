/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: '#00ade1',
        blue1: '#006f95',
        blue2: '#003d56',
      },
      screens: {
        xs: '480px',    
        sm: '640px',    
        md: '768px',    
        lg: '1024px',   
        xl: '1280px',   
        '2xl': '1536px' 
      },
    },
  },
  plugins: [],
}

