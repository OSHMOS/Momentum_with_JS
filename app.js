const hellos = document.getElementsByClassName("hello");
console.log(hellos);
hellos.innerText = "hello"; // many elements are not changed

const h1 = document.getElementsByTagName("h1");
console.log(h1);

const qs = document.querySelector(".hi h1"); // 99.98%
console.log(qs);
qs.innerText = "Hi!"; // change is in only one elements
