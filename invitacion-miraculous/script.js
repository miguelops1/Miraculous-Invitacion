function abrirMiraculous() {
    let miraculous = document.getElementById("miraculous");
    let invitacion = document.getElementById("invitacion");

    // Evita que se generen múltiples intervalos si ya está abierto
    if (!miraculous.classList.contains("abierto")) {
        miraculous.classList.add("abierto");

        setTimeout(() => {
            invitacion.classList.add("visible");
            setInterval(lanzarMariposas, 1000); // Genera mariposas constantemente cada segundo
        }, 1000);
    }
}

function lanzarMariposas() {
    let mariposasContainer = document.getElementById("mariposas");

    for (let i = 0; i < 10; i++) { // Mariposas generadas de forma continua
        let mariposa = document.createElement("div");
        mariposa.classList.add("mariposa");

        // Posiciones aleatorias en la pantalla
        mariposa.style.left = Math.random() * window.innerWidth + "px";
        mariposa.style.top = Math.random() * window.innerHeight + "px";
        mariposa.style.setProperty('--dir', Math.random() * 2 - 1); // Variación de dirección

        mariposa.style.animationDuration = (Math.random() * 3 + 3) + "s";
        mariposasContainer.appendChild(mariposa);

        setTimeout(() => {
            mariposa.remove();
        }, 6000);
    }
}
