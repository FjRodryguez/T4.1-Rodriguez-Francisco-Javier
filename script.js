//Hace que aparezca el menú hamburguesa
function abrirNav() {
  nav.classList.add("visible");
}
//Hace que desaparezca el menú hamburguesa
function cerrarNav() {
  nav.classList.remove("visible");
}
//Cambia el atributo aria current en los enlaces para que se resalte en cual estás
function actualizarAriaCurrent() {
  //Obtén la URL actual
  let currentURL = new URL(window.location.href);

  let currentPath = currentURL.pathname;

  let navLinks = document.querySelectorAll("#nav a");

  //Itera sobre los enlaces y actualiza el atributo aria-current según la ruta actual
  navLinks.forEach(function (link) {
    let linkHref = new URL(link.href).pathname;
    if (currentPath === linkHref) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}
//Hacer que aparezca el menú de navegación
function cargarNav() {
  fetch('nav.html')
    .then(response => response.text())
    .then(navHTML => {
      document.getElementById('menu-container').innerHTML = navHTML;
      actualizarAriaCurrent(); // Llamar a la función de actualización después de cargar el menú
      const abrir = document.querySelector("#abrir");
      const cerrar = document.querySelector("#cerrar");

      abrir.addEventListener("click", abrirNav);
      cerrar.addEventListener("click", cerrarNav);
    })
    .catch(error => console.error('Error al cargar el menú:', error));
}
document.addEventListener("DOMContentLoaded", function () {
  // Tu código JavaScript para mostrar el menú de navegación aquí
  cargarNav();
});

//Alto y ancho de las imágenes
const x = window.innerWidth / 4;
const y = window.innerHeight / 4;
//Objeto imagenes
const imagenes = {
  1: { ruta: 'Imagenes/imagen1.jpg', ancho: x, alto: y },
  2: { ruta: 'Imagenes/imagen2.jpg', ancho: x, alto: y },
  3: { ruta: 'Imagenes/imagen3.jpg', ancho: x, alto: y },
  4: { ruta: 'Imagenes/imagen4.jpg', ancho: x, alto: y },
  5: { ruta: 'Imagenes/imagen5.jpg', ancho: x, alto: y }
};

//Función para mostrar la imagen
function mostrarImagen(numBoton) {
  const { ruta, ancho, alto } = obtenerImagen(numBoton);
  const contenedor = document.getElementById('imagenContainer');
  mostrarEnImagen(ruta, ancho, alto);
  contenedor.style.display = 'block';
}

//Función para obtener la imagen con atributos de ancho y alto
function obtenerImagen(numBoton) {
  return imagenes[numBoton];
}

//Función para mostrar la imagen en el contenedor
function mostrarEnImagen(ruta, ancho, alto) {
  const imagen = document.getElementById('imagenMostrada');
  imagen.src = ruta;
  imagen.width = ancho;
  imagen.height = alto;
}

//Asignar manejadores de eventos a los botones con función arrow
for (let i = 1; i <= 5; i++) {
  for (let i = 1; i <= 5; i++) {
    const boton = document.getElementById('boton' + i);
    boton.addEventListener('click', () => mostrarImagen(i));
  }
}


