document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
    var logo = document.getElementById("logo"); // Asegúrate de que este id esté en tu imagen
    var img = document.getElementById("lenguaje");
    var enlaces = document.querySelectorAll("#header a");

    if (header && logo) {
        window.addEventListener("scroll", function () {
            let scrollTop = window.scrollY;
            let opacity = Math.min(scrollTop / 50, 1); // Controla la opacidad (máx 1)

            if (scrollTop > 50) {
                logo.src = "../source/img/logo_blanco_2.png"; // Cambia a la imagen oscura
                
            } else {
                logo.src = "../source/img/ElementosParaWeb1_negro.png"; // Vuelve a la imagen clara
                
            }

            enlaces.forEach(enlace => {
                enlace.style.color = scrollTop > 50 ? "rgb(248, 247, 247)" : "rgb(14, 14, 14)";
            });

            // Transición del fondo de transparente a negro
            header.style.backgroundColor = `rgba(14, 14, 14, ${opacity})`; // Opacidad progresiva

            img.style.filter = `invert(${opacity})`;
        });
    }
});