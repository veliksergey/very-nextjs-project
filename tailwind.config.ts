import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [typography, daisyui],
  daisyui: {
    themes: ['dim', 'cupcake', 'dark', 'nord', 'pastel'],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: true,
    themeRoot: ':root',
  },
}

export default config;