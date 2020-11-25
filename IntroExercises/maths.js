const rounding = Math.round(3.14159261);
console.log(rounding);
// 3  rounds a number to the nearest whole number

const power = Math.pow(10, 3);
console.log(power);
// 1000  first number is the base number, second number is the exponent

const root = Math.sqrt(121);
console.log(root);
// 11  takes the square root of a number

const addwrong = "5" + "6";
console.log(addwrong);
// 56  add the numbers as strings

const addright = (5 + 6);
console.log(addright)
// 11  add the numbers as integers

var firstvar = process.argv[3];
var secondvar = process.argv[4];

var addfunction = function () {
    return (Number(firstvar)) + (Number(secondvar))
}

module.exports = {
    add: addfunction()
};

console.log(addfunction());