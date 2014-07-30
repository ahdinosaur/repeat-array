module.exports = function (input, n) {

  // start with empty array
  var result = [];

  // for each of n iterations
  for (var i = 0; i < n; i++) {
    
    // for each element in input,
    input.forEach(function (element) {
      
      // extend our result with input array
      result.push(element);

    })

  }

  // return result
  return result;
}
