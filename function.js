// const result = function () {
//   console.log('Hello')
//   console.log('Hello1')
//   console.log('Hello2')
// }

// result(); //call

// console.log(typeof result);
// console.clear;

// function f(x) {
//   return x * x
// }

// console.log(f(3))

// let multiply = function (x) {
//   return x * x
// }

// console.log(multiply(3))

// let isLeafYear = function (input) {
//   if(input % 4 === 0) {
//     console.log('Leaf Year')
//   } else if (input % 100 !== 0) {
//     console.log('Not leaf year')
//   } else if (input % 400 === 0) {
//     console.log('Leaf Year')
//   } else {
//     console.log('Normal Year')
//   }
// }

// isLeafYear(2022);

function isLeafYear(year) {
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
} 

console.log(`Is it leaf year in 2022? ${isLeafYear(2022)}`)

function sumAll(a, b) { //name of function(parameter, parameter2)
  let output = 0; //Initial value
  for (i = a; i <= b; i++) {
    output += i
  }
  return output
}

console.log(sumAll(1, 100));

