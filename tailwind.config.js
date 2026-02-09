export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        gray: {
          500: '#6B7280',
          600: '#4B5563',
          900: '#111827',
        },
        black: {
          800: '#00000081',
          900: '#000000',
        },
  },
  plugins: [],
  }
}
}
