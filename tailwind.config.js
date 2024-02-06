module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-to-br': 'linear-gradient(to bottom left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.7))',
        'gradient-to-bl': 'linear-gradient(to top right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))',      }),
    },
    colors: {
      'background': '#f4f4f4',
      'black' : '#000000',
      'light': '#a488b3',
      'accent': '#ebc2ff',
      'rose': '#a488b3',
      'blue': '#88b388',
      'danger': '#ffe7c2',
      'allowed': '#628B48',
      'yellow' : '#c2ffc2',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      transparent: 'transparent',
    }
  },
  plugins: [],
}