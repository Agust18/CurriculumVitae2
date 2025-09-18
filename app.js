    // ... (Tus scripts existentes de AOS, Navbar, ScrollSpy, Preloader) ...

    // --- Script para alternar el contenido de la sección "Sobre mí" ---
document.addEventListener('DOMContentLoaded', () => {
        const contenidoOriginal = document.getElementById('contenido-original-sobre-mi');
        const contenidoOtrasAptitudes = document.getElementById('contenido-otras-aptitudes');
        const botonAlternar = document.getElementById('alternar-info-btn'); // Usamos el nuevo ID del botón

        let mostrandoOriginal = true; // Estado para saber qué contenido se muestra actualmente

        // Verificamos que los elementos existan antes de añadir el listener
        if (contenidoOriginal && contenidoOtrasAptitudes && botonAlternar) {
            botonAlternar.addEventListener('click', () => {
                if (mostrandoOriginal) {
                    contenidoOriginal.style.display = 'none'; // Oculta el original
                    contenidoOtrasAptitudes.style.display = 'block'; // Muestra el nuevo
                    botonAlternar.innerHTML = '<strong>VOLVER A SOBRE MÍ</strong>'; // Cambia el texto del botón
                } else {
                    contenidoOriginal.style.display = 'block'; // Muestra el original
                    contenidoOtrasAptitudes.style.display = 'none'; // Oculta el nuevo
                    botonAlternar.innerHTML = '<strong>+INFORMACION / OTRAS APTITUDES</strong>'; // Restaura el texto del botón
                }
                mostrandoOriginal = !mostrandoOriginal; // Invierte el estado

                // Opcional: Refrescar AOS si tienes animaciones en el contenido que se oculta/muestra
                // AOS.refresh();
            });
        } else {
            console.error("Error: No se encontraron los elementos necesarios para alternar el contenido de la sección 'Sobre mí'.");
        }

    document.getElementById("contactForm").addEventListener("submit", (e) => {
    // Get form elements
    const nombre = document.getElementById("nombre")
    const email = document.getElementById("email")
    const mensaje = document.getElementById("mensaje")

    // Get error message elements
    const nombreError = document.getElementById("nombreError")
    const emailError = document.getElementById("emailError")
    const mensajeError = document.getElementById("mensajeError")

    // Reset error messages
    nombreError.style.display = "none"
    emailError.style.display = "none"
    mensajeError.style.display = "none"

    // Remove error styling
    nombre.style.borderColor = "var(--border)"
    email.style.borderColor = "var(--border)"
    mensaje.style.borderColor = "var(--border)"

    let isValid = true

    // Validate nombre
    if (!nombre.value.trim()) {
        nombreError.style.display = "block"
        nombre.style.borderColor = "var(--destructive)"
        isValid = false
        e.preventDefault()
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.value.trim()) {
        emailError.textContent = "Por favor, ingresa tu email"
        emailError.style.display = "block"
        email.style.borderColor = "var(--destructive)"
        isValid = false
        e.preventDefault()
    } else if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = "Por favor, ingresa un email válido"
        emailError.style.display = "block"
        email.style.borderColor = "var(--destructive)"
        isValid = false
        e.preventDefault()
    }

    // Validate mensaje
    if (!mensaje.value.trim()) {
        mensajeError.style.display = "block"
        mensaje.style.borderColor = "var(--destructive)"
        isValid = false
        e.preventDefault()
    }

    // If valid, form will submit to Formspree
    if (isValid) {
        const submitButton = document.querySelector(".contact-form .cta-button")
        submitButton.textContent = "Enviando..."
        submitButton.disabled = true
    }
    })

});
