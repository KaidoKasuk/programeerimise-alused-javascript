function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const btn = document.getElementById("btn");
  const diceResult = document.getElementById("diceResult");
  const pics = document.getElementById("pics");
  const diceSum = document.getElementById("sum");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="assets/${value}.png" alt="Dice ${value}">`);
  }
  diceResult.textContent = `dice: ${values.join(" , ")}`;
  //.reduce liidab kõik numbrid ükshaaval mis on array "values" sees, nt 0+3 = 3 3+2= 5 jne
  diceSum.textContent = `Sum of ${numOfDice} dice: ${values.reduce(
    (number1, number2) => number1 + number2,
    0
  )}`;
  pics.innerHTML = images.join("");
}
