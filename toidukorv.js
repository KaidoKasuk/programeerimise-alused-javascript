const toidukorv = [
  { name: "apple", quantity: 4 },
  { name: "banana", quantity: 2 },
  { name: "orange", quantity: 5 },
  { name: "milk", quantity: 1 },
  { name: "bread", quantity: 2 },
];
//1
const sum = toidukorv.reduce((total, item) => total + item.quantity, 0);

console.log(sum);
//2
toidukorv.push({ name: "yogurt", quantity: 3 });

//3 skull.emoji

console.log(toidukorv);
