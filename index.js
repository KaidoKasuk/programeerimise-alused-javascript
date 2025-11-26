// // console.log("hello");
// // console.log("I like pizza");

// const { use } = require("react");

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

// function function1() {
//   let x = 1;
//   console.log(x);
// }

// function function1() {
//   let x = 1;
//   console.log(x);
// }

// let fruits = ["apple", "orange", "banana", "coconut"];

// // fruits.push("coconut");
// // // fruits.shift();
// // // fruits.unshift();
// // fruits.pop();
// // let numOfFruits = fruits.length;
// // let index = fruits.indexOf("mango");
// // console.log(index);

// // for (let i = fruits.length - 1; i >= 0; i--) {
// //   console.log(fruits[i]);
// // }
// fruits.sort().reverse();
// for (let fruit of fruits) {
//   console.log(fruit);
// }
////easyyyyyyyyy but above examples needs extra learning
// let numbers = [1, 2, 3, 4];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(minimum);

// let username = "Bro Code";

// // let letters = [...username].join("  "); // very cool! :D
// let letters = [...username].join("");
// console.log(letters);

//

// let fruits = ["apple", "orange", "banana", "coconut"];
// let newFruits = ["potato"];
// arrays
// let foods = [...fruits, ...newFruits, "carrot"];
// console.log(foods);

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "sushi";

// function openfridge(...foods) {
//   console.log(foods);
// }
// function getFood(...foods) {
//   return foods;
// }
// openfridge(food1, food2, food3);

// const foods = getFood(food1, food2, food3);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }
// const total = sum(1, 2, 3, 4);
// console.log(`Your total is ${total}`);

// function getAvarage(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }
// const total = getAvarage(70, 80, 90);
// console.log(`avarage is ${total}`);

// function combineString(...strings) {
//   return strings.join(" ");
// }

// const fullName = combineString("Mr", "spongebob", "the", "3rd");

// console.log(fullName);

// hello(leave);

// function hello(callback) {
//   console.log("hello");
//   callback();
// }

// function wait() {
//   console.log("hello");
// }
// function leave() {
//   console.log("leave");
// }

// function goodbye() {
//   console.log("goobye");
// }

// sum(displayPage, 1, 2);
// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function displayConsole(result) {
//   console.log = x + y;
// }

// function displayPage(result) {
//   document.getElementById("myId").textContent = result;
// }

// forEach()
//array.ForEach(callback) element, index, arrays on võimalused

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(double);
// numbers.forEach(display);

// // function double(element, index, array) {
// //   array[index] = element * 2;
// // }

// // function trimple(element, index, array) {
// //   array[index] = element * 3;
// // }

// function double(element, index, array) {
//   array[index] = Math.pow(element, 2); //power of 2
// }

// function display(element) {
//   console.log(element);
// }

// // let fruits = ["apple", "orange", "banana", "coconut"];

// // fruits.forEach(upperCase);
// // fruits.forEach(display);

// // function upperCase(element, index, array) {
// //   array[index] = element.toUpperCase();
// // }

// // function display(element) {
// //   console.log(element);
// // }

// // let fruits = ["apple", "orange", "banana", "coconut"];
// // fruits.forEach(capitalize);
// // fruits.forEach(display);
// // // function upperCase(element, index, array) {
// // //   array[index] = element.toUpperCase();
// // // }

// // function capitalize(element, index, array) {
// //   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// // }

// // function display(element) {
// //   console.log(element);
// // }

//.map sama mis ForEach aga outputib array

// // // // const numbers = [1, 2, 3, 4, 5];
// // // // const squere = numbers.map(squere);
// // // // const cubes = numbers.map(cube);
// // // // console.log(squere);

// // // // function squere(element) {
// // // //   return Math.pow(element, 2);
// // // // }

// // // // function cube(element) {
// // // //   return Math.pow(element, 1);
// // // // }

// const students = ["kiire", "vaaa", "kiirus"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);

// console.log(studentsLower);

// function upperCase(element) {
//   return element.toUpperCase();
// }
// console.log(studentsLower);
// function lowerCase(element) {
//   return element.toLowerCase();
// }
// const dates = ["2025-02-02", "2024-02-02", "2023-02-02"];
// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element) {
//   const parts = element.split("-");
//   return `${parts[1]}.${parts[2]}{${parts[0]}`;
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(oddNums);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOdd(element) {
//   return element % 2 !== 0;
// }

// const age = [16, 17, 18, 19, 20, 60];

// const adult = age.filter(isAdult);

// console.log(adult);

// function isAdult(element) {
//   return element >= 18 == 1;
// }
// const fruits = ["apple", "orange", "banana", "coconut", "kiwi"];
// const long = fruits.filter(getShortWords);

// console.log(long);

// function getShortWords(element) {
//   return element.length >= 6 == 1;
// }

//REDUCE

// const prices = [4, 2, 2, 1, 3, 20, 22];
// const total = prices.reduce(sum);

// console.log(total.toFixed(2));

// function sum(accumilator, element) {
//   return accumilator + element;
// }

// const grades = [75, 50, 90, 80, 65, 95];
// const minimum = grades.reduce(getMin);
// const maximum = grades.reduce(getMax);

// console.log(maximum);

// function getMax(accumilator, element) {
//   return Math.max(accumilator + element);
// }

// function getMin(accumilator, element) {
//   return Math.(accumilator + element);
// }
//
//

//
//
// function expressions

// function hello() {
//   console.log("hello");
// }

// const hello = function () {
//   console.log("hello");
// };

// setTimeout(useCallback, 3000);

// setTimeout(function () {
//   console.log("hello");
// });

// const numbers = [1, 2, 3, 4, 5];
// const squeres = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });
// console.log(squeres);

// // // // const hello = () => console.log("hello");
// // // // hello();

// const hello = (name, age) => {
//   console.log(`hello ${name}`);
//   console.log(`You are ${age} years old`);
// };
// hello("Bro", 25);

// setTimeout(() => console.log("hello"));

// // const numbers = [1, 2, 3, 4, 5,6 ];
// //  squeres = numbers.map(element) => Math.pow(element, 2)

// //  console.log(squeres)

//OBJEKTID
// const person1 = {
//   firstname: "Spongebob",
//   lastname: "Squerepants",
//   age: 30,
//   isEmployed: true,
//   sayhello: function () {
//     console.log(`Hi i am ${this.firstname}`);
//   },
//   eat: function () {
//     console.log(`I am eating ${this.lastname}`);
//   },
// };

// const person2 = {
//   firstname: "Patric",
//   lastname: "Gigachad",
//   age: 50,
//   isEmployed: false,
//   sayhello: function () {
//     console.log("HELLO");
//   },
// };
// person1.sayhello();
// person1.eat();
// // // person1.sayhello();
// // // person2.sayhello();
// // // console.log(person1.firstname);
// // // console.log(person1.lastname);
// // // console.log(person1.age);
// // // console.log(person1.isEmployed);

// // // console.log(person2.firstname);
// // // console.log(person2.lastname);
// // // console.log(person2.age);
// // // console.log(person2.isEmployed);

// console.log(this);

// // constructor
// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.drive = function () {
//     console.log(`You drive the ${this.model}`);
//   };
// }
// const car1 = new Car("ford", "musthang", 2024, "red");
// const car2 = new Car("tesla", "s", 2022, "white");
// const car3 = new Car("Dodge", "charger", 2000, "yellow");
// console.log(car1.make);
// console.log(car2.make);
// car1.drive();

// classes

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`price: $ ${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }

// const salesTax = 0.05;
// const Product1 = new Product("shirts", 22.22);
// const Product2 = new Product("pants", 2222.22);

// Product1.displayProduct();

// const total = Product1.calculateTotal(salesTax);
// console.log(total);

// static //

// class mathutil {
//   static PI = 3.14;

//   static getDiameter(radius) {
//     return radius * 2;
//   }
//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }
//   static getArea(radius) {
//     return this.PI * radius * radius;
//   }
// }

// console.log(mathutil);
// console.log(mathutil.getDiameter(10));
// console.log(mathutil.getCircumference(10));
// console.log(mathutil.getArea(10));

// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }
//   sayHello() {
//     console.log(`Hello my name is ${this.username}`);
//   }
// }

// const user1 = new User("spongebob");
// const user2 = new User("Patric");
// const user3 = new User("Sandy");

// console.log(user1);
// console.log(User.userCount);
// user1.sayHello();

//inheritance

class Animal {
  alive = true;

  Eat() {
    console.log(`This ${this.name} is eating`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}
class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super();
    this.name = name;
    this.age = age;
    this.runSpeed = runSpeed;
  }

  //   name = "rabbit";
  //   alive = true;
  //   Eat() {
  //     console.log(`This ${this.name} is eating`);
  //   }

  //   sleep() {
  //     console.log(`This ${this.name} is sleeping`);
  //   }
  //   run() {
  //     console.log(`This ${this.name} is running`);
  //   }
}
// class Fish extends Animal {
//   constructor(name, age, runSpeed) {
//     super();
//     this.name = name;
//     this.age = age;
//     this.runSpeed = runSpeed;
//   }
//   name = "fish";
// }
// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super();
//     this.name = name;
//     this.age = age;
//     this.flySpeed = flySpeed;
//   }
//   name = "hawk";
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(hawk.alive);
// hawk.Eat();
// hawk.sleep();
// rabbit.run();

// super keyword//

// getters and setters

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("width must be a positive number");
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("height must be a positive number");
//     }
//   }

//   get width() {
//     return this._width;
//   }
//   get height() {
//     return this._height;
//   }

//   get area() {
//     return (this._width * this._height).toFixed(1);
//   }
// }

// const rectangle = new Rectangle(5, 3);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0)
      this._firstName = newFirstName;
    else {
      console.error("first name must be a non-empty string  ");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0)
      this._lastName = newLastName;
    else {
      console.error("Last name must be a non-empty string  ");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a non-negative number");
    }
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  get age() {
    return this._age;
  }
}

const person = new Person("Juhan", "Tamm", 2);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
