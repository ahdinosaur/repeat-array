module.exports = function (input, n) {

  // start with empty array
  var result = []

  // check n
  if (typeof n !== 'number') {
    throw new Error('n is not a number: ', n)
  }

  // for each of n iterations
  for (var i = 0; i < n; i++) {
    
    // extend our result with input array
    input.forEach(function (element) {
      result.push(element);
    })

  }

  // return result
  return result;
}
