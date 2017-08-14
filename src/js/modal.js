/**********************
    POP UP MODAL #1
**********************/

const popupButton = document.querySelector(".button-popup");
const closeButton = document.querySelector(".close-btn");

popupButton.addEventListener("click", () => {
    $(".window-popup").fadeIn(2000);
});

closeButton.addEventListener("click", () => {
    $(".window-popup").fadeOut(2000);
});