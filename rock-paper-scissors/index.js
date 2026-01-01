const valikud = ["kivi", "paber", "käärid"];

const mängijaKuva = document.getElementById("mängijaKuva");
const arvutiKuva = document.getElementById("arvutiKuva");
const tulemuseKuva = document.getElementById("tulemuseKuva");
const mängijaSkooriKuva = document.getElementById("mängijaSkoor");
const arvutiSkooriKuva = document.getElementById("arvutiSkoor");
let mängijaSkoor = 0;
let arvutiSkoor = 0;

function mängi(mängijaValik) {
  const arvutiValik = valikud[Math.floor(Math.random() * 3)];
  console.log(arvutiValik);
  let tulemus = "";

  if (mängijaValik === arvutiValik) {
    tulemus = "Jäid Viiki!";
  } else {
    switch (mängijaValik) {
      case "kivi":
        tulemus = arvutiValik === "käärid" ? "Sina Võitsid!" : "Sina Kaotasid!";
        break;
      case "käärid":
        tulemus = arvutiValik === "paber" ? "Sina Võitsid!" : "Sina Kaotasid!";
        break;
      case "paber":
        tulemus = arvutiValik === "kivi" ? "Sina Võitsid!" : "Sina Kaotasid!";
        break;
    }
  }

  mängijaKuva.textContent = `MÄNGIJA: ${mängijaValik}`;
  arvutiKuva.textContent = `ARVUTI: ${arvutiValik}`;
  tulemuseKuva.textContent = tulemus;

  tulemuseKuva.classList.remove("punane", "roheline");

  switch (tulemus) {
    case "Sina Võitsid!":
      tulemuseKuva.classList.add("roheline");
      mängijaSkoor++;
      mängijaSkooriKuva.textContent = mängijaSkoor;

      break;
    case "Sina Kaotasid!":
      tulemuseKuva.classList.add("punane");
      arvutiSkoor++;
      arvutiSkooriKuva.textContent = arvutiSkoor;
      break;
  }
}
