// function rollDice() {
//   const numOfDice = document.getElementById("numOfDice").value;
//   const btn = document.getElementById("btn");
//   const diceResult = document.getElementById("diceResult");
//   const pics = document.getElementById("pics");
//   const values = [];
//   const images = [];

//   for (let i = 0; i < numOfDice; i++) {
//     const value = Math.floor(Math.random() * 6) + 1;
//     values.push(value);
//     images.push(`<img src="assets/${value}.png" alt="Dice ${value}">`);
//   }
//   diceResult.textContent = `dice: ${values.join(" , ")}`;
//   pics.innerHTML = images.join("");
// }
