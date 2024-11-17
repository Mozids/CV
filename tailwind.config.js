import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        c: '#06b6d4',
        b: '#020617',
        a: '#334155',
        w: '#FFFFFF',
      },
      screens: {
        '2xl' : '320px',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

