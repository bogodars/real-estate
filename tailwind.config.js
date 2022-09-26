/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
        screens: {
      'xl': '1450px',
      
    },
    container: {
      center: true,
      padding: '25px',
    },
    backgroundImage: {
      'hero': "url('/img/hero.png')",
      'triangle': "url('/img/triangle.png')",
     
    },
    colors: {
      'bg-header': '#E5E5E5',
      'bg-hero': '#F8F7FB',
      'search-button': '#CB30FF',
      'bg-white': '#ffffff',

    },  
    }

  },
  plugins: [],
}
