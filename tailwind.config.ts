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
    themes: ['dark', 'dim', 'cupcake', 'nord', 'pastel'],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: false,
    themeRoot: ':root',
  },
}

export default config;