// Conditionals
const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));
// false => age is number
// true => age is not number
// if (condition){
//   // condition === true
//   // condition has to be "boolean"
// } else {
//   // condition === false
// }

// operator &&
true && true === true
false && true === true
true && false === true
false && false === false

// operator ||
true || true === true
false || true === true
true || false === true
false || false === false

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
  prompt("How old are you?");
} else if (age < 18) {
  console.log("You're too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
}else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}

// not for ~ => read if ~ once only