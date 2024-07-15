const MakePath = function (path) {
  return path.split(" ").join("");
};

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
