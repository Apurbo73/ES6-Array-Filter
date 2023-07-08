var array = [1, 2, 3, 4, 5, 6];
var result = array.filter((currentValue, index, arr) => {
  console.log(index);
  console.log(arr);
  return currentValue >= 2;
});
console.log(result);
