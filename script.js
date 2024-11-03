const starsContainer = document.getElementById('stars-container');

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    // Establece la posición aleatoria
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // Establece un tiempo de animación aleatorio
    const duration = Math.random() * 2 + 1; // Entre 1 y 3 segundos
    star.style.animationDuration = `${duration}s`;

    // Agrega la estrella al contenedor
    starsContainer.appendChild(star);

    // Elimina la estrella después de que termine la animación
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// Crea estrellas de manera repetida
setInterval(createStar, 100); // Cada 300 ms

setTimeout(() => {
    document.getElementById('botonSorpresa').style.display = 'inline-block';
}, 2000);
