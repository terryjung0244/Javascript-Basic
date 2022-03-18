//Convert Celsius to Fahrenheit
// function convertToF(celsius) {
//     let fahrenheit = celsius * 9/5 + 32;
//     return fahrenheit;
// }

// console.log(convertToF(30));

//Reverse a String
function reverseString(str) {
    let splitString = str.split("");
    let reverseString = splitString.reverse("");
    let combineString = reverseString.join("");
  
    return combineString
  }
  
  console.log(reverseString("hello"));