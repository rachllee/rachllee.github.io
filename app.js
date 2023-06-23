const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const themeToggle = document.querySelector('#theme-toggle');
const root = document.documentElement;

const setTheme = (theme) => {
    if (theme === 'dark') {
        themeToggle.checked = true;
        root.setAttribute('data-theme', 'dark');
    } else {
        themeToggle.checked = false;
        root.removeAttribute('data-theme');
    }
    
};

const toggleTheme = () => {
    if (themeToggle.checked) {
        localStorage.setItem('theme', 'dark');
        root.setAttribute('data-theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
        root.setAttribute('data-theme', 'light');
    }
};


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});

themeToggle.addEventListener('change', toggleTheme);

const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    setTheme(storedTheme);
} else {
    const prefersDarkMode = window.matchMedia('(perfers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
}

