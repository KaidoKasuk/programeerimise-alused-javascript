// // console.log("hello");
// // console.log("I like pizza");

// // window.alert("this is an alert");
// // window.alert("I love pizza");
// // // this is an comment cntrl k+c cntrl k+

// document.getElementById("myh1").textContent = "Hello";
// document.getElementById("p").textContent = "i love ng";

// let x;
// x = 100;
// console.log(x);
// let age = 25;
// console.log(age);
// let price = 10.99;
// console.log(price);
// let gpa = 3;
// console.log(gpa);
// console.log(`your age is ${age} years old`);

// let online = false;
// let forSale = true;
// let isStudent = true;

//variabale aka muutuja container aka kast that stores a value

// let fullName = "Giga chad";
// let age = 20;
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById(
//   "p3"
// ).textContent = `You are sudent equals ${isStudent}`;

//arithemic operators

// let students = 343;
//Sstudnets = students + 1;
//studnets = students ** 3;
//studnets = students / 2;
//students = students ** 2;
//students = students % 4;
//students += 2;
//students /= 3;

// students++;
// students--;
// console.log(students);

/* 
    operator precedence
1. parenthesis
2. exponents
3. multiplications & division & modulo
4. addition & subtraction
*/

// let result = 6 / 2 ** (2 + 5);
// console.log(result);

//how to get user input
// 1. easy way window prompt
// 2. PROFFESIONAL WAY html textbox

// let username = window.prompt("mis on sinu kasutajanimi");
// console.log(username);
// let username;

// document.getElementById("mySubmit").onclick = function () {
//   username = document.getElementById("myText").value;
//   document.getElementById("myh1").textContent = hello ${username}
// };

// let age = window.prompt("How old are you");
// age += 1;
// console.log(age, typeof age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const a variable that cant be changed

// let pi = 3.14159;
// let radius;
// let umbermoot;

// radius = window.prompt(`Enter the radius of cricle`);
// radius = Number(radius);

// umbermoot = 2 * pi * radius;

// console.log(umbermoot);
// const PI = 3.14;

// document.getElementById("mySubmit").onclick = function () {
//   radius = document.getElementById("myText").value;
//   radius = Number(radius);
//   umbermoot = 2 * PI * radius;
//   document.getElementById("myh3").textContent = umbermoot + "cm";
// };

const decreaeBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};
decreaeBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
