const MakeFontFamily = function(name, weight, readableWeight, fontStretch = 'normal', fontStyle = 'normal') {
  return {
    path: `${readableWeight}/${name}-${readableWeight}`,
    weight: weight,
    weightReadable: `${readableWeight}`,
    fontStyle: fontStyle,
    fontStretch: fontStretch
  }
}

// const GetWeightReadable = function
// export { MakeFontFamily }
module.exports = { MakeFontFamily }