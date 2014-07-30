module.exports = function (input, n) {

  // start with empty array
  var result = [];

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
