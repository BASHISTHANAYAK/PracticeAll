let obj = {
  normalFun: function () {
    console.log("this in normalFun-", this);
  },
  arrowFun: () => {
    console.log("this in arrowFun-", this);
  },
};
obj.normalFun();
obj.arrowFun();

//
window.name = "masai";
const person = {
  name: "Alice",
  regularFunction: function () {
    console.log("Regular function name:", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow function name:", this.name);
  },
};

person.regularFunction(); // Regular function: Alice
person.arrowFunction(); // Arrow function: undefined (or empty string in some cases)
console.log("window-", window);
console.log("doc-", document);




