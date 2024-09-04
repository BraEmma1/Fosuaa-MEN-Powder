document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    if (menuIcon && navMenu) {
        menuIcon.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    } else {
        console.error("Menu icon or nav menu not found in the DOM.");
    }
});


console.log("hello");