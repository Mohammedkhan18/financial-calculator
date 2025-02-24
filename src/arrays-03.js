/**
 * Returns the sum of all numbers in an array.
 * @param {Array<number>} arr - An array of numbers.
 * @returns {number} The sum.
 */
function addUpArrayElements(arr) {
  let totalSum = 0;

  arr.forEach(function (num) {
    totalSum += num;
  })

  return totalSum;


}

