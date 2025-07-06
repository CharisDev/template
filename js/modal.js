"use strict";

// GENERAL DEFINED ELEMENTS
const overlay = document.querySelector(".modal-overlay");

///////////////////////////////////////////////////////
// MODAL GALLERY NR.1 - Dzīvoklis Rīgas Klusajā Centrā
///////////////////////////////////////////////////////

// ATLASU UN DEFINĒJU ELEMENTUS
// modālā galerija nr.1
const modal1 = document.getElementById("modal1");
// pirmā projekta bilde un pogas
const btnCloseModal1 = document.querySelector(".close-modal-1");
const imgOpenModal1 = document.querySelector(".project1");
const btnOpenModal1 = document.querySelector(".modal-btn-1");

// FUNKCIJA, LAI ATVĒRTU MODĀLO GALERIJU
const openModal1 = function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

imgOpenModal1.addEventListener("click", openModal1);
btnOpenModal1.addEventListener("click", openModal1);

// FUNCKIJA, LAI AIZVĒRTU MODĀLO GALERIJU
const closeModal1 = function () {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal1.addEventListener("click", closeModal1);
overlay.addEventListener("click", closeModal1);

// lai aizvērtu modālo ar 'escape' taustiņu
// when it doesn't contain the class 'hidden' it means that it's visible and that's the condition in which we want to close it
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal1();
    // to execute code in clodeModal we need to call it with parentheses
  }
});

///////////////////////////////////////////////////////
// MODAL GALLERY NR.2 - Dzīvojamā Māja Baložos
///////////////////////////////////////////////////////

// ATLASU UN DEFINĒJU ELEMENTUS
// modālā galerija nr.2
const modal2 = document.getElementById("modal2");
// pirmā projekta bilde un pogas
const btnCloseModal2 = document.querySelector(".close-modal-2");
const imgOpenModal2 = document.querySelector(".project2");
const btnOpenModal2 = document.querySelector(".modal-btn-2");

// FUNKCIJA, LAI ATVĒRTU MODĀLO GALERIJU
const openModal2 = function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

imgOpenModal2.addEventListener("click", openModal2);
btnOpenModal2.addEventListener("click", openModal2);

// FUNCKIJA, LAI AIZVĒRTU MODĀLO GALERIJU
const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal2.addEventListener("click", closeModal2);
overlay.addEventListener("click", closeModal2);

// lai aizvērtu modālo ar 'escape' taustiņu
// when it doesn't contain the class 'hidden' it means that it's visible and that's the condition in which we want to close it
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
    // to execute code in clodeModal we need to call it with parentheses
  }
});

///////////////////////////////////////////////////////
// MODAL GALLERY NR.3 - Klasisks dzīvoklis Rīgas centrā
///////////////////////////////////////////////////////

// ATLASU UN DEFINĒJU ELEMENTUS
// modālā galerija nr.3
const modal3 = document.getElementById("modal3");
// pirmā projekta bilde un pogas
const btnCloseModal3 = document.querySelector(".close-modal-3");
const imgOpenModal3 = document.querySelector(".project3");
const btnOpenModal3 = document.querySelector(".modal-btn-3");

// FUNKCIJA, LAI ATVĒRTU MODĀLO GALERIJU
const openModal3 = function () {
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

imgOpenModal3.addEventListener("click", openModal3);
btnOpenModal3.addEventListener("click", openModal3);

// FUNCKIJA, LAI AIZVĒRTU MODĀLO GALERIJU
const closeModal3 = function () {
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal3.addEventListener("click", closeModal3);
overlay.addEventListener("click", closeModal3);

// lai aizvērtu modālo ar 'escape' taustiņu
// when it doesn't contain the class 'hidden' it means that it's visible and that's the condition in which we want to close it
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal3.classList.contains("hidden")) {
    closeModal3();
    // to execute code in clodeModal we need to call it with parentheses
  }
});
