window.alert(
  "You are going to guess the number between 1 and 100 (both included)"
);
window.alert(
  "Program tells if your number was too high or too low, you have 5 guesses"
);

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let katsed = 4;
console.log(answer);
while (katsed > -1) {
  guess = window.prompt(`guess a number `);
  if (guess == answer) {
    window.alert("You have guessed the right number!");
    break;
  } else if (guess > answer) {
    window.alert(`too high, ${katsed} guesses remaining`);
    katsed--;
  } else if (guess < answer) {
    window.alert(`too low ${katsed} guesses remaining`);
    katsed--;
  } else {
  }
}
