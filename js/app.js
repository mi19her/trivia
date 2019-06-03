const boton = document.getElementById('guardar');
const n = document.getElementById('name');
let puntaje = 0;
//funcion guardar el nombre y mostrar en texto
guardar.addEventListener('click',()=>{
  const se = n.value;
  document.getElementById('llamar').style.display= 'none';
  document.getElementById('saludo').innerHTML = " Hola " + se + "!";
  document.getElementById('botones').style.display='block';
})
//muestra las preguntas de gastronomia
verComida.addEventListener('click',()=>{
  puntaje = 0;
  document.body.style.backgroundImage = "url(img/fondoComida.png)";
  document.getElementById('trivia').style.display= 'block';
  document.getElementById('inicio').style.display= 'none';
  document.getElementById('ceviche').style.display= 'block';
  document.getElementById('resultado_final').style.display= 'none';
})
//funcion para ocultar y mostrar pregunta1 de gastronomia
siguientePregunta1.addEventListener('click',()=>{
  if (document.querySelector('input[name="p1"]:checked').value === "100") {
    puntaje = puntaje + 100;
  }
  document.getElementById('trivia').style.display= 'block';
  document.getElementById('ceviche').style.display= 'none';
  document.getElementById('turron').style.display='block';
})
//funcion para ocultar y mostrar pregunta2 de gastronomia
siguientePregunta2.addEventListener('click',()=>{
  if (document.querySelector('input[name="p2"]:checked').value === "100") {
    puntaje = puntaje + 100;
  }
  document.getElementById('trivia').style.display= 'block';
  document.getElementById('turron').style.display= 'none';
  document.getElementById('años').style.display='block';
})
//funcion mostrar pregunta3 de gastronomia y resultados del puntaje
resultado1.addEventListener('click',()=>{
    if (document.querySelector('input[name="p3"]:checked').value === "100") {
    puntaje = puntaje + 100;
  }
  document.body.style.backgroundImage = "url(img/fondoFinal.png)";
  document.getElementById('trivia').style.display= 'none';
  document.getElementById('años').style.display= 'none';
  document.getElementById('resultado_final').style.display= 'block';
  document.getElementById('rpta').innerHTML="puntaje total " + puntaje;
})
//ocultar y mostrar solo preguntas del tema animales
verAnimales.addEventListener('click',()=>{
  puntaje=0;
   document.body.style.backgroundImage = "url(img/fondoAnimal.png)";
   document.getElementById('trivia').style.display= 'block';
   document.getElementById('tigre').style.display= 'block';
   document.getElementById('inicio').style.display= 'none';
   document.getElementById('resultado_final').style.display= 'none';
})
//funcion para ocultar y mostrar preguntas 1 tema animales
siguientePregunta3.addEventListener('click',()=>{
  if (document.querySelector('input[name="p3"]:checked').value === "100") {
    puntaje = puntaje + 100;
  }
  document.getElementById('trivia').style.display= 'block';
  document.getElementById('tigre').style.display= 'none';
  document.getElementById('africa').style.display='block';
})
//funcion para ocultar y mostrar pregunta 2 tema animales
siguientePregunta4.addEventListener('click',()=>{
  if (document.querySelector('input[name="p4"]:checked').value === "100") {
    puntaje = puntaje + 100;
  }
  document.getElementById('trivia').style.display= 'block';
  document.getElementById('africa').style.display= 'none';
  document.getElementById('dulce').style.display='block';
})
//funcion para ocultar y mostrar pregunta 3 tema animales y mostrar resultados
resultado2.addEventListener('click',()=>{
  if (document.querySelector('input[name="p5"]:checked').value === "100") {
    puntaje = puntaje + 100;
  }
  document.body.style.backgroundImage = "url(img/fondoFinal.png)";
  document.getElementById('trivia').style.display= 'none';
  document.getElementById('inicio').style.display= 'none';
  document.getElementById('dulce').style.display= 'none';
  document.getElementById('resultado_final').style.display= 'block';
  document.getElementById('rpta').innerHTML=" Ganaste " + puntaje + " puntos";
  document.getElementById('botones').style.display='block';
  })
