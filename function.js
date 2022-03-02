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

// // function sample(...items) {
// //   console.log(items)
// // }

// // const array = [1, 2, 3, 4]

// // //without using 'Spread operator'
// // sample(array)
// // //[Array(4)]

// // //with using 'Spread operator'
// // sample(...array)
// // //(4) [1, 2, 3, 4]


// // multiply between 1 to 100
// // function multiplication(a, b) {
// //   let output = 1
// //   for (i = a; i <= b; i++) {
// //     output = output * i
// //   }
// //   return output
// // }

// // console.log(multiplication(1, 3))


// // const multiply = function (a, b) {
// //   let output = 1
// //   for (i = a; i <= b; i++) {
// //     output *= i
// //   }
// //   return output
// // }

// // console.log(multiply(1, 5))

// // const max = function(...items) {
// //   let output = items[0]
// //   for (const item of items) {
// //     if (output < item) {
// //       output = item
// //     }
// //   }
// //   return output
// // }

// // console.log(max(1, 2, 3, 4)) //(...items) -> It makes into array.


// // const max1 = function (items) {
// //   let output = items[0]
// //   for (const item of items) {
// //     if (output < item) {
// //       output = item
// //     }
// //   }
// //   return output
// // }

// // console.log(max1([1, 2, 3, 4]))

// const max = function (first, ...rests) {
//   let output //기본값을 선언해준후
//   let items  //기본값을 선언해준후

//   if (Array.isArray(first)) { //배열이냐 아니냐 true or false 
//     output = first[0] //배열이면 output에 first[0]값을 넣어라 1
//     items = first     // 배열이면 items에 first로 넣어라 2, 근데 여기선
//                       // (1, 2, 3, 4)가 아니니까, 다음 else if로 넘어간다.
//   } else if (typeof(first) === 'number') { // (1, 2, 3, 4)값을 typeof로 거쳐서, 
//                                           // 'number'이면 output과 items에 저장해라
//     output = first
//     items= rests
//   }
//   for (const data of items) {
//     if (output < data) {
//       output = data
//     }
//   }
//   return output
// }

// console.log(max([1, 2, 3, 4])) // 1
// console.log(max(1, 2, 3, 4)) // 2

const max = function(first, ...rests) {
  let output
  let items

  if (Array.isArray(first)) {
    output = first
    items = rests
  } else if (typeof(first) === 'number') {
    output = first
    items = rests
  } 
  for (const data of items) {
    if (output < data) {
      output = data
    }
  }
  return output
}

console.log(max([1, 2, 3, 4, 5])) //output of array
console.log(max(1, 2, 3, 4, 5)) //items of numbers