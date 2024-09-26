/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('../public/back2.png')",
      },
      colors: {
        cyanCustom: '#00C8E6',  // Light cyan for buttons and highlights
        darkGray: '#333333',    // Dark gray for text
        lightGray: '#F4F4F4',   // Light background color
        blackText: '#000000',   // Black text for headlines
        white: '#FFFFFF',       // White color for backgrounds and text
        grayText: '#777777',    // Light gray text for descriptions
        tealButton: '#00A8CC',  // Teal for 'Call Now' and 'Go' buttons
      },
    },
  },
  plugins: [],
}
