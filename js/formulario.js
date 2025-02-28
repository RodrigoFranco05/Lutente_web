document.addEventListener("DOMContentLoaded", function () {
    // Inicializar EmailJS
    emailjs.init("zYo8Io67JRbiPv8Lr"); // Reemplaza con tu User ID de EmailJS

    const form = document.getElementById("contact-form");
    const modal = document.getElementById("status-modal");
    const modalMessage = document.getElementById("modal-message");
    const closeModal = document.getElementById("close-modal");

    if (!form) {
        console.error("No se encontró el formulario en el DOM.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener los valores de los inputs
        let name = document.getElementById("name")?.value || "";
        let number = document.getElementById("number")?.value || "";
        let business = document.getElementById("business")?.value || "";
        let email = document.getElementById("email")?.value || "";
        let message = document.getElementById("message")?.value || "";

        if (!name || !email) {
            showModal("Por favor, completa los campos obligatorios.");
            return;
        }

        // Enviar email con EmailJS
        emailjs.send("service_p40nz8f", "template_wdxb5a3", {
            from_name: name,
            from_number: number,
            from_business: business,
            from_email: email,
            message: message
        }).then(function (response) {
            showModal("¡Mensaje enviado con éxito! 🎉");
            form.reset(); // Limpiar formulario tras el envío
        }, function (error) {
            showModal("❌ Error al enviar el mensaje. Inténtalo de nuevo.");
            console.error("EmailJS Error:", error);
        });
    });

    // Función para mostrar el modal
    function showModal(message) {
        modalMessage.innerText = message;
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
    }

    // Evento para cerrar el modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar el modal si el usuario hace clic fuera de la caja
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});