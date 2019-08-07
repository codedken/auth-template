const menuHamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-links");

menuHamburger.addEventListener('click', () => {
    if (navMenu.style.display === "none") {
        navMenu.style.display = "flex";
    } else {
        navMenu.style.display = "none";
    }
})