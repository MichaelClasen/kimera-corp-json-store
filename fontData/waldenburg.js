const {
  MakeFontFamily,
  MakeOpenTypeFeatures,
} = require("./fontDataHelpers.js");

const name = "KMR-Waldenburg";
const Waldenburg = {
  id: 1,
  name: name,
  nameReadable: "Waldenburg",
  fontDir: `/fonts/${name}/WEB/WOFF/`,
  openTypeFeatures: [
    MakeOpenTypeFeatures("Alt a", "ss01"),
    MakeOpenTypeFeatures("Alt G", "ss02"),
    MakeOpenTypeFeatures("Alt Q", "ss03"),
    MakeOpenTypeFeatures("Alt R", "ss04"),
    MakeOpenTypeFeatures("Alt Ampersand", "ss05"),
    MakeOpenTypeFeatures("Light Symbols", "ss06"),
    MakeOpenTypeFeatures("Black Symbols", "ss07"),
    MakeOpenTypeFeatures("Stylistic Set 8", "ss08"),
    MakeOpenTypeFeatures("Stylistic Set 9", "ss09"),
    MakeOpenTypeFeatures("Stylistic Set 10", "ss010"),
    MakeOpenTypeFeatures("Stylistic Set 11", "ss011"),
    MakeOpenTypeFeatures("Stylistic Set 12", "ss012"),
    MakeOpenTypeFeatures("Stylistic Set 13", "ss013"),
    MakeOpenTypeFeatures("Stylistic Set 14", "ss014"),
    MakeOpenTypeFeatures("Stylistic Set 15", "ss015"),
    MakeOpenTypeFeatures("Stylistic Set 16", "ss016"),
    MakeOpenTypeFeatures("Stylistic Set 17", "ss017"),
    MakeOpenTypeFeatures("Stylistic Set 18", "ss018"),
    MakeOpenTypeFeatures("Stylistic Set 19", "ss019"),
    MakeOpenTypeFeatures("Stylistic Set 20", "ss020"),
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
  openTypeFeaturesFiltered: ["ss04", "ss02", "ss05", "ss06", "ss07", "case"],
  variable: `/fonts/${name}/${name}UprightVF`,
  fontFamilies: [
    {
      styleName: "Condensed",
      styleId: 3,
      styleStrech: "condensed",
      weights: [
        MakeFontFamily(name, 100, "Condensed Thin", "condensed"),
        MakeFontFamily(name, 100, "Condensed Thin Italic", "condensed", "italic"),
        MakeFontFamily(name, 200, "Condensed Light", "condensed", "normal", true),
        MakeFontFamily(
          name,
          200,
          "Condensed Light Italic",
          "condensed",
          "italic",
          true
        ),
        MakeFontFamily(name, 300, "Condensed Book", "condensed"),
        MakeFontFamily(name, 300, "Condensed Book Italic", "condensed", "italic"),
        MakeFontFamily(name, 400, "Condensed", "condensed", "normal", true),
        MakeFontFamily(name, 400, "Condensed Italic", "condensed", "italic", true),
        MakeFontFamily(name, 500, "Condensed Medium", "condensed"),
        MakeFontFamily(
          name,
          500,
          "Condensed Medium Italic",
          "condensed",
          "italic"
        ),
        MakeFontFamily(name, 600, "Condensed Bold", "condensed", "normal", true),
        MakeFontFamily(
          name,
          600,
          "Condensed Bold Italic",
          "condensed",
          "italic",
          true
        ),
        MakeFontFamily(name, 700, "Condensed Heavy", "condensed"),
        MakeFontFamily(
          name,
          700,
          "Condensed Heavy Italic",
          "condensed",
          "italic"
        ),
        MakeFontFamily(name, 800, "Condensed Black", "condensed"),
        MakeFontFamily(
          name,
          800,
          "Condensed Black Italic",
          "condensed",
          "italic"
        ),
      ],
    },
    {
      styleName: "SemiCondensed",
      styleId: 2,
      styleStrech: "semi-condensed",
      weights: [
        MakeFontFamily(name, 100, "SemiCondensed Thin", "semi-condensed"),
        MakeFontFamily(
          name,
          100,
          "SemiCondensed Thin Italic",
          "semi-condensed",
          "italic"
        ),
        MakeFontFamily(
          name,
          200,
          "SemiCondensed Light",
          "semi-condensed",
          "normal",
          true
        ),
        MakeFontFamily(
          name,
          200,
          "SemiCondensed Light Italic",
          "semi-condensed",
          "italic",
          true
        ),
        MakeFontFamily(name, 300, "SemiCondensed Book", "semi-condensed"),
        MakeFontFamily(
          name,
          300,
          "SemiCondensed Book Italic",
          "semi-condensed",
          "italic"
        ),
        MakeFontFamily(
          name,
          400,
          "SemiCondensed",
          "semi-condensed",
          "normal",
          true
        ),
        MakeFontFamily(
          name,
          400,
          "SemiCondensed Italic",
          "semi-condensed",
          "italic",
          true
        ),
        MakeFontFamily(name, 500, "SemiCondensed Medium", "semi-condensed"),
        MakeFontFamily(
          name,
          500,
          "SemiCondensed Medium Italic",
          "semi-condensed",
          "italic"
        ),
        MakeFontFamily(
          name,
          600,
          "SemiCondensed Bold",
          "semi-condensed",
          "normal",
          true
        ),
        MakeFontFamily(
          name,
          600,
          "SemiCondensed Bold Italic",
          "semi-condensed",
          "italic",
          true
        ),
        MakeFontFamily(name, 700, "SemiCondensed Heavy", "semi-condensed"),
        MakeFontFamily(
          name,
          700,
          "SemiCondensed Heavy Italic",
          "semi-condensed",
          "italic"
        ),
        MakeFontFamily(name, 800, "SemiCondensed Black", "semi-condensed"),
        MakeFontFamily(
          name,
          800,
          "SemiCondensed Black Italic",
          "semi-condensed",
          "italic"
        ),
      ],
    },
    {
      styleName: "Regular",
      styleId: 1,
      styleStrech: "normal",
      weights: [
        MakeFontFamily(name, 100, "Thin"),
        MakeFontFamily(name, 100, "Thin Italic", "normal", "italic"),
        MakeFontFamily(name, 200, "Light", "normal", "normal", true),
        MakeFontFamily(name, 200, "Light Italic", "normal", "italic", true),
        MakeFontFamily(name, 300, "Book"),
        MakeFontFamily(name, 300, "Book Italic", "normal", "italic"),
        MakeFontFamily(name, 400, "Regular", "normal", "normal", true),
        MakeFontFamily(name, 400, "Italic", "normal", "italic", true),
        MakeFontFamily(name, 500, "Medium"),
        MakeFontFamily(name, 500, "Medium Italic", "normal", "italic"),
        MakeFontFamily(name, 600, "Bold", "normal", "normal", true),
        MakeFontFamily(name, 600, "Bold Italic", "normal", "italic", true),
        MakeFontFamily(name, 700, "Heavy"),
        MakeFontFamily(name, 700, "Heavy Italic", "normal", "italic"),
        MakeFontFamily(name, 800, "Black"),
        MakeFontFamily(name, 800, "Black Italic", "normal", "italic"),
      ],
    },
    {
      styleName: "SemiExtended",
      styleId: 4,
      styleStrech: "semi-extended",
      weights: [
        MakeFontFamily(name, 100, "SemiExtended Thin", "semi-extended"),
        MakeFontFamily(
          name,
          100,
          "SemiExtended Thin Italic",
          "semi-extended",
          "italic"
        ),
        MakeFontFamily(
          name,
          200,
          "SemiExtended Light",
          "semi-extended",
          "normal",
          true
        ),
        MakeFontFamily(
          name,
          200,
          "SemiExtended Light Italic",
          "semi-extended",
          "italic",
          true
        ),
        MakeFontFamily(name, 300, "SemiExtended Book", "semi-extended"),
        MakeFontFamily(
          name,
          300,
          "SemiExtended Book Italic",
          "semi-extended",
          "italic"
        ),
        MakeFontFamily(
          name,
          400,
          "SemiExtended",
          "semi-extended",
          "normal",
          true
        ),
        MakeFontFamily(
          name,
          400,
          "SemiExtended Italic",
          "semi-extended",
          "italic",
          true
        ),
        MakeFontFamily(name, 500, "SemiExtended Medium", "semi-extended"),
        MakeFontFamily(
          name,
          500,
          "SemiExtended Medium Italic",
          "semi-extended",
          "italic"
        ),
        MakeFontFamily(
          name,
          600,
          "SemiExtended Bold",
          "semi-extended",
          "normal",
          true
        ),
        MakeFontFamily(
          name,
          600,
          "SemiExtended Bold Italic",
          "semi-extended",
          "italic",
          true
        ),
        MakeFontFamily(name, 700, "SemiExtended Heavy", "semi-extended"),
        MakeFontFamily(
          name,
          700,
          "SemiExtended Heavy Italic",
          "semi-extended",
          "italic"
        ),
        MakeFontFamily(name, 800, "SemiExtended Black", "semi-extended"),
        MakeFontFamily(
          name,
          800,
          "SemiExtended Black Italic",
          "semi-extended",
          "italic"
        ),
      ],
    },
    {
      styleName: "Extended",
      styleId: 5,
      styleStrech: "extended",
      weights: [
        MakeFontFamily(name, 100, "Extended Thin", "extended"),
        MakeFontFamily(
          name,
          100,
          "Extended Thin Italic",
          "extended",
          "italic"
        ),
        MakeFontFamily(
          name,
          200,
          "Extended Light",
          "extended",
          "normal",
          true
        ),
        MakeFontFamily(
          name,
          200,
          "Extended Light Italic",
          "extended",
          "italic",
          true
        ),
        MakeFontFamily(name, 300, "Extended Book", "extended"),
        MakeFontFamily(
          name,
          300,
          "Extended Book Italic",
          "extended",
          "italic"
        ),
        MakeFontFamily(
          name,
          400,
          "Extended",
          "extended",
          "normal",
          true
        ),
        MakeFontFamily(
          name,
          400,
          "Extended Italic",
          "extended",
          "italic",
          true
        ),
        MakeFontFamily(name, 500, "Extended Medium", "extended"),
        MakeFontFamily(
          name,
          500,
          "Extended Medium Italic",
          "extended",
          "italic"
        ),
        MakeFontFamily(
          name,
          600,
          "Extended Bold",
          "extended",
          "normal",
          true
        ),
        MakeFontFamily(
          name,
          600,
          "Extended Bold Italic",
          "extended",
          "italic",
          true
        ),
        MakeFontFamily(name, 700, "Extended Heavy", "extended"),
        MakeFontFamily(
          name,
          700,
          "Extended Heavy Italic",
          "extended",
          "italic"
        ),
        MakeFontFamily(name, 800, "Extended Black", "extended"),
        MakeFontFamily(
          name,
          800,
          "Extended Black Italic",
          "extended",
          "italic"
        ),
      ],
    },
  ],
};

module.exports = { Waldenburg };
