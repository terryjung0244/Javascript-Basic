// function checkScope() {
//     let i = 'function scope';
//     if (true) {
//       let i = 'block scope';
//       console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
//   }

// const s = [5, 7, 2];
// function editInPlace() {
//   "use strict";
//   s[0] = 2;
//   s[1] = 5;
//   s[2] = 7;
// }
// editInPlace();

//Create Strings using Template Literals

// const person = {
//     name: "Zodiac Hasbro",
//     age: 56
// };

// const greeting = `Hello, my name is ${person.name}`
// console.log(greeting);

// //exercise

// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
    
//     const failureItems = [];
//     for (let i = 0; i < arr.length; i++) {
//       failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//     }
    
  
//     return failureItems;
//   }
  
//   const failuresList = makeList(result.failure);

//result.failure = arr.
//for문을 사용해서, failure안에 있는 3개의 엘레멘트를 나타냄.
//push를 사용해서, failureItems = [] 안에 엘레멘트를 넣는다.

//Write Concise Object Literal Declarations Using Object Property Shorthand
// //example
// const getMousePosition = (x, y) => ({ x, y });

// //exercise
// const createPerson = (name, age, gender) => {
    
//     return {
//       name,
//       age,
//       gender
//     };
    
//   };

// //Write Concise declarative Functions with ES6

// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//       this.gear = newGear;
//     }
//   };
  
//   bicycle.setGear(3);
//   console.log(bicycle.gear);


class Vegetable {
    constructor(name) {
      this.name = name
    }
  }
 
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'