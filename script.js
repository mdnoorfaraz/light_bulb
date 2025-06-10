const btn = document.getElementById("toggleBtn");
const bulb = document.getElementById("bulb");
console.log(bulb)
document.addEventListener("click", toggleBlub);

function toggleBlub(e) {
  if (btn.textContent.includes("on")) {
    bulb.src = "imgs/off.jpg";
    textContent = "Turn off";
    console.log(e);
  } else {
    bulb.src = "imgs/on.jpg";
    textContent = "Turn on";
  }
}
