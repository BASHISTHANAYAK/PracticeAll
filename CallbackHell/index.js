// a small example of callback hell
setTimeout(() => {
  console.log("1st log..");
  setTimeout(() => {
    console.log("2d log..");
    setTimeout(() => {
      console.log("3rd log..");
    }, 1000);
  }, 1000);
}, 1000);

// second way to reduce this hell
function delayLog() {
  return new Promise((resl) => {
    setTimeout(() => resl(), 1000);
  });
}
delayLog()
  .then(() => {
    console.log("1st log..");
    return delayLog();
  })
  .then(() => {
    console.log("2 log..");
    return delayLog();
  })
  .then(() => {
    console.log("3 log..");
  });

//// 3rd best way to reduce this hell
async function tryCat() {
  try {
    await delayLog();
    console.log("1st log..");
    await delayLog();
    console.log("2 log..");
    await delayLog();
    console.log("3 log..");
  } catch (error) {
    console.log(error);
  }
}
tryCat();
