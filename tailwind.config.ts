import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // theme: {},
  plugins: [typography, daisyui],
  daisyui: {
    themes: ['dim', 'dark', 'cupcake', 'nord', 'pastel'],
    darkTheme: 'dim',
    base: true,
    styled: true,
    utils: true,
    logs: false,
    themeRoot: ':root',
  },
}

export default config;