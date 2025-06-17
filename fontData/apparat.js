const {
  MakeFontFamily,
  MakeOpenTypeFeatures,
} = require("./fontDataHelpers.js");

const name = "KMR-Apparat";
const Apparat = {
  id: 2,
  name: name,
  nameReadable: "Apparat",
  fontDir: `/fonts/${name}/WEB/WOFF/`,
  openTypeFeatures: [
    MakeOpenTypeFeatures("Access All Alternates", "aalt"),
    MakeOpenTypeFeatures("Contextual Alternates", "calt"),
    MakeOpenTypeFeatures("Glyph (De)Composition", "ccmp"),
    MakeOpenTypeFeatures("Digital Clock", "dlig"),
    MakeOpenTypeFeatures("Denominators", "dnom"),
    MakeOpenTypeFeatures("Fractions", "frac"),
    MakeOpenTypeFeatures("Standard Ligatures", "liga"),
    MakeOpenTypeFeatures("Numerators", "numr"),
    MakeOpenTypeFeatures("Ordinals", "ordn"),
    MakeOpenTypeFeatures("Proportional Figures", "pnum"),
    MakeOpenTypeFeatures("Scientific Inferiors", "sinf"),
    MakeOpenTypeFeatures("Subscript", "subs"),
    MakeOpenTypeFeatures("Superscript", "sups"),
    MakeOpenTypeFeatures("Slashed Zero", "zero"),
    MakeOpenTypeFeatures("Tabular Figures", "tnum"),
    MakeOpenTypeFeatures("Localized Forms", "locl"),
  ],
  openTypeFeaturesFiltered: ["dlig"],
  variable: `/fonts/${name}/${name}VF`,
  fontFamilies: [
    {
      styleName: "Regular",
      styleId: 1,
      styleStrech: "regular",
      weights: [
        MakeFontFamily(name, 100, "Light", "regular", "regular", true),
        MakeFontFamily(name, 200, "Regular", "regular", "regular", true),
        MakeFontFamily(name, 300, "Book"),
        MakeFontFamily(name, 400, "Medium", "regular", "regular", true),
        MakeFontFamily(name, 500, "Bold"),
        MakeFontFamily(name, 600, "Heavy"),
        MakeFontFamily(name, 700, "Black"),
      ],
    },
  ],
};

module.exports = { Apparat };
