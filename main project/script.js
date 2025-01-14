const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});


document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };

    menu.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    };

});