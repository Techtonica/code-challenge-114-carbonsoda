// ### Flattening
//
// Use the existing Array \`reduce\` method in combination with the \`concat\` method to “flatten”an array of arrays into a single array that has all the elements of the original arrays.
// You must name the function "flatten".

// e.g.
//
// ```
// let a = [[1,2],[3,4],[5,6,7]];
// ```
//
// ```
// flatten(a);
// ```
//
// ```
// // result is:
// ```
//
// ```
// // [1,2,3,4,5,6,7]
// ```
//
// Bonus: make it work even with a nested array like:
//
// ```
// let nested = [[1,2],[3, [4, 5]], [6], 7]
// ```
//
// ```
// flatten(nested);
// ```
//
// ```
// // [1,2,3,4,5,6,7]
// ```

// Recursive flattener
function flatten(array){
  if(! Array.isArray(array)){
    return array;
  }
  let flat = array.reduce((accum, currVal) =>
    accum.concat(flatten(currVal)), []);
  return flat;
}

// // This one also works, but is complex + hard to read
// function flatter(inputArray) {
//   // formats each element in array  
//   let flatmethod = function(elem){
//     return Array.isArray(elem) 
//     ? elem.flat(Infinity) // flatten any possible subarrays
//     : elem;
//   };
//   let flat = inputArray.reduce((accum, currVal) =>
//     accum.concat(flatmethod(currVal)), []);
//   return flat;
// }

module.exports = flatten;
