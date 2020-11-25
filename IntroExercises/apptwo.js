// console.log(process.argv);
// //   'C:\\Program Files\\nodejs\\node.exe',
// // 'C:\\Users\\Richard\\Desktop\\Code_Repo\\node-stradamus\\2ndapp'

// console.log("the process is" + process);
// // "the process is [object process]"

// console.log("argv prints: " .argv);
// //"undefined"

// console.log("progress.argv prints: " + process.argv)
// // progress.argv prints: C:\Program Files\nodejs\node.exe,C:\Users\Richard\Desktop\Code_Repo\node-stradode-stradamus\2ndapp    
// console.log(`Your Node binary is installed at: ${process.argv[0]}`);
//     // Your Node binary is installed at: C:\Program Files\nodejs\node.exe

// console.log(`The script you are running can be found at: ${process.argv[1]}`);
//     // The script you are running can be found at: C:\Users\Richard\Desktop\Code_Repo\node-stradamus\2ndapp

// $ node apptwo.js one two three four five 

// var a = "hello";
// var b = "world";
// var c = "it is";
// var d = "I";
// var e = "JoJo";

// console.log(process.argv, [0, 1, 2]);
// console.log(process.argv, [a, c, d, e]);
// console.log(process.argv, ["0a", "1a", "2a", "3a"]);
// console.log(process.argv, ["1"(a), "1"(b), "1"(c), "1"(d), "1"(e)]);
// console.log(process.argv, [4]);


// node apptwo.js 1 2 3
console.log("0 produces " + process.argv[0])
console.log("1 produces " + process.argv[1])
console.log("2 produces " + process.argv[2])
console.log("3 produces " + process.argv[3])
console.log("4 produces " + process.argv[4])
console.log("5 produces " + process.argv[5])

// PS C:\Users\Richard\Desktop\Code_Repo\node-stradamus> node apptwo it is I JoJo
// 0 produces C:\Program Files\nodejs\node.exe
// 1 produces C:\Users\Richard\Desktop\Code_Repo\node-stradamus\apptwo
// 2 produces it
// 3 produces is
// 4 produces I
// 5 produces JoJo
// PS C:\Users\Richard\Desktop\Code_Repo\node-stradamus> 

// console.log(process.argv[3])
// console.log(process.argv[4])
// argv[0] => node.exe
// argv[1] => ...index.js
// argv[2] => 1
// argv[3] => 2
// argv[4] => 3

// arguments passed from the command line are accessed by index
// console.log(process.argv[2]);

