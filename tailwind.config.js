/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js"
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      mono1: ['Monaco']
    },
    extend: {
      colors: {
        beige: '#f5f5dc',
        pale: '#FDFDEB',
        lightbrown: '#D3BFA9',
        mediumbrown: '#A18666',
        darkbrown: '#634536',
        coral: '#FF7F50',
        chocolatebrown: '#382A1C',
      },
      textColor: {
        beige: '#f5f5dc',
        pale: '#FDFDEB',
        lightbrown: '#D3BFA9',
        mediumbrown: '#A18666',
        darkbrown: '#634536',
        chocolatebrown: '#382A1C',
        coral: '#FF7F50',
      },
      textStroke: {
        '2': '2px',
        '4': '4px',
      },

    },
  },
  plugins: [],
}

