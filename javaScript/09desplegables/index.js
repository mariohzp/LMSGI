//constante para el boton
const boton = document.getElementById("btn");

//accion +llamada a la funcion
boton.addEventListener("click", mostrar);

//funcion
function mostrar(){
    const myDiv = document.getElementById("container");
    myDiv.classList.toggle("active");
}


//ejercicio2
const boton2 = document.querySelector(".accordion-btn");
boton2.addEventListener("click", mostrar2);

function mostrar2(){
    const acordeon = document.querySelector(".accordion-body");
    acordeon.classList.toggle("active2");
}