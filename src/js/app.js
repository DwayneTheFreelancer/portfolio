"use strict";

//  MOBILE HEADER

var button = document.getElementById("button-popup");
var links = document.querySelector(".mobile-links");
links.style.display = "none";

button.addEventListener("click", function () {
    if (links.style.display == "none") {
        $(".mobile-links").slideDown(1000);
    } else {
        $(".mobile-links").slideUp(1000);
    }
});

/**********************
    POP UP MODAL #1
**********************/

var popupButton = document.querySelector(".button-popup");
var closeButton = document.querySelector(".close-btn");

popupButton.addEventListener("click", function () {
    $(".window-popup").fadeIn(2000);
});

closeButton.addEventListener("click", function () {
    $(".window-popup").fadeOut(2000);
});