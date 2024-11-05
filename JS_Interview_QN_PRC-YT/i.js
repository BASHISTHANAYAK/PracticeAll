// const a = {};
// const b = {
//   name: "tilak",
// };
// const c = {
//   name: "ram",
// };

// a[b] = {
//   name: "ankit",
// };

// a[c] = {
//   name: "rahul",
// };
// console.log(a.b);
// console.log(a[b]);

// ******

// let y = 0;
// let z = false;

// console.log(y == z);
// console.log(y === z);

// ******
// print a nan

// what will be its output
// console.log(NaN == NaN);
// console.log(NaN === NaN);

//************** */
// console.log(isNaN('ht'));
// console.log(Number.isNaN("4"));  ,

// *********
// let arr = [1, 2, 4, 5];

// let newArr = arr.map((ele) => {
//   return ele > 2;
// });

// console.log(newArr);

// ***********
// let arr = [100, 4, 1, 2, 4, 5];
// let count = 0;
// let newArr = arr.sort((a, b) => {
//   count++;
//   console.log(`a-${a},b-${b}-> ${count}`);
//   return a - b;
// });

// console.log(newArr);
// console.log(arr);
// [100, 4, 1, 2, 4, 5];

// *********************************************
// sorting arr
// let arr = [5, 656, 8, 8790, 78];

// arr.sort(function (a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(arr);

// shortcut method arr.sort((a,b)=>a-b)
// *********************************************
// shift
// let arr = [10, 3, 6, 8, 9];
// let res = arr.shift();
// arr.shift();
// console.log(arr);
// console.log(res);

// unshift
// let arr = [10, 3, 6, 8, 9, 4];
// arr.unshift(56);
// console.log(arr);
// console.log(res);

// *********************************************

// function currying is a technique to dive multiple arguments into each functions and each function returns a result so that we combine these results to achive a desired results.

// a simple function
// function multiplyNumbers(num1, num2) {
//   return num1 * num2;
// }

// convert a normal function to currying function

// function firstNum(a) {
//   return function secondNum(b) {
//     return a * b;
//   };
// }

// console.log(firstNum(3)(2));

// a normal usecase suppose we have a object and we want to extract its keys value by just providing its key's name insted of every time sending both obj name and key
// ex

// let myObj = {
//   name: "Bashistha",
//   age: 12,
//   state: "Odisha",
// };
// function objName(obj) {
//   return function keyName(key) {
//     return obj[key];
//   };
// }
// let getDetails = objName(myObj);
// console.log(getDetails("name"));
// console.log(getDetails("age"));

// infinate function currying

function infinateFun(a) {
  return function innerFun(b) {
    if (b !== undefined) {
      return infinateFun(a + b);
    } else {
      return a;
    }
  };
}
console.log(infinateFun(2)(3)());

// *********************************************
