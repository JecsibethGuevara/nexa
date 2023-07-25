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
      'background': '#152228',
      'light': '#FEFCFB',
      'accent': '#F28482',
      'rose': '#F5CAC3',
      'blue': '#1282A2',
      'danger': '#8C271E',
      'allowed': '#628B48',
      'yellow' : '#F6BD60',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      transparent: 'transparent',
    }
  },
  plugins: [],
}