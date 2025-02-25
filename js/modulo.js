document.addEventListener("DOMContentLoaded", function () {
    const circulos = document.querySelectorAll(".circle");
    const textos = document.querySelectorAll(".text-box");
    let index = 0;
    let interval;
    let enHover = false;
    const duracionHover = 3000; // Duración normal en el loop (2.2s)
    const tiempoPrimerTexto = 0; // Duración solo para el primer texto (1s)
    const transicionNormal = 700; // 0.7s en ms
    const transicionHover = 300; // 0.3s en ms
    let primerTextoMostrado = false; // 🔹 Para controlar la primera vez

    function actualizarTexto(indice, transicion = transicionNormal) {
        textos.forEach((texto, i) => {
            if (i !== indice) {
                texto.style.transition = `opacity ${transicion}ms ease-in-out`;
                texto.classList.remove("activo");
                
                setTimeout(() => {
                    texto.classList.remove("mostrando");
                    texto.style.display = "none";
                }, transicion);
            }
        });

        circulos.forEach(circulo => circulo.classList.remove("activo"));

        setTimeout(() => {
            textos[indice].style.display = "block";
            textos[indice].classList.add("mostrando");

            setTimeout(() => {
                textos[indice].style.transition = `opacity ${transicion}ms ease-in-out`;
                textos[indice].classList.add("activo");
                
            }, 10);
            
            circulos[indice].classList.add("activo");
        }, transicion);
    }

    function iniciarLoop() {
        if (!enHover) {
            interval = setInterval(() => {
                index = (index - 1 + circulos.length) % circulos.length;
                actualizarTexto(index);
            }, duracionHover);
        }
    }

    circulos.forEach((circulo, i) => {
        circulo.addEventListener("mouseenter", () => {
            clearInterval(interval);
            enHover = true;
            actualizarTexto(i, transicionHover);
            index = i;
        });

        circulo.addEventListener("mouseleave", () => {
            enHover = false;
            iniciarLoop();
        });
    });

    // Mostrar el primer texto directamente con un tiempo reducido
    textos[index].style.display = "block";
    textos[index].classList.add("mostrando", "activo");
    circulos[index].classList.add("activo");

    // Usar el tiempo reducido solo la primera vez, luego usar el normal
    setTimeout(() => {
        primerTextoMostrado = true;
        iniciarLoop();
    }, tiempoPrimerTexto);
});
