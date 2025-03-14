document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById('menu_toggle');
    const burgerIcon = document.getElementById('burger');
    const closebtn = document.getElementById('close_img');
    
    burgerIcon.addEventListener('click', () => {
        burgerMenu.classList.toggle('open'); // Agrega o quita la clase 'open'
    });

    closebtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('open'); // Agrega o quita la clase 'open'
    });
});