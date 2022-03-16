// //test for console for live server.

// const onclickfunc = () => {
//   console.log("Hello")
// }

// onclickfunc()


// let simpleArray = ['one', 2, 'three', true, 'fall']

// console.log(simpleArray.length);

// const yourArray = ['Monteal', 34, false, 'Jelly', 'future']
// console.log(yourArray);
// console.log(yourArray.length)

// let ourArray = ["a", "b", "c"];
// let ourVariable = ourArray[2];

// console.log(ourVariable);

// console.log(ourArray);
// ourArray[0] = "z"
// console.log(ourArray)

// console.clear()

// let myArray = ["a", "b", "c", "d"];

// myArray[1] = "u"

// console.log(myArray);

// console.clear()

// //add Items to an Array with push() and unshift()

// //the push() method adds elements to the end of an array.
// //the unshift() method adds elements to the bessing of an array.

// let twentyThree = "23";
// let array = ["24", "25"];

// array.unshift("22", "23");
// console.log(array);

// array.push("26", "27");
// console.log(array);

// console.clear();

// function mixedNumbers(arr) {
 
//   arr.push(7, 'VIII', 9);
//   arr.unshift('I', 2, 'three')
  
//   return arr;
// }

// console.log(mixedNumbers(['IV', 5, 'six']));

// console.clear();

// //Remove items from an Array with pop() and shift()
// //pop(): removes an element from the end of an array.
// //shift(): removes an element from the beginning of an array.

// //example
// let greetings = ['whats up?', 'hello', 'see ya'];
// greetings.pop();
// console.log(greetings);

// greetings.shift();
// console.log(greetings);

// let popped = greetings.pop()
// console.log(popped); //hello

// //exercise

// function popShift(arr) {
//   let popped = arr.pop();
//   let shifted = arr.shift();
//   return [shifted, popped];
// }

// console.log(popShift(['challenge', 'is', 'not', 'complete']));

// console.clear();

// //Remove items Using splice()
// //splice() allows us to remove any number of consecutive elements
// //splice() can take up to 3 parameters. 

// //example
// let array0 = ['today', 'was', 'not', 'so', 'great'];

// array0.splice(2, 2);

// console.log(array0);

// console.clear();

// let array1 = ['I', 'am', 'feeling', 'really', 'happy'];
// let newArray = array1.splice(3, 2);

// console.log(newArray);

//exercise
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// arr.splice(0, 2)
// arr.splice(1, 1)
// arr.splice(1, 1)
// arr.splice(2, 2)
// console.log(arr);

// const arr1 = [2, 4, 5, 1, 7, 5, 2, 1];

// arr1.splice(1, 4);

// console.log(arr1);

//Add items using splice();
//example
// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// numbers.splice(startIndex, amountToDelete, 13, 14);
// console.log(numbers);

// //exercise
// function htmlColorNames(arr) {
  
//   arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
 
//   return arr;
// }

// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//Copy Array Items Using slice()
//We have created a new array by extracting elements from an existing array.
// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
// let todaysWeather = weatherConditions.slice(2, 4);

// console.log(todaysWeather);

// function forecast(arr) {
//   return arr.slice(2, 4)
// }

// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Copy an Array with the Spread Operator
//Spread Operator => ...

// let thisArray = [true, true, undefined, false, null];
// let thisArray = [...thisArray]

// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
    
//     newArr.push([...arr])
    
//     num--;
// //   }
// //   return newArr;
// // }

// // console.log(copyMachine([true, false, true], 4));

// // //Combine Arrays with the Spread Operator
// // let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

// // let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

// // console.log(thatArray);

// // function spreadOut() {
// //   let fragment = ['to', 'code'];
// //   let sentence = ['learning', ...fragment, 'is', 'fun']
// //   return sentence;
// // }

// // console.log(spreadOut());

// //Check for the presence of an element with indexof();

// // // let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

// // // console.log(fruits.indexOf('apples'));
// // // console.log(fruits.indexOf('peaches'));

// // // function quickCheck(arr, elem) {
// // //   return arr.indexOf(elem) >= 0 ? true : false
// // // }

// // // console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// // //for loop using push()

// // function greaterThanTen(arr) {
// //   let newArr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > 10) {
// //       newArr.push(arr[i])
// //     }
// //   }
// //   return newArr;
// // }

// // greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

// // console.clear()

// // function filteredArray(arr, elem) {
// //   let newArr = [];
  

// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (arr[i].indexOf(elem) == -1) {
      
// // //       newArr.push(arr[i]);
// // //     }
// // //   }

// // //   return newArr;
// // // }

// // // console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// // //Create complex multi-dimensional arrays
// // //example
// // let nestedArray = [
// //   ['deep'],
// //   [
// //     ['deeper'], ['deeper'] 
// //   ],
// //   [
// //     [
// //       ['deepest'], ['deepest']
// //     ],
// //     [
// //       [
// //         ['deepest-est?']
// //       ]
// //     ]
// //   ]
// // ];

// // nestedArray[2][1][0][0][0] = 'deeper still';

// // console.log(nestedArray[2])
// // console.log(nestedArray[2][1][0][0][0]);

// // //exercise
// // let myNestedArray = [
  
// //   ['unshift', false, 1, 2, 3, 'complex', 'nested'],
// //   ['loop', 'shift', 6, 7, 1000, 'method'],
// //   ['concat', false, true, 'spread', 'array',['deep']],
// //   ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
// //   ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
  
// // ];


// //Add Key-value pairs to JS objects
// //example
// const tekkenCharacter = {
//   player: 'Hwoarang',
//   fightingStyle: 'Tae Kwon Doe',
//   human: true
// };
// console.log(tekkenCharacter);

// tekkenCharacter.origin = 'South Korea';
// console.log(tekkenCharacter);

// tekkenCharacter['hair color'] = 'dyed orange';
// console.log(tekkenCharacter);

// //exercise
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28
// };

// foods['bananas'] = 13;
// foods['grapes'] = 35;
// foods['strawberries'] = 27;
// foods.price = 35

// console.log(foods);

// //Modify an object nested within an object
// //excercise

// let nestedObject = {
//   id: 28802695164,
//   date: 'December 31, 2016',
//   data: {
//     totalUsers: 99,
//     online: 80,
//     onlineStatus: {
//       active: 67,
//       away: 13,
//       busy: 8
//     }
//   }
// };

// nestedObject.data.onlineStatus.busy = 10;
// console.log(nestedObject);

// //exercise

// let userActivity = {
//   id: 23894201352,
//   date: 'January 1, 2017',
//   data: {
//     totalUsers: 51,
//     online: 42
//   }
// };
// userActivity.data.online = 45;

// console.log(userActivity);

//Access property names with bracket notation
//exercise
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  
  return foods[scannedItem]
  
}

console.log(checkInventory("apples"));