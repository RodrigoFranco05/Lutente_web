document.addEventListener("DOMContentLoaded", () => {
    const sticky = document.querySelector(".sticky"); // Solo obtenemos un sticky
    const scrollSection = sticky.querySelector(".scroll_section");

    let images = [
        "../source/img/e7954256.webp",
        "../source/img/e7954256.webp"
    ];

    // // Agregar imágenes dinámicamente
    // images.forEach(img => {
    //     let image = document.createElement("img");
    //     image.src = img;
    //     scrollSection.appendChild(image);
    //     image.style.backgroundColor = "#f4b10e"; // Solo si realmente necesitas esto
    // });

    // Aplicamos una transición para suavizar el efecto
    scrollSection.style.transition = "transform 0.3s ease-out";

    // Escuchar el scroll y actualizar la transformación
    window.addEventListener("scroll", () => {
        transform(sticky);
    });

    function transform(section) {
        const offsetTop = section.parentElement.offsetTop;
        let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

        // Limitar el porcentaje para que no exceda los valores deseados
        percentage = Math.max(0, Math.min(percentage, 100));

        // Aplicar transformación con transición
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const textos = [
        "En Lutente Cloud no solo ofrecemos una plataforma, sino que construimos una experiencia diseñada a la medida de tu negocio.",
        "Sabemos que cada empresa es única, por eso trabajamos contigo para garantizar que nuestras soluciones realmente aporten valor a tu día a día.",
        "Nuestra prioridad es brindarte herramientas fáciles de usar, para que la tecnología sea tu aliada, no un desafío.",
        "Detrás de Lutente Cloud hay un equipo de expertos apasionados, listos para apoyarte en cada etapa del proceso.",
        "Cuando tu negocio crece, nosotros crecemos contigo. Cada cliente satisfecho es un motivo más para seguir innovando.",
        "No somos solo un software, somos un socio estratégico para que alcances tus metas con confianza y tranquilidad."
    ];

    const divs = document.querySelectorAll(".grid_container div");

    divs.forEach((div, index) => {
        const p = div.querySelector("p");
        const textoOriginal = p.textContent;

        div.addEventListener("mouseover", () => {
            p.style.opacity = "0"; // Oculta el texto antes de cambiarlo
            setTimeout(() => {
                p.textContent = textos[index];
                p.style.opacity = "1"; // Muestra el nuevo texto suavemente
            }, 200); // Pequeño retraso antes de cambiar el texto
        });

        div.addEventListener("mouseout", () => {
            p.style.opacity = "0"; // Oculta antes de volver al original
            setTimeout(() => {
                p.textContent = textoOriginal;
                p.style.opacity = "1"; 
            }, 200);
        });
    });
});
