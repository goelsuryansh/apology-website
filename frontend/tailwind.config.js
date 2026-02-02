/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB7B2',
        'primary-foreground': '#4A3B52',
        secondary: '#E0BBE4',
        'secondary-foreground': '#4A3B52',
        accent: '#FFDAC1',
        'accent-foreground': '#5D4037',
        background: '#FFF9F5',
        foreground: '#4A3B52',
        muted: '#F5E6E8',
        border: '#E6C9C9',
        success: '#95D5B2',
        error: '#FF9AA2',
        'text-subtle': '#8D7F94',
      },
      fontFamily: {
        heading: ['Fredoka', 'Nunito', 'sans-serif'],
        body: ['Quicksand', 'Varela Round', 'sans-serif'],
        special: ['Caveat', 'cursive'],
      },
      borderRadius: {
        'clay': '9999px',
        'card': '1.5rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(255, 183, 178, 0.5)',
        'clay': 'inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -3px -3px 7px rgba(0, 0, 0, 0.05), 5px 5px 15px rgba(224, 187, 228, 0.3)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
