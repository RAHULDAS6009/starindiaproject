/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C4161C',
          hover: '#A01217',
        },
        secondary: {
          DEFAULT: '#D4AF37',
          hover: '#B8941F',
        },
        dark: {
          base: '#0E0E0E',
          bg: '#161616',
        },
        text: {
          white: '#FFFFFF',
          muted: '#9A9A9A',
        },
        cta: {
          DEFAULT: '#D4AF37',
          hover: '#FFD700',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Cinzel', 'serif'],
        body: ['Inter', 'Poppins', 'sans-serif'],
        button: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
      },
      boxShadow: {
        DEFAULT: '0px 2px 4px #000000',
        glow: '0px 0px 20px rgba(255, 215, 0, 0.3)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

