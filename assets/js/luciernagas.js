document.addEventListener("DOMContentLoaded", function () {
  const fireflies = document.querySelectorAll(".firefly");
  const keyframesStyle = document.createElement("style");
  document.head.appendChild(keyframesStyle);

  // Función para generar un número aleatorio en un rango
  const random = (min, max) => Math.random() * (max - min) + min;

  fireflies.forEach((firefly, index) => {
    const animationName = `move${index + 1}`;

    // Duraciones y retrasos aleatorios
    const driftDuration = random(8, 15); // entre 8s y 15s
    const flashDuration = random(3000, 8000); // entre 3s y 8s
    const flashDelay = random(0, 5000); // entre 0s y 5s

    // Asignar duraciones y retrasos a los pseudo-elementos
    const before = document.createElement("style");
    before.innerHTML = `.firefly:nth-child(${index + 1})::before { animation-duration: ${driftDuration}s; }`;
    document.head.appendChild(before);

    const after = document.createElement("style");
    after.innerHTML = `.firefly:nth-child(${
      index + 1
    })::after { animation-duration: ${driftDuration}s, ${flashDuration}ms; animation-delay: 0ms, ${flashDelay}ms; }`;
    document.head.appendChild(after);

    // Generar keyframes de movimiento aleatorio
    let keyframes = `@keyframes ${animationName} {`;
    const steps = 10; // Número de puntos en la trayectoria
    for (let i = 0; i <= steps; i++) {
      const percentage = (i / steps) * 100;
      const x = random(-50, 50); // -50vw a 50vw
      const y = random(-50, 50); // -50vh a 50vh
      const scale = random(0.2, 1); // escala de 0.2 a 1
      keyframes += `${percentage}% { transform: translateX(${x}vw) translateY(${y}vh) scale(${scale}); }`;
    }
    keyframes += "}";

    // Añadir los keyframes a la hoja de estilos
    keyframesStyle.sheet.insertRule(keyframes, keyframesStyle.sheet.cssRules.length);

    // Asignar la animación al elemento
    const moveDuration = random(150, 250); // Duración total del movimiento
    firefly.style.animationName = animationName;
    firefly.style.animationDuration = `${moveDuration}s`;
  });
});
