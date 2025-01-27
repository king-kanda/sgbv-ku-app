/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#f5f5f5',
      'gray-1': '#e5e5e5',
      'gray-2': '#d4d4d4',
      'gray-3': '#c4c4c4',
      'dark-text': '#B9BCBE',
      'text'  : '#454545',
      'border': '#CBD5E1',
      'navy': '#0C426F',
      'red': '#D53A3A',
     
    },
  },
  plugins: [],
}