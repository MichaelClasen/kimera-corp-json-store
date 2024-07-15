const {
  MakeFontFamily,
  MakeOpenTypeFeatures,
} = require("./fontDataHelpers.js");

const name = "KMR-Waldenburg";
const Waldenburg = {
  name: name,
  nameReadable: "Waldenburg",
  fontDir: `/fonts/${name}/WEB/WOFF/`,
  openTypeFeatures: [
    MakeOpenTypeFeatures("Light Punctuation", "ss01"),
    MakeOpenTypeFeatures("Heavy Punctuation", "ss02"),
    MakeOpenTypeFeatures("Alt Ampersand", "ss03"),
    MakeOpenTypeFeatures("Alt G", "ss04"),
    MakeOpenTypeFeatures("Alt R", "ss05"),
    MakeOpenTypeFeatures("Case-Sensitive Form", "case"),
    MakeOpenTypeFeatures("Standard Ligatures", "liga"),
    MakeOpenTypeFeatures("Stylistic Alternatives", "salt"),
    MakeOpenTypeFeatures("Denominators", "dnom"),
    MakeOpenTypeFeatures("Fractions", "frac"),
    MakeOpenTypeFeatures("Historical Forms", "hist"),
    MakeOpenTypeFeatures("Localized Forms", "locl"),
    MakeOpenTypeFeatures("Numerators", "numr"),
    MakeOpenTypeFeatures("Ordinals", "ordn"),
    MakeOpenTypeFeatures("Scientific Inferiors", "sinf"),
    MakeOpenTypeFeatures("Slashed Zero", "zero"),
  ],
  openTypeFeaturesFiltered: ["ss05", "ss04", "ss03", "ss01", "ss02", "case"],
  variable: `/fonts/${name}/${name}VF`,
  fontFamilies: [
    {
      styleName: "Normal",
      styleId: 1,
      styleStrech: "normal",
      weights: [
        MakeFontFamily(name, 100, "Fein"),
        MakeFontFamily(name, 100, "Fein Kursiv", "normal", "italic"),
        MakeFontFamily(name, 200, "Mager", "normal", "normal", true),
        MakeFontFamily(name, 200, "Mager Kursiv", "normal", "italic", true),
        MakeFontFamily(name, 300, "Buch"),
        MakeFontFamily(name, 300, "Buch Kursiv", "normal", "italic"),
        MakeFontFamily(name, 400, "Normal", "normal", "normal", true),
        MakeFontFamily(name, 400, "Normal Kursiv", "normal", "italic", true),
        MakeFontFamily(name, 500, "Halbfett"),
        MakeFontFamily(name, 500, "Halbfett Kursiv", "normal", "italic"),
        MakeFontFamily(name, 600, "Fett", "normal", "normal", true),
        MakeFontFamily(name, 600, "Fett Kursiv", "normal", "italic", true),
        MakeFontFamily(name, 700, "Schwer"),
        MakeFontFamily(name, 700, "Schwer Kursiv", "normal", "italic"),
        MakeFontFamily(name, 800, "Schwarz"),
        MakeFontFamily(name, 800, "Schwarz Kursiv", "normal", "italic"),
      ],
    },
    {
      styleName: "Halbschmal",
      styleId: 2,
      styleStrech: "semi-condensed",
      weights: [
        MakeFontFamily(name, 100, "Fein Halbschmal", "semi-condensed"),
        MakeFontFamily(
          name,
          100,
          "Fein Halbschmal Kursiv",
          "semi-condensed",
          "italic"
        ),
        MakeFontFamily(
          name,
          200,
          "Mager Halbschmal",
          "semi-condensed",
          "normal",
          true
        ),
        MakeFontFamily(
          name,
          200,
          "Mager Halbschmal Kursiv",
          "semi-condensed",
          "italic",
          true
        ),
        MakeFontFamily(name, 300, "Buch Halbschmal", "semi-condensed"),
        MakeFontFamily(
          name,
          300,
          "Buch Halbschmal Kursiv",
          "semi-condensed",
          "italic"
        ),
        MakeFontFamily(
          name,
          400,
          "Halbschmal",
          "semi-condensed",
          "normal",
          true
        ),
        MakeFontFamily(
          name,
          400,
          "Halbschmal Kursiv",
          "semi-condensed",
          "italic",
          true
        ),
        MakeFontFamily(name, 500, "Halbfett Halbschmal", "semi-condensed"),
        MakeFontFamily(
          name,
          500,
          "Halbfett Halbschmal Kursiv",
          "semi-condensed",
          "italic"
        ),
        MakeFontFamily(
          name,
          600,
          "Fett Halbschmal",
          "semi-condensed",
          "normal",
          true
        ),
        MakeFontFamily(
          name,
          600,
          "Fett Halbschmal Kursiv",
          "semi-condensed",
          "italic",
          true
        ),
        MakeFontFamily(name, 700, "Schwer Halbschmal", "semi-condensed"),
        MakeFontFamily(
          name,
          700,
          "Schwer Halbschmal Kursiv",
          "semi-condensed",
          "italic"
        ),
        MakeFontFamily(name, 800, "Schwarz Halbschmal", "semi-condensed"),
        MakeFontFamily(
          name,
          800,
          "Schwarz Halbschmal Kursiv",
          "semi-condensed",
          "italic"
        ),
      ],
    },
    {
      styleName: "Schmal",
      styleId: 3,
      styleStrech: "condensed",
      weights: [
        MakeFontFamily(name, 100, "Fein Schmal", "condensed"),
        MakeFontFamily(name, 100, "Fein Schmal Kursiv", "condensed", "italic"),
        MakeFontFamily(name, 200, "Mager Schmal", "condensed", "normal", true),
        MakeFontFamily(
          name,
          200,
          "Mager Schmal Kursiv",
          "condensed",
          "italic",
          true
        ),
        MakeFontFamily(name, 300, "Buch Schmal", "condensed"),
        MakeFontFamily(name, 300, "Buch Schmal Kursiv", "condensed", "italic"),
        MakeFontFamily(name, 400, "Schmal", "condensed", "normal", true),
        MakeFontFamily(name, 400, "Schmal Kursiv", "condensed", "italic", true),
        MakeFontFamily(name, 500, "Halbfett Schmal", "condensed"),
        MakeFontFamily(
          name,
          500,
          "Halbfett Schmal Kursiv",
          "condensed",
          "italic"
        ),
        MakeFontFamily(name, 600, "Fett Schmal", "condensed", "normal", true),
        MakeFontFamily(
          name,
          600,
          "Fett Schmal Kursiv",
          "condensed",
          "italic",
          true
        ),
        MakeFontFamily(name, 700, "Schwer Schmal", "condensed"),
        MakeFontFamily(
          name,
          700,
          "Schwer Schmal Kursiv",
          "condensed",
          "italic"
        ),
        MakeFontFamily(name, 800, "Schwarz Schmal", "condensed"),
        MakeFontFamily(
          name,
          800,
          "Schwarz Schmal Kursiv",
          "condensed",
          "italic"
        ),
      ],
    },
  ],
};

module.exports = { Waldenburg };
