// make a simple polyfill
let arr = [1, 3, 8, 9, 10];
// ***************************************************************

// copy/polyfill map functionality -
// Array.prototype.CopyMap = function (cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i], i, this));
//   }
//   return newArr;
// };

// let res = arr.CopyMap((el) => el * 10);
// console.log(res);

// ***************************************************************
//copy/polyfill of foreach - arr.forEach(function(el){})

// Array.prototype.myForEach = function (cb) {
//   for (let index = 0; index < this.length; index++) {
//     cb(this[index], index, this);
//   }
// };

// arr.myForEach(function (ele) {
//   console.log(ele+1);
// });

// ***************************************************************
//polyfill of filter

// Array.prototype.myFilter = function (cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     let receivefROMCB = cb(this[i], i, this);
//     if (receivefROMCB) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };

// console.log(arr.myFilter((el) => el % 2 !== 0));

// ***************************************************************

// polufill for reduce

Array.prototype.myReduce = function (cb, acc) {
  let receivefROMCB;
  for (let i = 0; i < this.length; i++) {
    if (!receivefROMCB) {
      receivefROMCB = cb(acc, this[i]);
    } else {
      receivefROMCB = cb(receivefROMCB, this[i]);
    }
  }
  return receivefROMCB;
};

let res = arr.myReduce(function (acc, cu) {
  return acc + cu;
}, 0);
console.log(res);
