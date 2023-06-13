/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
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
    },
  },
  plugins: [],
}
