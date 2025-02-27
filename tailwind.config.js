/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: { fontFamily: {
      sans: ['Catamaran', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', 'monospace'],
    },
    extend: {} },
    plugins: [],
  }