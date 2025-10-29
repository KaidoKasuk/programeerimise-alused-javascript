const minNum = 1;
const maxNum = 3;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let guess = window.prompt("Guess a number");
let katsed = 5;
console.log(answer);
while (katsed > 1) {
  if (guess == answer) {
    guess = window.prompt("Guess a number");
    console.log("You guessed the right number!");
    break;
  } else if (guess > answer) {
    window.alert(`too high ${katsed}`);
    katsed--;
  } else if (guess < answer) {
    window.alert(`too low ${katsed}`);
    katsed--;
  } else {
  }
}
