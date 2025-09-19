const cookieDisplay = document.getElementById("cookieDisplay");
const cpsCounter = document.getElementById("cpsCounter");
const cookieImage = document.getElementById("cookie");
const shopUpgrades = document.getElementById("shop");
const upgradeAmount = document.getElementById("upgradeAmount");

//saving the state to local storage

let state = localStorage.getItem("state");
if (state) {
  state = JSON.parse(state);
} else {
  state = {
    cookieCount: 0,
    cps: 1,
    autoClicker: 0,
    enhancedOven: 0,
    cookieFarm: 0,
    robotBaker: 0,
    cookieFactory: 0,
    magicFlour: 0,
    timeMachine: 0,
    quantumOven: 0,
    alienTech: 0,
    interdimBaker: 0,
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
    shopItem.classList.add("upgrade-item");
    const name = document.createElement("p");
    name.textContent = upgrade.name;
    const cost = document.createElement("span");
    cost.textContent = "Price: " + upgrade.cost;
    const increase = document.createElement("span");
    increase.textContent = "Increase Yield: " + upgrade.increase;
    const buyBtn = document.createElement("button");
    buyBtn.textContent = "Purchase Upgrade";

    buyBtn.addEventListener("click", function () {
      if (state.cookieCount >= upgrade.cost) {
        state.cookieCount -= upgrade.cost;
        state.cps += upgrade.increase;
        console.log("Upgrade Purchased: " + upgrade.name);
      } else {
        alert("INSUFFICIENT COOKIES! keep on a-clickin'");
      }
    });

    shopItem.appendChild(name);
    shopItem.appendChild(increase);
    shopItem.appendChild(cost);
    shopItem.appendChild(buyBtn);
    shopUpgrades.appendChild(shopItem);
  });
}
fetchUpgrades();
