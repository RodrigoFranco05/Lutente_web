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


// Store the current language (default to Spanish)
let currentLanguage = localStorage.getItem('language') || 'es';

// Function to set all texts according to the selected language
function setLanguage(lang) {
    // Save the language preference
    localStorage.setItem('language', lang);
    currentLanguage = lang;
    
    // Get all elements with data-lang attribute
    const elements = document.querySelectorAll('[data-lang]');
    
    // Update each element's text with the corresponding translation
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (languages[lang] && languages[lang][key]) {
            // If the element is an input with placeholder
            if (element.placeholder) {
                element.placeholder = languages[lang][key];
            } 
            // For other elements
            else {
                element.innerHTML = languages[lang][key];
            }
        }
    });

    // Actualizar las imágenes de las banderas según el idioma
    const flagSrc = lang === "es" ? "./source/img/spain.png" : "./source/img/english.png";
    
    // Obtener referencias a los elementos de imagen de bandera
    const flagIcon = document.getElementById("lenguaje");
    const flagIconBurger = document.getElementById("lenguaje_burguer");
    
    // Actualizar las rutas de las imágenes si los elementos existen
    if (flagIcon) {
        flagIcon.src = flagSrc;
    }
    
    if (flagIconBurger) {
        flagIconBurger.src = flagSrc;
    }
}

// Set the initial language
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    
    // Add event listeners for language toggle buttons
    const toggleLanguageBtn = document.getElementById('toggle_lenguaje');
    const toggleLanguageBurguerBtn = document.getElementById('lenguaje_burguer');
    
    if (toggleLanguageBtn) {
        toggleLanguageBtn.addEventListener('click', () => {
            // Toggle between English and Spanish
            const newLang = currentLanguage === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }
    
    if (toggleLanguageBurguerBtn) {
        toggleLanguageBurguerBtn.addEventListener('click', () => {
            // Toggle between English and Spanish
            const newLang = currentLanguage === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }
});