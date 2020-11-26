// 1. Convert this function from callback-based
//    to Promise-based. Hint: Check Activity 36
//    for an example of how to create a Promise

function waitFor(seconds) {
  return new Promise(function (resolve, reject) {
    if (isNaN(seconds) || seconds < 1) {
      return reject(Error("Parameter 'seconds' must be a positive number!"));
    }
// function waitFor(seconds, cb) {
//   if (isNaN(seconds) || seconds < 1) {
//     return cb(Error("Parameter 'seconds' must be a positive number!"));
//   }
    setTimeout(function () {
      resolve("Success!");
    }, seconds * 1000);
  });
}
//   setTimeout(function () {
//     cb(null, "Success!");
//   }, seconds * 1000);
// }


// 2. After converting the function above,
//    update this code to use the Promise
//    syntax. i.e: `.then(...).catch(...)`
waitFor(5)
  .then(function (msg) {
    console.log(`Done! Message: ${msg}`);
  })
  .catch(function (err) {
    console.log(`Uh oh, it broke! Message: ${err.message}`);
  })
  .finally(() => console.log("I'm FINALLY complete!"));
console.log("Goodbye Friends!");
// waitFor(2, function (err, msg) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(msg);
// })
