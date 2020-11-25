const originalArray = [1, 3, 2, 5, 10];

const evenNumbers = originalArray.filter(function (data) {
  if (data % 2 === 0) {
    return true;
  }
});
// const evenNumbers = originalArray.filter(data => data % 2 === 0);

console.log("even numbers " + evenNumbers);
console.log("original array " + originalArray);

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

// Complete the following

// 1. A filter that runs through the original array and creates a new array containing only its prime numbers (`primeArray`)
// Use the isPrime function provided to help with this
const primeArray = originalArray.filter(isPrime);

console.log("prime numbers " + primeArray)

// 2. A filter that runs through the original array and creates a new array containing only its numbers larger than 5(`moreThan5Array`)

// Your code here
const largerThanFive = originalArray.filter(function (num) { return num > 5 });

console.log("larger than five " + largerThanFive)
// Bonus: Use arrow functions as callbacks!

const doubledArray = originalArray.map(function (data) {
  return data * 2;
});

console.log("doubled array " + doubledArray);

// Complete the following

// 1. A map that triples the originalArray and sets the result equal to a new `tripledArray` array
const tripledArray = originalArray.map(data => data * 3);
console.log("tripled array " + tripledArray)
// 2. A map that takes the originalArray and returns a new array `oddOrEven`
// containing the text "even" if the number is even and the text "odd" if the number is odd
// i.e. using this map, the array [3, 1, 2, 4] should give us back ["odd", "odd", "even", "even"]
const oddOrEven = originalArray.map(num => (num % 2 === 0 ? "even" : "odd"));
console.log(oddOrEven)
// Your code here

// Bonus: Use arrow functions as callbacks!
