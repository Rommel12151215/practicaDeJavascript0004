// Selecciona el botón y el contador
var boton = document.getElementById('incrementar');
var contador = document.getElementById('contador');

// Inicializa el contador
var valor = 0;

// Agrega un evento de clic al botón
boton.addEventListener('click', function() {
   // Incrementa el valor del contador
   valor++;
   
   // Actualiza el texto del contador
   contador.textContent = valor;
});
