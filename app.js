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
    });

