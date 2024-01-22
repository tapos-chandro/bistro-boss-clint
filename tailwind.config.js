/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'footer-bg-one':'#1F2937',
      'footer-bg-tow':'#111827',
      'primary-text': '#fff'
    }
  },
 
  // 'data-theme':'light',

  plugins: [require("daisyui")],

}

