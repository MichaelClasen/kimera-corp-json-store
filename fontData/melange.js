// melange.js
const {
  MakeFontFamily,
  MakeOpenTypeFeatures,
} = require("./fontDataHelpers.js");

// The name of the font family. This is the name of the folder where the font files are located and should be hyphenated.
const name = "KMR-Melange-Grotesk";
const Melange = {
  id: 3,
  name: name,
  // The name of the font family that is displayed on the website, e.g. in the typetester on the top left dropdown.
  nameReadable: "Melange",
  // The directory where the font files are located. This corresponds to the "public" directory in the project.
  fontDir: `/fonts/${name}/WEB/WOFF/`,
  openTypeFeatures: [
    // You can find the open type features by dropping the variable font into fontgauntlet.com and looking at the opentype features section.
    // "Alt a" is the label that will be displayed on the website. "ss01" is the value that is used in the CSS.
    // All openTypeFeatures that are listed here will be usable in the backend, e.g. when creating specific typetester previews.
    MakeOpenTypeFeatures("Alt a", "ss01"),
    MakeOpenTypeFeatures("Alt l", "ss02"),
    MakeOpenTypeFeatures("Alt t", "ss03"),
    MakeOpenTypeFeatures("Alt u", "ss04"),
    MakeOpenTypeFeatures("Alt G", "ss05"),
    MakeOpenTypeFeatures("Alt I", "ss06"),
    MakeOpenTypeFeatures("Alt J", "ss07"),
    MakeOpenTypeFeatures("Alt R", "ss08"),
    MakeOpenTypeFeatures("Schoolbook Set", "ss09"),
    MakeOpenTypeFeatures("Round Punctuation", "ss10"),
    MakeOpenTypeFeatures("Small Symbols", "ss11"),
  ],
  // These are the open type features that will be filtered and displayed on the frontend and will be located on the bottom right of the typetester.
  openTypeFeaturesFiltered: [
    "ss01",
    "ss02",
    "ss03",
    "ss04",
    "ss05",
    "ss06",
    "ss07",
    "ss08",
    "ss09",
    "ss10",
    "ss11",
  ],
  // The path to the variable font file.
  // Note that the variable font file should be located in the same directory as the static font files and named the same, but with "VF" appended to the name.
  variable: `/fonts/${name}/${name}VF`,
  // The font families that are available in this font family.
  fontFamilies: [
    {
      // The distinction between StyleName, StyleId and StyleStretch is necessary for the shop,
      // as its needed to calculate the correct price, bundles etc. See Waldenburg for an example.
      styleName: "Regular",
      styleId: 1,
      styleStrech: "regular",
      weights: [
        // The MakeFontFamily function creates a font family object.
        // The parameters are as follows:
        // name             The name of the font family.
        // weight           The weight of the font family.
        //                  Use FontGauntlet to find the correct weight value.
        // readableWeight   The readable weight of the font family.
        //                  Used in the frontend, e.g. in the typetester dropdown.
        //                  IMPORTANT: The naming here is used as a path. So the actual font files should be named accordingly.
        //                  E.g. KMR-Melange-Grotesk-ExtraBlackItalic. Spaces will be replaced by no space.
        // fontStretch      The font stretch of the font family.
        //                  E.g. "condensed" or "semi-condensed". Default is "regular".
        // fontStyle        The font style of the font family.
        //                  E.g "italic". Default is "regular".
        // isEssential      Indicates if the font family is essential, as used in the shop. Default is false.

        MakeFontFamily(name, 50, "Hairline", "regular", "regular"),
        MakeFontFamily(name, 50, "Hairline Italic", "regular", "italic"),
        MakeFontFamily(name, 100, "Thin", "regular", "regular"),
        MakeFontFamily(name, 100, "Thin Italic", "regular", "italic"),
        MakeFontFamily(name, 200, "Extra Light", "regular", "regular"),
        MakeFontFamily(name, 200, "Extra Light Italic", "regular", "italic"),
        MakeFontFamily(name, 300, "Light", "regular", "regular", true),
        MakeFontFamily(name, 300, "Light Italic", "regular", "italic", true),
        MakeFontFamily(name, 350, "Semi Light", "regular", "regular"),
        MakeFontFamily(name, 350, "Semi Light Italic", "regular", "italic"),
        MakeFontFamily(name, 400, "Regular", "regular", "regular", true),
        MakeFontFamily(name, 400, "Italic", "regular", "italic", true),
        MakeFontFamily(name, 430, "Book", "regular", "regular"),
        MakeFontFamily(name, 430, "Book Italic", "regular", "italic"),
        MakeFontFamily(name, 500, "Medium", "regular", "regular"),
        MakeFontFamily(name, 500, "Medium Italic", "regular", "italic"),
        MakeFontFamily(name, 600, "Semi Bold", "regular", "regular"),
        MakeFontFamily(name, 600, "Semi Bold Italic", "regular", "italic"),
        MakeFontFamily(name, 700, "Bold", "regular", "regular", true),
        MakeFontFamily(name, 700, "Bold Italic", "regular", "italic", true),
        MakeFontFamily(name, 800, "Extra Bold", "regular", "regular"),
        MakeFontFamily(name, 800, "Extra Bold Italic", "regular", "italic"),
        MakeFontFamily(name, 900, "Black", "regular", "regular"),
        MakeFontFamily(name, 900, "Black Italic", "regular", "italic"),
        MakeFontFamily(name, 950, "Extra Black", "regular", "regular"),
        MakeFontFamily(name, 950, "Extra Black Italic", "regular", "italic"),
      ],
    },
  ],
};

// Dont forget to export the font family object.
module.exports = { Melange };
