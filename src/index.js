
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  for (let index in matrix){
      let subArr = index % 2 == 0 ? matrix[index] : matrix[index].reverse();
      res.push(...subArr);
  }
  return res;
}
