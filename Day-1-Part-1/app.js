let count = document.querySelector(".count");
let Incre = document.querySelector(".incre");
let Decre = document.querySelector(".decre");

let counter = 0;

Incre.addEventListener("click", () => {
  counter++;
  count.innerText = counter;
});

Decre.addEventListener("click", () => {
  counter--;
  count.innerText = counter;
});
