var a = "It is I JoJo";
var b = "It is I JoJo";
var c = a;
var d = "this should be false";


    if (a === b) {
        console.log("true")}
        else {
        console.log("false")
    }
// true

    if (a == b) {
        console.log("true")}
        else {
        console.log("false")
    }
// true
    
    if (a = b) {
        console.log("true")}
        else {
        console.log("false")
    }
// true
    
    if (c === b) {
        console.log("true")}
        else {
        console.log("false")
    }
// true

    if (c == b) {
        console.log("true")}
        else {
        console.log("false")
    }
// true

    if (c = b) {
        console.log("true")}
        else {
        console.log("false")
    }
// true
    
    if (d === b) {
        console.log("true")}
        else {
        console.log("false")
    }
// false

console.log("a === b " + (a === b))
console.log("a == b " + (a == b))
console.log("a = b " + (a = b))
console.log("a === d " + (a === d))

console.log("this is a test log")