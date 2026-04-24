/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
      },
      colors: {
        background: '#FAFAFA',
        foreground: '#111111',
        muted: '#A1A1AA',
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.87, 0, 0.13, 1)',
      }
    },
  },
  plugins: [],
}
