module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], // Varsayılan sans-serif ailesine eklenir
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'], // Özel bir sınıf için
      },
      colors: {
        darkblue: '#05080f', // darkblue adında bir renk tanımlandı
        darkblue2: '#0a0f17', // darkblue2 adında bir renk tanımlandı
        inputdark: '#242a37', // inputdark adında bir renk tanımlandı
      },
    },
  },
  plugins: [require('daisyui')],
};
