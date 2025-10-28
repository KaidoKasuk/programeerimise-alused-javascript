let a;
let b;
let operator;
a = window.prompt("a = ?");
b = window.prompt("b = ?");
a = Number(a);
b = Number(b);

operator = window.prompt("a = + s = - m = * d = / e = ** r= %");

switch (operator) {
  case "a":
    alert(`${a} + ${b} = ${a + b}`);
    break;
  case "s":
    alert(`${a} - ${b} = ${a - b}`);
    break;
  case "m":
    alert(`${a} * ${b} = ${a * b}`);
    break;
  case "d":
    alert(`${a} / ${b} = ${a / b}`);
    break;
  case "e":
    alert(`${a} ** ${b} = ${a ** b}`);
    break;
  case "r":
    alert(`${a} % ${b} = ${a % b}`);
    break;
  default:
    console.log(`Unknown operation`);
}
