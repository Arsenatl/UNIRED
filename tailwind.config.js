/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ru/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: { 'min': '320px', 'max': '576px' },
        sm: { 'min': '576px', 'max': '768px' },
        md: { 'min': '768px', 'max': '992px' },
        lg: { 'min': '992px', 'max': '1250px' },
        xl: {'min':'1200px'},
      },
      container: {
        center: true,
        padding: '20px',
      },
      backgroundImage:{
        headerBg:"url('/images/Group 2205.png')",
        opportunityBg:"url('/images/Rectangle 214.png')",
      },
    },
  },
  plugins: [],
}
