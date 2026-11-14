/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        surface: 'var(--color-surface)',
        accent: 'var(--color-accent)',
        'accent-ink': 'var(--color-accent-ink)',
        pine: {
          DEFAULT: '#06110D',
          surface: '#0B1D15',
          mint: '#52E5A8',
          lichen: '#EBF5EF',
          sage: '#8FAE9E',
        },
        moss: {
          DEFAULT: '#0B1712',
          surface: '#12231C',
          emerald: '#34D399',
          mist: '#E3EFE8',
        },
        spruce: {
          DEFAULT: '#0F1F18',
          surface: '#172B22',
          celadon: '#86EFAC',
          sand: '#ECF5EC',
        },
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.23, 1, 0.32, 1)',
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
