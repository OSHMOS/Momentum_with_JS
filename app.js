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

if (isNaN(age)) {
  console.log("Please write a number");
  prompt("How old are you?");
} else {
  console.log(`You are ${age} years old.`);
}

// not for ~ => read if ~ once only