/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'fff': '323px',
        'mxf': '373px',
        'mm': '300px',
        'sgx': ' 295px ',
        'sgg' : '460px' ,
        'ggg' : '555px' ,
        'max': '600px',
        'msx': '770px',
        'mgx': '1000px ',
        'lax': '1250px',
        'lsx': '1400px',
        'lgx': '1700px',
      },
      fontFamily: {
        inter: ['Inter,']
      },
    }
  },
  plugins: [  ],
}