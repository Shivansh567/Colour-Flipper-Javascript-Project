const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const colour = document.querySelector(".color");

button.addEventListener("click", function () {
  let ans = "#";

  for (let i = 0; i < 6; i++) {
    ans += hex[getRandom()];
  }

  document.body.style.backgroundColor = ans;
  colour.textContent = ans;
});

function getRandom() {
  return Math.floor(Math.random() * hex.length);
}
