/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightBlue:'#EEEEFF',
        hover:'#0F0AEF'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], 
      },
      boxShadow: {
        'custom': '0px 4px 5px 0px rgba(0, 0, 0, 0.20)',
      },
      fontSize: {
        '14px': '14px',
      },
      lineHeight: {
        '17.07': '17.07px',
      },
    },
  },
  plugins: [],
};
