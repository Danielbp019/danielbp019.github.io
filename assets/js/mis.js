/* Volumen de la musica
1,0 es el volumen más alto (por defecto)
0,5 es la mitad del volumen (50%)
0.0 Silencio */
var audio = document.getElementById("miaudio");
audio.volume = 0.2;

// Esconder elemento por id si el navegador es movil
function hideForMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    document.getElementById("errorbroma").style.display = "none";
  }
}
window.onload = hideForMobile;

// Función para mostrar el modal de confirmación de GitHub
function mostrarConfirmacionGithub() {
  const modal = new bootstrap.Modal(document.getElementById("modalGithub"));
  modal.show();

  // Manejar el clic en el botón de confirmación
  const confirmarBtn = document.getElementById("confirmarGithub");
  confirmarBtn.onclick = function () {
    window.open("https://github.com/Danielbp019", "_blank");
    modal.hide();
  };
}

// Función para mostrar el modal de confirmación de Error
function mostrarConfirmacionerror() {
  const modal = new bootstrap.Modal(document.getElementById("modalError"));
  modal.show();

  // Manejar el clic en el botón de confirmación
  const confirmarBtn = document.getElementById("confirmarError");
  confirmarBtn.onclick = function () {
    window.location.href = "error.html";
    modal.hide();
  };
}

// Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
