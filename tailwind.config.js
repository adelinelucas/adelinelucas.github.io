/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./*/*.html','./*/*.js', ],
  theme: {
    extend: {
      colors: {
        "pop-blue": "#0597F2",
        "pop-green": "#09A603",
        "pop-yellow": "#F2B705",
        "pop-red": "#F23005",
        "pop-purple": "#AC83E8",
        "pop-salmon": "#F29999",
        "personnal-grey":"#595959"
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
      },
      animation: {
        'boxContainerAnimation': 'all ease-in-out 5s',
      },
      boxShadow: {
        '3xl': '2px 5px 15px 0px rgb(31 0 55)',
      }
    },
  },
  plugins: [],
}
