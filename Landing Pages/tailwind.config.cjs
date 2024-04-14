const path = require("path");

module.exports = {
  content: [
    path.join(__dirname, "./index.html"),
    path.join(__dirname, "./src/**/*.{js,jsx,ts,tsx,html,svelte,vue}"),
  ],
  theme: {
    extend: {
      fontFamily: { inter: "Inter", open_sans: "Open Sans" },
      backgroundImage: {
        "pexels-photo-43430301":
          "url(/assets/pexels-photo-43430301.png)",
        "pexels-fauxels-31846131":
          "url(/assets/pexels-fauxels-31846131.png)",
        "image-13":
          "url(/assets/image-13.png)",
        "image-21":
          "url(/assets/image-21.png)",
        "image-22":
          "url(/assets/image-22.png)",
        "image-15":
          "url(/assets/image-15.png)",
        "image-16":
          "url(/assets/image-16.png)",
        "image-18":
          "url(/assets/image-18.png)",
        "image-20":
          "url(/assets/image-20.png)",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
