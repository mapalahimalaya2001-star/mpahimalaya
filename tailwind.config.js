/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        forest: {
          50: '#f0f7f1',
          100: '#dceede',
          200: '#bbddbf',
          300: '#8ec496',
          400: '#5ea66b',
          500: '#3d8a4e',
          600: '#2d6e3d',
          700: '#245832',
          800: '#1e4629',
          900: '#193b23',
        },
        earth: {
          50: '#faf6f1',
          100: '#f3ebe0',
          200: '#e6d4bc',
          300: '#d4b48e',
          400: '#c0905f',
          500: '#b07540',
          600: '#9a6035',
          700: '#7f4c2d',
          800: '#683f29',
          900: '#563525',
        },
        sky: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#bce3ff',
          300: '#8ed2ff',
          400: '#59b8fd',
          500: '#3b9bf8',
          600: '#1e7ded',
          700: '#1666db',
          800: '#1853b1',
          900: '#1a498c',
        },
      },
    },
  },
  plugins: [
  require('@tailwindcss/typography'),
]
};
