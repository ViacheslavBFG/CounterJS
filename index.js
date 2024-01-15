const minusNode = document.querySelector(".minus");
const counterNode = document.querySelector(".counter");
const plusNode = document.querySelector(".plus");
const resetNode = document.querySelector(".reset-counter");

minusNode.addEventListener("click", function () {
  counterNode.innerText = --counterNode.innerText;
});

plusNode.addEventListener("click", function () {
  counterNode.innerText = ++counterNode.innerText;
});

resetNode.addEventListener("click", function () {
  counterNode.innerText = 0;
});
