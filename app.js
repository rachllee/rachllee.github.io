const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});

themeToggle.addEventListener("change", function() {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", themeToggle.checked);
});

const darkMode = localStorage.getItem("darkMode");
themeToggle.checked = darkMode === "true";

if (themeToggle.checked) {
    body.classList.add("dark-mode");
}

