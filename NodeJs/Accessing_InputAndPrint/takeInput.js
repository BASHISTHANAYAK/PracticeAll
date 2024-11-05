const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function

rl.question("enter your question:", (input) => {
  try {
    console.log("input-", typeof input, input);
  } catch (error) {
    console.log(error);
  }
  rl.close();
});
