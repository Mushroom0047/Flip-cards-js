
//Funcion para saber que carta debemos voltear
let cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => { cards[i].classList.toggle('is-flipped'); })
};

var imagenes = [
  "https://picsum.photos/id/237/100/150",
  "https://picsum.photos/id/2/100/150",
  "https://picsum.photos/id/30/100/150",
  "https://picsum.photos/id/70/100/150",
  "https://picsum.photos/id/52/100/150",
  "https://picsum.photos/id/8/100/150",
  "https://picsum.photos/id/6/100/150",
  "https://picsum.photos/id/56/100/150",
  "https://picsum.photos/id/45/100/150",
  "https://picsum.photos/id/112/100/150",
  "https://picsum.photos/id/82/100/150",
  "https://picsum.photos/id/19/100/150"
];

//Funcion para obtener el indice de un array de manea aleatoria
function obtenerElementoAleatorio(array) {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

//Cuando se cargue el sitio se ejecuta esta funcion | asignar imagen al back
window.addEventListener("load", () => {
  for (let i = 0; i < cards.length; i++) {
    let indiceArr = obtenerElementoAleatorio(imagenes);
    document.querySelector(`.card__face--back${i + 1}`).style.backgroundImage = `url(${indiceArr})`;
  };
});

//Funcionalidad del boton cambiar carta 1
const btnCambiarCarta1 = document.querySelector('.btn__card--1--ChangeCard');
const btnCambiarCarta2 = document.querySelector('.btn__card--2--ChangeCard');
const btnCambiarCarta3 = document.querySelector('.btn__card--3--ChangeCard');

btnCambiarCarta1.addEventListener('click', () => {
  let indiceArr = obtenerElementoAleatorio(imagenes);
  if (document.querySelector('.card--1').classList.contains("is-flipped")) {
    document.querySelector('.card--1').classList.remove('is-flipped');
  }
  document.querySelector(".card__face--back1").style.backgroundImage = `url(${indiceArr})`;
})

btnCambiarCarta2.addEventListener('click', () => {
  let indiceArr = obtenerElementoAleatorio(imagenes);
  if (document.querySelector('.card--2').classList.contains("is-flipped")) {
    document.querySelector('.card--2').classList.remove('is-flipped');
  }
  document.querySelector(".card__face--back2").style.backgroundImage = `url(${indiceArr})`;
})

btnCambiarCarta3.addEventListener('click', () => {
  let indiceArr = obtenerElementoAleatorio(imagenes);
  if (document.querySelector('.card--3').classList.contains("is-flipped")) {
    document.querySelector('.card--3').classList.remove('is-flipped');
  }
  document.querySelector(".card__face--back3").style.backgroundImage = `url(${indiceArr})`;
})



//Funcionalidad del boton mostrar carta
const btnVerCarta1 = document.querySelector('.btn__card--1--showCard');
const btnVerCarta2 = document.querySelector('.btn__card--2--showCard');
const btnVerCarta3 = document.querySelector('.btn__card--3--showCard');

btnVerCarta1.addEventListener('click', () => {
  document.querySelector('.card--1').classList.toggle('is-flipped');
})
btnVerCarta2.addEventListener('click', () => {
  document.querySelector('.card--2').classList.toggle('is-flipped');
})
btnVerCarta3.addEventListener('click', () => {
    document.querySelector('.card--3').classList.toggle('is-flipped');
})

//Revolver TODAS las cartas
let botonRevolver = document.querySelector('.btn__revolver__cartas');
botonRevolver.addEventListener('click', () => {
  let cards = document.getElementsByClassName('card');

  for (let i = 0; i < cards.length; i++) {
    let indiceArr = obtenerElementoAleatorio(imagenes);

    if (document.querySelector(`.card--${i+1}`).classList.contains("is-flipped")) {
      document.querySelector(`.card--${i+1}`).classList.remove('is-flipped');
    }

    document.querySelector(`.card__face--back${i + 1}`).style.backgroundImage = `url(${indiceArr})`;
  };
})