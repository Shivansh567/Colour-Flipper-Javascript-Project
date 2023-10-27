const colours = ["white", "green", "red", "blue", "yellow", "black"];

const button = document.getElementById("btn");
const colour = document.querySelector(".color");

button.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colours[randomNumber];
  colour.textContent = colours[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colours.length);
}
