var dogColor = "color";

var dog = {
	name: "fido",
	age: 8,
	color: "brown",
};

dog.name = "Lucy";

var students = ["Alejandra", "Jesse", "Jessica", "Tamar"];

var trees = ["pine", "cypress", "hemlock"];
/*
 * replace cypress with maple
 * add walnut, cherry, poplar
 *
 */
trees[1] = "maple";
trees[3] = "walnut";
trees[4] = "cherry";
trees[5] = "poplar";

var string = "name";

string = "noName";

function doubleAndAddTax(price) {
  var result = price * 2;
  result = result * 1.07;
  return result;
}

// console.log(doubleAndAddTax(35));

function sentence(a, b) {
	return a + b;
}

var speech = sentence("Howdy ", "folks!");
console.log(speech);

function difference(a, b, c) {
	return (a - b) * c;
}

var result = difference(385, 142);
// console.log(result);







//

// Exercise 1
// The below function does not work. The variable twoPlusTwo gets set to
// undefined. Refactor the function to make it work.

function addNumbers(numberA, numberB) {
  console.log(numberA + numberB);
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo) // 4

// Exercise 2
// Write a function called yell that logs out an uppercase version of a string.

function yell() {

}

// Write a function called yell10 that uses your yell function to log out an
// uppercase version of a string 10 times.

function yell10() {

}

// Exercise 3
// Write a function called longest that returns the longest of two input strings
//or arrays.



// Exercise 4
// Write a function called isVowel that takes a character (i.e. a string of
// length 1) and returns true if it is a vowel, uppercase or lowercase. The
// function should return false if the character is not a vowel
