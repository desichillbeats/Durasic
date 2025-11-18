/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wynk-purple': '#8B5CF6',
        'wynk-pink': '#EC4899',
        'wynk-dark': '#0F172A',
        'wynk-gray': '#1E293B',
      },
    },
  },
  plugins: [],
}
