var today = new Date();
var bg = document.getElementById("dark-mode-bg");
var words = document.getElementsByClassName("dark-mode-word");

if (today.getHours() >= 17) {
  console.log("night time");
  bg.style.backgroundColor = "#4C6079";
  for (let word of words) {
    word.style.color = "white";
  }
}