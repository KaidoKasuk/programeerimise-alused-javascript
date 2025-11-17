let toidukorv = [
  { name: "apple", quantity: 4 },
  { name: "banana", quantity: 2 },
  { name: "orange", quantity: 5 },
  { name: "milk", quantity: 1 },
  { name: "bread", quantity: 2 },
];
//1 sum
const sum = toidukorv.reduce((total, item) => total + item.quantity, 0);

console.log(sum);
//2 yogurt
toidukorv.push({ name: "yogurt", quantity: 3 });

//3 apple +3

const newApple = toidukorv.find((item) => item.name === "apple");

if (newApple) {
  newApple.quantity += 3;
} else {
  toidukorv.push({ name: "apple", quantity: 3 });
}
//4 remove banana

const banana = toidukorv.find((item) => item.name === "banana");

if (banana) {
  toidukorv.splice(toidukorv.indexOf(banana), 1);
} else {
}

//5 only names
const names = toidukorv.map((item) => item.name);
console.log(names);

//milk?

const milk = toidukorv.find((item) => item.name === "milk");
if (milk) {
  milkInArray = true;
} else {
  milkInArray = false;
}
console.log(`Is milk inside array: ` + milkInArray);
//sorting
toidukorv.sort((b, a) => a.quantity - b.quantity);

console.log(toidukorv);
