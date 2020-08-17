const sizing = {
  '1/10': '10%',
  '2/10': '20%',
  '3/10': '30%',
  '4/10': '40%',
  '5/10': '50%',
  '6/10': '60%',
  '7/10': '70%',
  '8/10': '80%',
  '9/10': '90%',
}

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.svelte',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      scale: {
        'invert': '-1',
      },
      spacing: {
        ...sizing,
      },
      inset: {
        '1/2': '50%',
        '1/4': '20%',
        '2/5': '40%',
        ...sizing,
        'full': '100%',
      },
      borderRadius: {
        'xl': '1rem',
        'full': '10010px',
      },
      fontFamily: {
      },
      colors: {
      }
    },
  },
  variants: {},
  plugins: [],
}
