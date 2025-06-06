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
  variable: `/fonts/${name}/${name}UprightVF`,
  fontFamilies: [
    {
      styleName: "Regular",
      styleId: 1,
      styleStrech: "regular",
      weights: [
        MakeFontFamily(name, 100, "Thin"),
        MakeFontFamily(name, 100, "Thin Italic", "regular", "italic"),
        MakeFontFamily(name, 200, "Light", "regular", "regular", true),
        MakeFontFamily(name, 200, "Light Italic", "regular", "italic", true),
        MakeFontFamily(name, 300, "Book"),
        MakeFontFamily(name, 300, "Book Italic", "regular", "italic"),
        MakeFontFamily(name, 400, "Regular", "regular", "regular", true),
        MakeFontFamily(name, 400, "Italic", "regular", "italic", true),
        MakeFontFamily(name, 500, "Medium"),
        MakeFontFamily(name, 500, "Medium Italic", "regular", "italic"),
        MakeFontFamily(name, 600, "Bold", "regular", "regular", true),
        MakeFontFamily(name, 600, "Bold Italic", "regular", "italic", true),
        MakeFontFamily(name, 700, "Heavy"),
        MakeFontFamily(name, 700, "Heavy Italic", "regular", "italic"),
        MakeFontFamily(name, 800, "Black"),
        MakeFontFamily(name, 800, "Black Italic", "regular", "italic"),
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
          "regular",
          true
        ),
        MakeFontFamily(
          name,
          200,
          "Light SemiCondensed Italic",
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
          "regular",
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
          "regular",
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
      styleName: "Condensed",
      styleId: 3,
      styleStrech: "condensed",
      weights: [
        MakeFontFamily(name, 100, "Condensed Thin", "condensed"),
        MakeFontFamily(name, 100, "Condensed Thin Italic", "condensed", "italic"),
        MakeFontFamily(name, 200, "Condensed Light", "condensed", "regular", true),
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
        MakeFontFamily(name, 400, "Condensed", "condensed", "regular", true),
        MakeFontFamily(name, 400, "Condensed Italic", "condensed", "italic", true),
        MakeFontFamily(name, 500, "Condensed Medium", "condensed"),
        MakeFontFamily(
          name,
          500,
          "Condensed Medium Italic",
          "condensed",
          "italic"
        ),
        MakeFontFamily(name, 600, "Condensed Bold", "condensed", "regular", true),
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
          "regular",
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
          "regular",
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
          "regular",
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
          "regular",
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
          "regular",
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
          "regular",
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
