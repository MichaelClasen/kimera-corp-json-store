const MakeFontFamily = function(name, weight, readableWeight) {
  return {
    path: `${readableWeight}/${name}-${readableWeight}`,
    weight: weight,
    weightReadable: `${readableWeight}`,
  }
}

// const GetWeightReadable = function
// export { MakeFontFamily }
module.exports = { MakeFontFamily }