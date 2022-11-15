// import { MakeFontFamily } from 'fontDataHelpers.js'
const { MakeFontFamily, MakeOpenTypeFeatures } = require('./fontDataHelpers.js');

const name = "Waldenburg"
const Waldenburg = {
  name: name,
  fontDir: `/fonts/${name}/`,
  openTypeFeatures: [
    MakeOpenTypeFeatures('Stylistic Alternatives', 'salt'),
    MakeOpenTypeFeatures('Standard Ligatures', 'liga'),
    MakeOpenTypeFeatures('Case-Sensitive Form', 'case')
  ],
  variable: `/fonts/${name}/${name}Variable`,
  fontFamilies: [
    MakeFontFamily(name, 100, "Fein"),
    MakeFontFamily(name, 100, "Fein Kursiv", 'normal', 'italic'),
    MakeFontFamily(name, 100, "Fein Halbschmal", 'semi-condensed'),
    MakeFontFamily(name, 100, "Fein Halbschmal Kursiv", 'semi-condensed', 'italic'),
    MakeFontFamily(name, 100, "Fein Schmal", 'condensed'),
    MakeFontFamily(name, 100, "Fein Schmal Kursiv", 'condensed', 'italic'),

    MakeFontFamily(name, 200, "Mager"),
    MakeFontFamily(name, 200, "Mager Kursiv", 'normal', 'italic'),
    MakeFontFamily(name, 200, "Mager Halbschmal", 'semi-condensed'),
    MakeFontFamily(name, 200, "Mager Halbschmal Kursiv", 'semi-condensed', 'italic'),
    MakeFontFamily(name, 200, "Mager Schmal", 'condensed'),
    MakeFontFamily(name, 200, "Mager Schmal Kursiv", 'condensed', 'italic'),

    MakeFontFamily(name, 300, "Buch"),
    MakeFontFamily(name, 300, "Buch Kursiv", 'normal', 'italic'),
    MakeFontFamily(name, 300, "Buch Halbschmal", 'semi-condensed'),
    MakeFontFamily(name, 300, "Buch Halbschmal Kursiv", 'semi-condensed', 'italic'),
    MakeFontFamily(name, 300, "Buch Schmal", 'condensed'),
    MakeFontFamily(name, 300, "Buch Schmal Kursiv", 'condensed', 'italic'),

    MakeFontFamily(name, 400, "Normal"),
    MakeFontFamily(name, 400, "Normal Kursiv", 'normal', 'italic'),
    MakeFontFamily(name, 400, "Halbschmal", 'semi-condensed'),
    MakeFontFamily(name, 400, "Halbschmal Kursiv", 'semi-condensed', 'italic'),
    MakeFontFamily(name, 400, "Schmal", 'condensed'),
    MakeFontFamily(name, 400, "Schmal Kursiv", 'condensed', 'italic'),

    MakeFontFamily(name, 500, "Halbfett"),
    MakeFontFamily(name, 500, "Halbfett Kursiv", 'normal', 'italic'),
    MakeFontFamily(name, 500, "Halbfett Halbschmal", 'semi-condensed'),
    MakeFontFamily(name, 500, "Halbfett Halbschmal Kursiv", 'semi-condensed', 'italic'),
    MakeFontFamily(name, 500, "Halbfett Schmal", 'condensed'),
    MakeFontFamily(name, 500, "Halbfett Schmal Kursiv", 'condensed', 'italic'),

    MakeFontFamily(name, 600, "Fett"),
    MakeFontFamily(name, 600, "Fett Kursiv", 'normal', 'italic'),
    MakeFontFamily(name, 600, "Fett Halbschmal", 'semi-condensed'),
    MakeFontFamily(name, 600, "Fett Halbschmal Kursiv", 'semi-condensed', 'italic'),
    MakeFontFamily(name, 600, "Fett Schmal", 'condensed'),
    MakeFontFamily(name, 600, "Fett Schmal Kursiv", 'condensed', 'italic'),

    MakeFontFamily(name, 700, "Schwer"),
    MakeFontFamily(name, 700, "Schwer Kursiv", 'normal', 'italic'),
    MakeFontFamily(name, 700, "Schwer Halbschmal", 'semi-condensed'),
    MakeFontFamily(name, 700, "Schwer Halbschmal Kursiv", 'semi-condensed', 'italic'),
    MakeFontFamily(name, 700, "Schwer Schmal", 'condensed'),
    MakeFontFamily(name, 700, "Schwer Schmal Kursiv", 'condensed', 'italic'),

    MakeFontFamily(name, 800, "Schwarz"),
    MakeFontFamily(name, 800, "Schwarz Kursiv", 'normal', 'italic'),
    MakeFontFamily(name, 800, "Schwarz Halbschmal", 'semi-condensed'),
    MakeFontFamily(name, 800, "Schwarz Halbschmal Kursiv", 'semi-condensed', 'italic'),
    MakeFontFamily(name, 800, "Schwarz Schmal", 'condensed'),
    MakeFontFamily(name, 800, "Schwarz Schmal Kursiv", 'condensed', 'italic'),
  ]
}

// console.log(name, Waldenburg);
module.exports = { Waldenburg }
// export default Waldenburg