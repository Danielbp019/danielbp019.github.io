/* Volumen de la musica
1,0 es el volumen más alto (por defecto)
0,5 es la mitad del volumen (50%)
0.0 Silencio */
var audio = document.getElementById("miaudio");
audio.volume = 0.2;

//Esconder elemento por id si el navegador es movil
function hideForMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent)) {
        // Hide scan button for Desktop
        document.getElementById('errorbroma').style.display = "none";
    }
}
//toggle scanButton for Desktop on page load
window.onload = hideForMobile;