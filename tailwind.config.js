/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#1b1b26',
        inksoft: '#4a4a5e',
        cream: '#fffdf8',
        paper: '#ffffff',
        coral: {
          300: '#ffb3a0',
          400: '#ff8f70',
          500: '#ff6b4a',
          600: '#f04e2e',
        },
        grape: {
          300: '#c9b8ff',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7440e8',
        },
        amberpop: {
          300: '#ffd98a',
          400: '#ffc44d',
          500: '#f5a623',
          600: '#dd8a0a',
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(27, 27, 38, 0.18)',
        card: '0 8px 30px -8px rgba(27, 27, 38, 0.12)',
      },
    },
  },
  plugins: [],
};
