
module. exports = {
  mode: "jit",
  plugins: [],
  content: [
'./src/navdropdown.js/**/*.{js,html}',
 './index.html',
],
  theme: {
     extend: {
    fontFamily: {
      poppins: "Poppins",
      open_sans: "Open Sans",
      inter: "Inter",} 
    },
  },
};
