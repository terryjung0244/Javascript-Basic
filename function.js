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

// function isLeafYear(year) {
//   return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
// } 

// console.log(`Is it leaf year in 2022? ${isLeafYear(2022)}`)


// //sum between 1 to 100
// function sumAll(a, b) { //name of function(parameter, parameter2)
//   let output = 0; //Initial value
//   for (i = a; i <= b; i++) {
//     output += i
//   }
//   return output
// }

// console.log(sumAll(1, 100));

//multiply between 1 to 100
// function multiplication(a, b) {
//   let output = 1
//   for (i = a; i <= b; i++) {
//     output = output * i
//   }
//   return output
// }

// console.log(multiplication(1, 3))

// const min = function (array) {
//   let output = array[0]
//   for (const value of array) {
//     if (output < value) {
//       output = value
//     }
//   }
//   return output
// }

// // console.log(min([22, 33, 44, 55, 66]))


// const max = function (array) {
//   let output = array[0]
//   console.log(array[0])
//   for (const value of array) {  
    
//     if (output < value) {
//       output = value
      
//     } 
//   }
//   return output
// }
// console.log(max([12,523,545,231,753,23,21]))

// console.clear;

// //rest parameter
// function onClick(...parameters) {

// }

// console.clear;

// function sample(...items) { //make array using by (...items)
//   console.log(items)
// }
// sample(1, 2)
// sample(1, 2, 3)
// sample(1, 2, 3, 4)

// console.clear;

// const min = function (...items) {
//   let output = items[0]
//   for (const item of items) {
//     if(output > item) {
//       output = item
//     }
//   }
//   return output
// }

// console.log(min(1, 2, 3, 4, 5))

// console.clear;

// const findMax = function (...data) {
//   let output = data[0]
//   for (const value of data) {
//     if (output < value) {
//       output = value
//     }
//   }
//   return output
// }

// console.log(findMax(1, 2, 3, 4))

// function sample(a, b, ...c) {
//   console.log(a, b, c)
// }

// sample(1, 2)
// sample(1, 2, 3) // 1, 2, [3]
// sample(1, 2, 3, 4) // 1, 2, [3, 4]

// //spread operator

// //name of function: onclickfunc

// onclickfunc(...array)

// //example of spread operator 

// function sample(...items) {
//   console.log(items)
// }

// const array = [1, 2, 3, 4]

// //without using 'Spread operator'
// sample(array)
// //[Array(4)]

// //with using 'Spread operator'
// sample(...array)
// //(4) [1, 2, 3, 4]

