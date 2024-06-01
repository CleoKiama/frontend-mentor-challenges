/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: 'hsl(25, 100%, 94%)',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: 'hsl(26, 100%, 55%)',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        neutral: {
          50: 'hsl(223, 64%, 98%)',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: 'hsl(220, 14%, 75%)',
          400: '#a3a3a3',
          500: 'hsl(219, 9%, 45%)',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: 'hsl(220, 13%, 13%)',
          950: 'hsl(0, 0%, 0%)',
        },
        white: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

