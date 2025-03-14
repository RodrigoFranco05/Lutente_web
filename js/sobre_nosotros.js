document.addEventListener("DOMContentLoaded", () => {
    // Textos para el hover de las cards en diferentes idiomas
    const cardHoverTexts = {
        'es': [
            "En Lutente Cloud no solo ofrecemos una plataforma, sino que construimos una experiencia diseñada a la medida de tu negocio.",
            "Sabemos que cada empresa es única, por eso trabajamos contigo para garantizar que nuestras soluciones realmente aporten valor a tu día a día.",
            "Nuestra prioridad es brindarte herramientas fáciles de usar, para que la tecnología sea tu aliada, no un desafío.",
            "Detrás de Lutente Cloud hay un equipo de expertos apasionados, listos para apoyarte en cada etapa del proceso.",
            "Cuando tu negocio crece, nosotros crecemos contigo. Cada cliente satisfecho es un motivo más para seguir innovando.",
            "No somos solo un software, somos un socio estratégico para que alcances tus metas con confianza y tranquilidad."
        ],
        'en': [
            "At Lutente Cloud, we don't just offer a platform; we build an experience tailored to your business.",
            "We know each company is unique, which is why we work with you to ensure our solutions truly add value to your daily operations.",
            "Our priority is to provide you with easy-to-use tools, so technology becomes your ally, not a challenge.",
            "Behind Lutente Cloud is a team of passionate experts, ready to support you at every stage of the process.",
            "When your business grows, we grow with you. Each satisfied customer is one more reason to keep innovating.",
            "We're not just software; we're a strategic partner to help you achieve your goals with confidence and peace of mind."
        ]
    };

    // Función para actualizar los eventos de hover según el idioma actual
    function updateCardHoverTexts() {
        // Usa el idioma actual de tu sistema
        const idiomaActual = currentLanguage; // Esta variable ya está definida en tu sistema
        
        // Seleccionar los textos según el idioma actual
        const textos = cardHoverTexts[idiomaActual] || cardHoverTexts['es']; // Usar español como fallback
        
        const divs = document.querySelectorAll(".grid_container div");
        
        // Primero, eliminar los event listeners previos si existen
        divs.forEach(div => {
            const newDiv = div.cloneNode(true);
            div.parentNode.replaceChild(newDiv, div);
        });
        
        // Obtener los divs nuevamente después de clonarlos
        const newDivs = document.querySelectorAll(".grid_container div");
        
        // Agregar los nuevos event listeners con el idioma actualizado
        newDivs.forEach((div, index) => {
            const p = div.querySelector("p");
            if (!p) return; // Si no hay párrafo, saltamos
            
            const textoOriginal = p.textContent;
            
            div.addEventListener("mouseover", () => {
                p.style.opacity = "0"; // Oculta el texto antes de cambiarlo
                setTimeout(() => {
                    // Asegúrate de no exceder el índice disponible
                    if (index < textos.length) {
                        p.textContent = textos[index];
                    }
                    p.style.opacity = "1"; // Muestra el nuevo texto suavemente
                }, 300); 
            });
            
            div.addEventListener("mouseout", () => {
                p.style.opacity = "0"; // Oculta antes de volver al original
                setTimeout(() => {
                    p.textContent = textoOriginal;
                    p.style.opacity = "1";
                }, 300);
            });
        });
    }
    
    // Inicializar los textos de hover al cargar
    updateCardHoverTexts();
    
    // Actualizar los textos de hover cuando cambie el idioma
    // Modificar tu función setLanguage para que llame a updateCardHoverTexts
    
    // Guarda la referencia a la función original
    const originalSetLanguage = window.setLanguage;
    
    // Redefine la función para añadir la actualización de los textos de hover
    window.setLanguage = function(lang) {
        // Llamar a la función original
        originalSetLanguage(lang);
        
        // Actualizar los textos de hover
        updateCardHoverTexts();
    };
});
