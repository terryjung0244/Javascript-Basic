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

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    
    newArr.push([...arr])
    
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));