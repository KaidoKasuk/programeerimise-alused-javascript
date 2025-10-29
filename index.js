// // console.log("hello");
// // console.log("I like pizza");

// const { use } = require("react");

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
// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function () {
//   age = myText.value;
//   age = Number(age);

//   if (age >= 100) {
//     resultElement.textContent = `You are TOO old`;
//   } else if (age == 0) {
//     resultElement.textContent = `You cant go were just born`;
//   } else if (age < 0) {
//     resultElement.textContent = `You cant be below 0`;
//   } else if (age >= 18) {
//     resultElement.textContent = `You are old enough`;
//   } else {
//     resultElement.textContent = `You must 18+`;
//   }
// };
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

// // const myCheckBox = document.getElementById("myCheckBox");
// // const visaBtn = document.getElementById("visaBtn");
// // const mastercardBtn = document.getElementById("mastercardBtn");
// // const payPalBtn = document.getElementById("payPalBtn");
// // const mySubmit = document.getElementById("mySubmit");
// // const subResult = document.getElementById("subResult");
// // const paymentResult = document.getElementById("paymentResult");

// // mySubmit.onclick = function () {
// //   if (myCheckBox.checked) {
// //     subResult.textContent = `You are subscribed`;
// //   } else {
// //     subResult.textContent = `You are NOT subscribed`;
// //   }

// //   if (visaBtn.checked) {
// //     paymentResult.textContent = `visa`;
// //   } else if (mastercardBtn.checked) {
// //     paymentResult.textContent = `mastercard`;
// //   } else if (payPalBtn.checked) {
// //     paymentResult.textContent = `paypal`;
// //   } else {
// //     paymentResult.textContent = `You didnt choose payment`;
// //   }
// // };

//teranry condtion ? codeiftrue : codeiffalse
// // let age = 11;
// // let message = age >= 18 ? "your and an adult" : "your are an minor";

// // console.log(message);

// let time = 16;
// let greeting = time < 12 ? "good morning" : "good afternoon";
// console.log(greeting);

// // let isStudent = true;
// // let message = isStudent ? "you are an student" : "you are not a Student";
// // console.log(message);

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(
//   `Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`
// );

// // //SWITCHES//
// let day = "pizza";

// switch (day) {
//   case 1:
//     console.log("It is monday");
//     break;
//   case 2:
//     console.log("It is tuesday");
//     break;
//   case 3:
//     console.log("It is wednesday");
//     break;
//   case 4:
//     console.log("It is thursday");
//     break;
//   case 5:
//     console.log("It is friday");
//     break;
//   case 6:
//     console.log("It is saturday");
//     break;
//   case 7:
//     console.log("It is sunday");
//     break;

//   default:
//     console.log(`${day} is not right input`);
// }

// let testScore = 900;
// let letterGrade;

// switch (true) {
//   case testScore > 100:
//     letterGrade = "max 100";
//     break;
//   case testScore >= 90:
//     letterGrade = "5";
//     break;
//   case testScore >= 75:
//     letterGrade = "4";
//     break;
//   case testScore >= 50:
//     letterGrade = "3";
//     break;

//   case testScore < 50:
//     letterGrade = "2";
//     break;
//   default:
//     letterGrade = "Not a score";
// }
// console.log(letterGrade);

//string methods

// // // let fullName = "jah töötab";

// // // let firstName = fullName.slice(0, fullName.indexOf(" "));
// // // let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// // // console.log(firstName);

// // // console.log(lastName);

// // // const email = "villu@voco.ee";
// // // let username = email.slice(0, email.indexOf("@"));
// // // let extension = email.slice(email.indexOf("@") + 1, email.length);
// // // console.log(username);
// // // console.log(extension, email.length);

// let age = 22;
// console.log(username);
// username.charAt(0);
// console.log(username.charAt(0)); //.charAT võtab kindla märgi olenvat valitud
// console.log(username.length); //korjab stringi pikkuse
// console.log(username.trim()); //trimmerdab stringis spaceid maha
// console.log(username.concat(age)); //liidab muud väärtused (stringina)
// console.log(username.slice(1, 2)); //cuttib stringist mingi osa
// console.log(username.substr(1, 2)); //cuttib teistmoodi
// console.log(username.repeat(2)); //korrutab stringi
// console.log(username.isWellFormed()); // \on kahtlane

// let username = window.prompt("Enter your username");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let char = username.slice(1);
// char = char.toLowerCase();
// username = letter + char;

// let username = window.prompt("Enter your username");
// username =
//   username.trim().charAt(0).toUpperCase() +
//   username.trim().slice(1).toLowerCase();
// console.log(username);

// // // const temp = 2;

// // // if (temp <= 0 || temp > 30) {
// // //   console.log("The weather is BAD");
// // // } else {
// // //   console.log("the weather is GOOD");
// // // }

// const isSunny = false;
// if (!isSunny) {
//   console.log("it is not sunny");
// } else {
//   console.log("it is  sunny");
// }
// = regular
// == to if they are equal
// === equal and sama datatype

// // // const PI == 3.14

// // // if (PI == 3.14){
// // //   console.log("that is not PI")

// // // }
// // // else {
// // //   console.log("this is not PI")
// // // }

// let username = "";

// // while (username === "") {
// //   console.log("you didnt enter your name");
// // }

// // console.log(`hello ${username})`);

// while (username === "" || username === null) {
//   username = window.prompt("enter your username");
// }
// console.log(`hello ${username}`);

// let loggedIn = false;
// let username;
// let password;

// // while (!loggedIn) {
// //   username = window.prompt(`Enter your username`);
// //   password = window.prompt(`Enter your password`);

// //   if (username === "user" && password === "pass") {
// //     loggedIn = true;
// //     console.log("you are logged in");
// //   } else {
// //     console.log("Invalid pass or username");
// //   }
// // }

// for (let i = 0.2; i > 0; i -= 0.1) {
//   console.log(i);
// }

// console.log("happy new year");

// for (let i = 1; i <= 20; i++) { jätab ühe vahele
//   if (i == 13) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// //lopetab 13 juures ära
// for (let i = 1; i <= 20; i++) {
//   if (i == 13) {
//     break;
//   } else {
//     console.log(i);
//   }
// }

// function happyBirthday(username) {
//   console.log("happy brithday to you");
//   console.log("happy brithday to you");
//   console.log(`happy brithday dear ${username}`);
//   console.log("happy brithday to you");
// }
// happyBirthday("Brocode");

// function add(x, y) {
//   return (result = x + y);
// }
// function subtract(x, y) {
//   return (result = x - y);
// }
// console.log(ifEven(1));

// function ifEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isValidEmail(email){

// }
// console.log(isValidEmail("brocode@"));

function function1() {
  let x = 1;
  console.log(x);
}

function function1() {
  let x = 1;
  console.log(x);
}
