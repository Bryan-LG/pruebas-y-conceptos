let contador = 0;

const valor = document.querySelector(".valor");  // Cambié #valor a .valor
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener('click', function(e) {
        let estilos = e.target.classList;

        if (estilos.contains('boton-restar')) {
            contador--;
        } else if (estilos.contains('boton-sumar')) {
            contador++;
        } else if (estilos.contains('boton-resetear')) {
            contador = 0;
        }
        valor.textContent = contador;
    });
});
