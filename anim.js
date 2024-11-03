// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Estoy viendo como la arena cae poco a poco del reloj", time: 16.8 },
  { text: "Si observas bien notaras que al voltearlo se repite", time: 22.1 },
  { text: "Podre un dia volver, sera aun posible que", time: 27.8 },
  { text: "Pueda entrar al tiempo que esta tan lejos", time: 33.2 },
  { text: "Cuando estaba inmovil a la mitad de esa calle te encontre", time: 39.7 },
  { text: "Muchas chispas brillantes como el sol vi junto a ti esa  vez", time: 45.2 },
  { text: "Estoy solo aqui, recordandote a ti", time: 50.9 },
  { text: "Este tierno calor que solo contigo senti", time: 56 },
  { text: "Eres solo tu, tan solo eres tu", time: 63.8 },
  { text: "Mi único gran amor", time: 71.6 },
  { text: "Empecé a recordarte con el tiempo", time: 77.5 },
  { text: "Pues hoy yo te digo", time: 85.5 },

  { text: "No habrá un día que no recuerde, lo que vivimos", time: 92.4},
  { text: "Y aquellas promesas, eran una cosa", time: 96.8 },
  { text: "tan pequeñita tan ordinaria", time: 98.8 },
  { text: "Pero en en mi corazon son importantes y puedo mostrarte", time: 101.3 },
  { text: "Que nuestras almas", time: 103.3},
  { text: "Se han unido, se han unido y siempre sera asi", time:105 },
  { text: "", time:109 },
];


// function updateLyrics() {
//   var time = Math.floor(audio.currentTime);
//   var currentLine = lyricsData.find(
//     (line) => time >= line.time && time < line.time + 6
//   );

//   if (currentLine) {
   
//     var fadeInDuration = 0.1; 
//     var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    
//     lyrics.style.opacity = opacity;
//     lyrics.innerHTML = currentLine.text;
//   } else {
   
//     lyrics.style.opacity = 0;
//     lyrics.innerHTML = "";
//   }
// }
function showLyrics() {
  lyricsData.forEach((line, index) => {
    setTimeout(() => {
      lyrics.innerHTML = line.text; // Muestra la línea de la letra
      lyrics.style.opacity = 1; // Establece la opacidad al máximo
    }, line.time * 1000); // Convierte segundos a milisegundos
  });
}

// Llama a la función para iniciar la presentación de letras
showLyrics();

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);