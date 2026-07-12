let N = 15;

let circle = document.getElementById("circle");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  circle.style.left = "200px";
  circle.style.transition = "left 0.5s ease";
});

function randomColor() {
  return `hsl(${Math.random() * 360}, 70%, 60%)`;
}

setInterval(() => {
  circle.style.background = randomColor();
}, N * 1000);

if (N % 2 === 0) {
  circle.style.transition = `background-color ${(N % 5) * 0.3}s`;
} else {
  circle.style.animation = `move ${N * 0.2}s linear infinite`;
}
