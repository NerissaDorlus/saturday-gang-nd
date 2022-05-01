//classic for loop

const input = [1, 2, 3, 4, 5];

// const classicForLoop = (arr) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     //same as sum = sum + arr[i]
//   }
//   return sum;
// };((
// console.log("The classic for loop", classicForLoop(input))

// for of loop
const forOfSum = (arr) => {
  let sum = 0;
  //let num = arr[i]
  for (const num of arr) {
    sum = sum + num;
  }
  return sum;
};
console.log("The for of sum is", forOfSum(input));

const forInSum = (obj) => {
  let sum = 0;

  for (const property in obj) {
    sum += obj[property];
  }

  return sum;
};
const objInput = { a: 1, b: 2, c: 3, d: 4, e: 5 };
