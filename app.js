const cookieDisplay = document.getElementById("cookieDisplay");
const cpsCounter = document.getElementById("cpsCounter");
const cookieImage = document.getElementById("cookie");
const shopUpgrades = document.getElementById("shop");

let state = localStorage.getItem("state");
if (state) {
  state = JSON.parse(state);
} else {
  state = {
    cookieCount: 0,
    cps: 1,
  };
}

setInterval(function () {
  state.cookieCount += state.cps;
  cpsCounter.textContent = "CPS: " + state.cps;
  cookieDisplay.textContent = "Cookies Collected: " + state.cookieCount;
  localStorage.setItem("state", JSON.stringify(state));
  console.log(state.cookieCount);
}, 1000);

cookieImage.addEventListener("click", function () {
  state.cookieCount++;
  cookieDisplay.textContent = "Cookies Collected: " + state.cookieCount;
});

async function fetchUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const upgrades = await response.json();

  upgrades.forEach(function (upgrade) {
    console.log(upgrade.id, upgrade.name, upgrade.cost, upgrade.increase);
    let shopItem = document.createElement("div");
    const name = document.createElement("p");
    const cost = document.createElement("p");
    const increase = document.createElement("p");
  });
}
fetchUpgrades();
