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
