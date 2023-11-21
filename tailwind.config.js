/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      textColor: {
        'primary-color': '#49A078',
        'secondary-color': '#1F2421',
        'third-color': '#DCE1DE',
        'other-color': '#216869'
      },
      backgroundColor: {
        'primary-color': '#49A078',
        'secondary-color': '#1F2421',
        'third-color': '#DCE1DE',
        'other-color': '#216869'
      },
      borderColor: {
        'primary-color': '#49A078'
      }
    },
  },
  plugins: [],
};
