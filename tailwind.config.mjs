/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        graphite: { 950: '#07080b', 900: '#0d1017', 850: '#111722', 800: '#161d2a' },
        milk: '#f7f2e8',
        steel: '#94a3b8',
        gold: '#d6b66a',
      },
      boxShadow: { premium: '0 24px 80px rgba(0,0,0,.38)' },
      backgroundImage: {
        'premium-radial': 'radial-gradient(circle at top left, rgba(66,153,225,.22), transparent 34%), radial-gradient(circle at 82% 8%, rgba(214,182,106,.18), transparent 30%)'
      }
    },
  },
  plugins: [],
};
