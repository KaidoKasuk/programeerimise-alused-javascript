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

//math = built in object that provides

// let x = 3.21;
// let y = 2;
// let z;

// z = Math.floor(x);
// z = Math.round(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x);
// z = Math.floor(x);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);

// console.log(Z);

// random number generator
// this is 1 to 6 very cool
// let randomNum = Math.floor(Math.random() * 6) + 1;

// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("myLabel");
// const label2 = document.getElementById("myLabel2");
// const label3 = document.getElementById("myLabel3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function () {
//   randomNum1 = Math.floor(Math.random() * max) + min;
//   randomNum2 = Math.floor(Math.random() * max) + min;
//   randomNum3 = Math.floor(Math.random() * max) + min;
//   Label1.textContent = randomNum1;
//   Label2.textContent = randomNum2;
//   Label3.textContent = randomNum3;
// };

//if statements
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = `You are TOO old`;
  } else if (age == 0) {
    resultElement.textContent = `You cant go were just born`;
  } else if (age < 0) {
    resultElement.textContent = `You cant be below 0`;
  } else if (age >= 18) {
    resultElement.textContent = `You are old enough`;
  } else {
    resultElement.textContent = `You must 18+`;
  }
};
// let time = 9;
// if (time < 12) {
//   console.log("good morining");
// } else {
//   console.log("good night");
// }

// let isStudent = false;

// if (isStudent) {
//   console.log("you are a stuent");
// } else {
//   console.log("You are not a student");
// }

// let age = 20;
// let license = false;

// if (age >= 16) {
//   console.log("you must old enough to drive");

//   if (license) {
//     consoele.log("you have your license");
//   } else {
//     consoele.log("you aint have license");
//   }
// } else {
//   console.log("you must 16+ to have license");
// }
