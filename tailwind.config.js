/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'desktop-image': "url('./src/assets/images/image-product-desktop.jpg')",
        'mobile-image': "url('./src/assets/images/image-product-mobile.jpg')",

      }),
    },
  },
  plugins: [],
}

