function animarContador(elemento, inicio, fin, duracion) {
    let tiempoInicio = performance.now();

    function actualizar() {
        let tiempoActual = performance.now();
        let tiempoPasado = tiempoActual - tiempoInicio;
        let progreso = tiempoPasado / duracion;
        
        // Easing cúbico para acelerar progresivamente
        let easing = Math.pow(progreso, 3);

        let valorActual = inicio + (fin - inicio) * easing;
        elemento.textContent = Math.round(valorActual) + "%";

        if (progreso < 1) {
            requestAnimationFrame(actualizar);
        } else {
            elemento.textContent = fin + "%"; 
        }
    }

    requestAnimationFrame(actualizar);
}

// Detectar cuando el párrafo entra en pantalla
function observarElemento() {
    let spanContador = document.getElementById("contador");

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { 
                animarContador(spanContador, 0, 100, 1500); // Inicia la animación
                observer.unobserve(entry.target); // Dejar de observar después de la primera vez
            }
        });
    }, { threshold: 0.6 }); // Se activa cuando el 60% del elemento es visible

    observer.observe(spanContador); 
}

observarElemento();