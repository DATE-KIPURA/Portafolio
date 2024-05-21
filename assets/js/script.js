$(document).ready(function() {
  $("#caidaBtn").click(function() {
    $("#about").addClass("animate__falling");
    $("#portfolio").addClass("animate__falling");
    $("#contact").addClass("animate__falling");
    $("#github").addClass("animate__falling");

    // Después de 2 segundos (la duración de la animación), eliminamos la clase para detener la animación
    setTimeout(function() {
      $(".animate__falling").removeClass("animate__falling");
    }, 2000);
  });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (!name || !email || !message) {
    event.preventDefault(); // Evita que el formulario se envíe
    alert('Por favor, rellena todos los campos.');
  } else {
    // Si todos los campos están rellenados, muestra una ventana emergente
    alert('¡Felicidades! Tu mensaje ha sido recibido y será ignorado con éxito. ¡Gracias por el intento!!');
  }
});
// URL del endpoint de la API
// URL del endpoint de la API y tu clave API
const apiKey = 'YOUR_API_KEY';
const apiURL = `https://api.thedogapi.com/v1/images/search`;

// Función para obtener datos de la API
function fetchDog() {
  fetch(apiURL, {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      displayDog(data[0]);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

// Función para mostrar los datos en el HTML
function displayDog(dog) {
  const dogDiv = document.getElementById('dog');
  const dogDetails = `
    <img src="${dog.url}" alt="Imagen de un perro" style="max-width: 100%; height: auto;">
  `;
  dogDiv.innerHTML = dogDetails;
}

// Llamar a la función para obtener y mostrar los datos al cargar la página
document.getElementById('fetchButton').addEventListener('click', fetchDog);

// Generar una imagen de perro al cargar la página por primera vez
fetchDog();

//efecto de sonido
document.addEventListener('DOMContentLoaded', (event) => {
  const clickableImage = document.getElementById('clickableImage');
  const soundEffect = document.getElementById('soundEffect');

  clickableImage.addEventListener('click', () => {
    soundEffect.play();
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  const playButton = document.getElementById('playButton');
  const soundEffect2 = document.getElementById('soundEffect2');

  // Ajustar el volumen del sonido (valor entre 0 y 1)
  const volumen = 0.5; // Por ejemplo, ajusta el volumen al 50%
  soundEffect2.volume = volumen;

  playButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace se abra inmediatamente
    soundEffect2.play();
    soundEffect2.addEventListener('ended', () => {
      window.open(playButton.href, '_blank'); // Abre el enlace en una nueva ventana
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('caidaBtn');
  const buttonSound = document.getElementById('buttonSound');

  button.addEventListener('click', function() {
    buttonSound.currentTime = 1; // Reinicia la reproducción del sonido (si ya estaba reproduciendo)
    buttonSound.play();
  });
});

