// import { MakeFontFamily } from 'fontDataHelpers.js'
const { MakeFontFamily } = require('./fontDataHelpers.js');

const name = "Waldenburg"
const Waldenburg = {
  name: name,
  fontDir: `/fonts/${name}/`,
  fontFamilies: [
    MakeFontFamily(name, 375, "Buch"),
    MakeFontFamily(name, 500, "Halbfett"),
    MakeFontFamily(name, 700, "Fett"),
  ]
}

// console.log(name, Waldenburg);
module.exports = { Waldenburg }
// export default Waldenburg