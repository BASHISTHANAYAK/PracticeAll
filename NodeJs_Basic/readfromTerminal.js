// Reading/ accessing from terminal
const readLine = require("readline");
// console.log("readLine-", readLine);

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("rl-", rl);
