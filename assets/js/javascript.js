const img1 = document.querySelector("#img1");

img1.addEventListener("click", function () {
  const image = document.getElementById("img1");
  const currentBorderStyle = window.getComputedStyle(image).border;

  if (
    currentBorderStyle === "none" ||
    currentBorderStyle === "0px none rgb(0, 0, 0)" ||
    currentBorderStyle === ""
  ) {
    image.style.border = "2px solid #FF1700";
  } else {
    image.style.border = "none";
  }
});

// tema 2

const saleButton = document.querySelector(".sale");

saleButton.addEventListener("click", function () {
  const num1 = document.querySelector("#godHand2").value;
  const num2 = document.querySelector("#godHand3").value;
  const num3 = document.querySelector("#godHand4").value;
  const num4 = document.querySelector("#godHand5").value;

  const total = +num1 + +num2 + +num3 + +num4;

  if (total <= 10) {
    document.querySelector("#sumaTotal").innerHTML =
      "Llevas " + total + " stickers";
  } else {
    document.querySelector("#sumaTotal").innerHTML =
      "Llevas demasiados stickers";
  }
});

// tema 3

// const uno = document.querySelector("#uno");
// const dos = document.querySelector("#dos");
// const tres = document.querySelector("#tres");
// const check = document.querySelector("#button[data-text]");

// check.addEventListener("click", function () {
//   const selectedValueUno = uno.value;
//   const selectedValueDos = dos.value;
//   const selectedValueTres = tres.value;

// if (
//   selectedValueUno === "7" &&
//   selectedValueDos === "1" &&
//   selectedValueTres === "4"
// ) {
//   document.querySelector("#check1").innerHTML = "Password 1 correcto";
//   document.querySelector("#check2").innerHTML = "";
//   document.querySelector("#check3").innerHTML = "";
// } else if (
//   selectedValueUno === "9" &&
//   selectedValueDos === "1" &&
//   selectedValueTres === "1"
// ) {
//   document.querySelector("#check2").innerHTML = "";
//   document.querySelector("#check2").innerHTML = "Password 2 correcto";
//   document.querySelector("#check2").innerHTML = "";
// } else {
//   document.querySelector("#check3").innerHTML = "";
//   document.querySelector("#check3").innerHTML = "";
//   document.querySelector("#check3").innerHTML = "Password incorrecto";
// }

// });

const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");
const tres = document.querySelector("#tres");
const check = document.querySelector("button[data-text]");

check.addEventListener("click", function () {
  const selectedValueUno = uno.value;
  const selectedValueDos = dos.value;
  const selectedValueTres = tres.value;

  const check1 = document.querySelector("#check1");
  const check2 = document.querySelector("#check2");
  const check3 = document.querySelector("#check3");

  check1.innerHTML = "";
  check2.innerHTML = "";
  check3.innerHTML = "";
  if (
    selectedValueUno === "7" &&
    selectedValueDos === "1" &&
    selectedValueTres === "4"
  ) {
    check1.innerHTML = "Password 1 correcto";
  } else if (
    selectedValueUno === "9" &&
    selectedValueDos === "1" &&
    selectedValueTres === "1"
  ) {
    check2.innerHTML = "Password 2 correcto";
  } else {
    check3.innerHTML = "Password incorrecto";
  }
});
