/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#0072f5',
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731',
        },
        secondary: {
          50: '#e6fbfa',
          100: '#ccf7f4',
          200: '#99efe9',
          300: '#66e7de',
          400: '#33dfd3',
          500: '#00d7c8',
          600: '#00aca0',
          700: '#008178',
          800: '#005650',
          900: '#002b28',
        },
        accent: {
          50: '#feebf7',
          100: '#fdd7ef',
          200: '#fbafdf',
          300: '#f987cf',
          400: '#f75fbf',
          500: '#f537af',
          600: '#c42c8c',
          700: '#932169',
          800: '#621646',
          900: '#310b23',
        },
        background: {
          dark: '#0a0a1f',
          darker: '#050514',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 215, 200, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 215, 200, 0.8), 0 0 30px rgba(0, 215, 200, 0.5)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};