document.addEventListener("DOMContentLoaded", () => {
    const labels = document.querySelectorAll(".acordion label");

    labels[0].style.color="#f4b10e";

    labels.forEach(label => {
        label.addEventListener("click", () => {
            // Remueve la clase de color amarillo de todos los labels
            labels.forEach(l => l.style.color = "");


            // Aplica el color amarillo solo al label clickeado
            label.style.color = "#f4b10e";
        });
    });
});
