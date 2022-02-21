
// You should implement your task here.

module.exports = function towelSort (matrix) {
  debugger
  let result = [];
  if (matrix === undefined) {
    return result;
  } else if (matrix.length == 0){
    return result;
  } else {
    matrix.forEach((element, index) => {
      if (index%2 == 0){
        result = result.concat(element)
      } else {
        result = result.concat(element.reverse())
      }
    });
    return result;
  }
}
