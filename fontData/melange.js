const { MakeFontFamily } = require('./fontDataHelpers.js');

const name = "Melange"

const Melange = {
  name: name + " Neue",
  fontDir: `/fonts/${name}/`,
  fontFamilies: [
    MakeFontFamily(name, 100, "Hairline"),
    MakeFontFamily(name, 150, "Thin"),
    MakeFontFamily(name, 200, "Light"),
    MakeFontFamily(name, 300, "Book"),
    MakeFontFamily(name, 400, "Regular"),
    MakeFontFamily(name, 450, "Medium"),
    MakeFontFamily(name, 500, "SemiBold"),
    MakeFontFamily(name, 600, "Bold"),
    MakeFontFamily(name, 700, "ExtraBold"),
    MakeFontFamily(name, 800, "Black"),
    MakeFontFamily(name, 900, "ExtraBlack"),

  ]


}

module.exports = { Melange }