// import { MakeFontFamily } from 'fontDataHelpers.js'
const { MakeFontFamily } = require('./fontDataHelpers.js');

const name = "Waldenburg"
const Waldenburg = {
  name: name,
  fontDir: `/fonts/${name}/`,
  fontFamilies: [
    MakeFontFamily(name, 100, "Fein"),
    MakeFontFamily(name, 100, "Fein Halbschmal", 'semi-condensed'),
    MakeFontFamily(name, 100, "Fein Schmal", 'condensed'),
    MakeFontFamily(name, 375, "Buch"),
    MakeFontFamily(name, 375, "Buch Kursiv", 'normal', 'italic'),
    MakeFontFamily(name, 375, "Buch Halbschmal", 'semi-condensed'),
    MakeFontFamily(name, 375, "Buch Halbschmal Kursiv", 'semi-condensed', 'italic'),
    MakeFontFamily(name, 375, "Buch Schmal", 'condensed'),
    MakeFontFamily(name, 500, "Halbfett"),
    MakeFontFamily(name, 700, "Fett"),
  ]
}

// console.log(name, Waldenburg);
module.exports = { Waldenburg }
// export default Waldenburg