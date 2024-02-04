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
    },
    backgroundImage: {
      'bistro-banner': "url('https://i.postimg.cc/kX6ftrkR/chef-service.jpg')",
      'feature-bg':"url('https://i.postimg.cc/fLzg3vDC/featured.jpg')",
      'login-bg': "url('https://i.postimg.cc/d0z2sCLh/authentication.png')"
    
    }
  },
 

  plugins: [require("daisyui")],

}

