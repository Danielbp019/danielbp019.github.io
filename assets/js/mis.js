/* Volumen de la musica
1,0 es el volumen más alto (por defecto)
0,5 es la mitad del volumen (50%)
0.0 Silencio */
var audio = document.getElementById("miaudio");
audio.volume = 0.2;

// Esconder elemento por id si el navegador es movil
function hideForMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent)) {
        document.getElementById('errorbroma').style.display = "none";
    }
}
window.onload = hideForMobile;

// Función para mostrar un mensaje de confirmación
function mostrarConfirmacionGithub() {
    const confirmacion = confirm("¿Estás seguro de que deseas visitar este enlace?");
    if (confirmacion) {
        // Si el usuario confirma, redirige al enlace
        const url = 'https://github.com/Danielbp019';
        window.open(url, '_blank');
    }
}

// Función para mostrar un mensaje de confirmación
function mostrarConfirmacionerror() {
    const confirmacion = confirm("¿Estás seguro de pulsar este botón? Yo NO lo haria.");
    if (confirmacion) {
        // Si el usuario confirma, redirige al enlace
        window.location.href = "error.html";
    }
}

// Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
