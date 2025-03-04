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


document.addEventListener("DOMContentLoaded", function () {
    const toggleLanguageBtn = document.getElementById("toggle_lenguaje");
    const toggleLanguageBurger = document.getElementById("lenguaje_burguer");
    const flagIcon = document.getElementById("lenguaje");
    const flagIconBurger = document.getElementById("lenguaje_burguer");
    let currentLang = localStorage.getItem("language") || "es";

    function updateLanguage(lang) {
        document.querySelectorAll("[data-lang]").forEach((element) => {
            const key = element.getAttribute("data-lang");
            element.innerHTML = languages[lang][key];
        });

        const flagSrc = lang === "es" ? "./source/img/spain.png" : "./source/img/english.png";
        flagIcon.src = flagSrc;
        flagIconBurger.src = flagSrc;

        localStorage.setItem("language", lang);
    }

    toggleLanguageBtn.addEventListener("click", () => {
        currentLang = currentLang === "es" ? "en" : "es";
        updateLanguage(currentLang);
    });

    toggleLanguageBurger.addEventListener("click", () => {
        currentLang = currentLang === "es" ? "en" : "es";
        updateLanguage(currentLang);
    });

    updateLanguage(currentLang);
});
