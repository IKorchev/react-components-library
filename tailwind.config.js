module.exports = {
  purge: [],
  content: [
    './src/*.{ts,tsx}',
    './stories/*.{ts,tsx}',
    './.storybook/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
