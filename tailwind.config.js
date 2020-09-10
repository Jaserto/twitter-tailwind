module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          600: 'hsl(205-7, 15-8%, 26.1%)',
          900: 'hsl(210, 27.5%, 20%)',
        },
        body: {
          default: 'hsl(210, 34.4%, 12.5%)',
        },
        primary: {
          default: 'hsl(202.8,89.1%, 53.1%)',
          600: 'hsl(202.8,89.1%, 23.1%)',
        }
      }
    },
  },
  variants: {
    backgroundColor: ['hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
