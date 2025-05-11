
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ajuste conforme seu projeto
  ], 
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
}
  