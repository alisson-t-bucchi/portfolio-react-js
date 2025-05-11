
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          jetbrains: ['JetBrains Mono', 'monospace'],
        },
        fontWeight: {
          normal: '400',
          medium: '500',
          bold: '700',
        },
      },
    },
    variants: {
    extend: {
      cursor: ['hover-none'], // isso é opcional se quiser usar como variante
    },
  },
  plugins: [],
  safelist: [],
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Custom media queries
  screens: {
    'touch': {'raw': '(hover: none)'},
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    // ...
  },
}
  