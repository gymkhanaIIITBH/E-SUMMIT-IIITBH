/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use the CSS variable we added in src/index.css; fallback to serif
        newsreader: ["var(--font-newsreader)", 'serif'],
      },
    },
  },
  plugins: [],
}