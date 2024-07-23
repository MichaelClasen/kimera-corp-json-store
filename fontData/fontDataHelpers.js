const MakePath = function (path) {
  return path.split(" ").join("");
};

/**
 * Creates a font family object.
 *
 * @param {string} name - The name of the font family.
 * @param {number} weight - The weight of the font family.
 * @param {string} readableWeight - The readable weight of the font family.
 * @param {string} [fontStretch="normal"] - The font stretch of the font family. Default is "normal".
 * @param {string} [fontStyle="normal"] - The font style of the font family. Default is "normal".
 * @param {boolean} [isEssential=false] - Indicates if the font family is essential. Default is false.
 * @returns {object} The font family object.
 */
const MakeFontFamily = function (
  name,
  weight,
  readableWeight,
  fontStretch = "normal",
  fontStyle = "normal",
  isEssential = false
) {
  return {
    path: MakePath(`${name}-${readableWeight}`),
    weight: weight,
    weightReadable: `${readableWeight}`,
    fontStyle: fontStyle,
    fontStretch: fontStretch,
    ...(isEssential && { isEssential: true }),
  };
};

const MakeOpenTypeFeatures = function (label, value) {
  return {
    label: label,
    value: value,
  };
};

module.exports = { MakeFontFamily, MakeOpenTypeFeatures };
