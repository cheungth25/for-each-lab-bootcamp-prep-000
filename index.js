function iterativeLog(array) {
  array.forEach(function callback(element, index, array) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = ["a", "b", "c", 1, 2, 3]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
