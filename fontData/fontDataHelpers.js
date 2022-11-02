const MakePath = function(path) {
  return path.split(" ").join("")
}

const MakeFontFamily = function(name, weight, readableWeight, fontStretch = 'normal', fontStyle = 'normal') {
  return {
    path: MakePath(`${readableWeight}/${name}-${readableWeight}`),
    weight: weight,
    weightReadable: `${readableWeight}`,
    fontStyle: fontStyle,
    fontStretch: fontStretch
  }
}

const MakeOpenTypeFeatures = function(label, value) {
  return {
    "label": label,
    "value": value
  }
}

// const GetWeightReadable = function
// export { MakeFontFamily }
module.exports = { MakeFontFamily, MakeOpenTypeFeatures }