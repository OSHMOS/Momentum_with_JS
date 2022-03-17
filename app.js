// function
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + ". I'm " + age + " years old");
}

sayHello("oshmos", 26);
sayHello("jsjsjsjsjs1019", 24);

function plus(a, b) {
  console.log(a + b);
}

function devide(a, b) {
  console.log(a / b);
}

plus(8, 60); // ordered >>
devide(98, 20);

const player = {
  name: "osh",
  sayHello: function (otherPersonName) {
    console.log(`Hello my name is ${otherPersonName}.`);
  }
};

console.log(player.name);
player.sayHello("oshmos");
