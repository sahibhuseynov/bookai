module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], // Varsayılan sans-serif ailesine eklenir
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'], // Özel bir sınıf için
      },
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
