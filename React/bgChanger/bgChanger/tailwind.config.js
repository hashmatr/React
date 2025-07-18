// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          500: '#808000',
        },
        grey: {
          500: '#808080',
        },
        lavender: {
          500: '#E6E6FA',
        },
      },
    },
  },
  plugins: [],
}
