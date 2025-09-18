const cookieDisplay = document.getElementById("cookieDisplay");
const cpsCounter = document.getElementById("cpsCounter");
const cookieImage = document.getElementById("cookie");

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
