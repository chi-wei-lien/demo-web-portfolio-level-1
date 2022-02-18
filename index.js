var today = new Date();
var bg = document.getElementById("dark-mode-bg");
var navbar = document.getElementById("dark-mode-nav");
var words = document.getElementsByClassName("dark-mode-word");

if (today.getHours() >= 17) {
  console.log("night time");
  bg.style.backgroundColor = "#4C6079";
  for (let word of words) {
    word.style.color = "white";
  }
  navbar.classList.remove("navbar-light");
  navbar.classList.remove("bg-light");
  navbar.classList.add("navbar-dark");
  navbar.classList.add("bg-dark");
}