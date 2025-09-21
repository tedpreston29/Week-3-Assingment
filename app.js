const cookieDisplay = document.getElementById("cookieDisplay");
const cpsCounter = document.getElementById("cpsCounter");
const cookieImage = document.getElementById("cookie");
const shopUpgrades = document.getElementById("shop");
const upgradesBought = document.getElementById("upgradesBought");

//saving the state to local storage and using if else statements for if user is new vs if they are returning.
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

//setting up the interval for cookies per second. Using state from local storage to save user cps and total cookies collected and linking it with .textContext to allow the value to be displayed.
setInterval(function () {
  state.cookieCount += state.cps;
  cpsCounter.textContent = "CPS: " + state.cps;
  cookieDisplay.textContent = "Cookies Collected: " + state.cookieCount;
  localStorage.setItem("state", JSON.stringify(state));
  console.log(state.cookieCount);
}, 1000);

// Added eventListener to allow a user to click on the cookie image and add 1 to the overall count per click and adding it to local storage (state.cookieCount)
cookieImage.addEventListener("click", function () {
  state.cookieCount++;
  cookieDisplay.textContent = "Cookies Collected: " + state.cookieCount;
});

// with AI help I'm adding another listener for a shrink effect on the cookie image. because I added a rotation animation on CSS, I couldn't get the shrink effect to work at the same time in CSS so I added it here.
cookieImage.addEventListener("mousedown", () => {
  cookieImage.style.transform = "scale(0.95)";
});
cookieImage.addEventListener("mouseup", () => {
  cookieImage.style.transform = "";
});

// async function for API upgrades. awai and fetch used to allow for full page loading if API is too large
async function fetchUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const upgrades = await response.json();

  // forEach loop created to loop through each upgrade and create element for each.
  upgrades.forEach(function (upgrade) {
    console.log(upgrade.id, upgrade.name, upgrade.cost, upgrade.increase);

    //shopItem.classList.add here so that I could potentially style each box differently.
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

    let upgradesBought =
      //event listener within forEach loop so that I do not have to create a new button per upgrade. checks local storage for price of upgrade and to see if I have enough to buy
      buyBtn.addEventListener("click", function () {
        if (state.cookieCount >= upgrade.cost) {
          state.cookieCount -= upgrade.cost;
          state.cps += upgrade.increase;
          console.log("Upgrade Purchased: " + upgrade.name);
        } else {
          alert("INSUFFICIENT COOKIES! keep on a-clickin'!");
        }
      });
    // appendChild to append to the DOM
    shopItem.appendChild(name);
    shopItem.appendChild(increase);
    shopItem.appendChild(cost);
    shopItem.appendChild(buyBtn);
    shopUpgrades.appendChild(shopItem);
  });
}
fetchUpgrades();
