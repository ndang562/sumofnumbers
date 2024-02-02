function sumFor(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
function sumWhile(numbers) {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
} function sumRecursion(numbers, index = 0) {
  if (index === numbers.length) {
    return 0;
  }
  return numbers[index] + sumRecursion(numbers, index + 1);
}
function sumTheSimpleWay(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
const numbers = [1, 2, 3, 4, 5];

console.log(sumFor(numbers));

console.log(sumWhile(numbers));

console.log(sumRecursion(numbers));

console.log(sumTheSimpleWay(numbers));
