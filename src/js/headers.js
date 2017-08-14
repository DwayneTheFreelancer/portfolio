//  MOBILE HEADER

const button = document.getElementById("button-popup");
const links = document.querySelector(".mobile-links");
links.style.display = "none";

button.addEventListener("click", () => {
    if(links.style.display == "none") {
        $(".mobile-links").slideDown(1000);
    } else {
        $(".mobile-links").slideUp(1000);
    }
});



