// Algandmed
const scores = [45, 88, 32, 99, 74, 50, 61, 92, 39];
let currentScores = [...scores]; // koopia, mida saab muuta

// -------------------------------------------------------------
// Viited DOM-ile
// -------------------------------------------------------------
const scoreList = document.getElementById("scoreList");
const result = document.getElementById("result");

const kpiCount = document.getElementById("kpi-count");
const kpiAvg = document.getElementById("kpi-avg");
const kpiTh = document.getElementById("kpi-th");

const countInput = document.getElementById("count");

// Funktsioon tulemuste kuvamiseks
function renderScores() {
  scoreList.innerHTML = "";
  currentScores.forEach((score) => {
    const item = document.createElement("p");
    item.textContent = score;
    scoreList.appendChild(item);
  });
}

// Kuvame, mitu elementi on massiivis
kpiCount.textContent = currentScores.length;

//Näita keskimist
function showAverage() {
  kpiAvg.textContent = (
    currentScores.reduce(sum) / currentScores.length
  ).toFixed(2);

  function sum(previous, next) {
    return previous + next;
  }
}

// lisa boonus
function addBonus() {
  const newScores = currentScores.map((score) => score + 5);
  currentScores = newScores;
  renderScores();
}
//filter 60 või suurem
function filterByThreshold() {
  const newScores = currentScores.filter((score) => score > 60);
  currentScores = newScores;
  renderScores();
}
//taasta algseis
function resetAll() {
  currentScores = [...scores];
  renderScores(currentScores);
  kpiAvg.textContent = "–";
}
//geneeri uued skoorid
function makeRandom() {
  const newScores = [];
  //korrutan counti random skooriga ja siis .push arraysse
  for (let i = 1; i <= countInput.value; i++) {
    makeRandomScores = Math.floor(Math.random() * 100) + 1;
    console.log(makeRandomScores);
    newScores.push(makeRandomScores);
  }
  kpiAvg.textContent = "–";
  currentScores = newScores;
  renderScores();
}
