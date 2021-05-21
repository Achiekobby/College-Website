var menuOpen = document.getElementById("mobile-menu");
var navLinks = document.getElementById("nav-links");


menuOpen.addEventListener("click",()=>{
    navLinks.classList.toggle("toggle-nav");
    menuOpen.classList.toggle("fa-times");
});