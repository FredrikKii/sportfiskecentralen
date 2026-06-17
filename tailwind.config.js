/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1e3d32',
          light: '#2a5244',
          dark: '#142a22',
        },
        cream: '#f5f2eb',
        sand: {
          DEFAULT: '#c9bda8',
          muted: '#8a7f6e',
        },
        charcoal: {
          DEFAULT: '#1c1c1c',
          light: '#2a2a2a',
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
