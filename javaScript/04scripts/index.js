    //const
    const capa = document.getElementById("capa");
    const boton_rojo= document.getElementById("btn_rojo");
    const boton_amarillo=document.getElementById("btn_amarillo");
    const boton_verde=document.getElementById("btn_verde");
    const boton_ocultar=document.getElementById("btn_ocultar");
    const boton_mostrar=document.getElementById("btn_mostrar");


    boton_rojo.addEventListener("click", rojo);
    boton_amarillo.addEventListener("click", amarillo);
    boton_verde.addEventListener("click", verde);
    boton_ocultar.addEventListener("click", ocultar);
    boton_mostrar.addEventListener("click", mostrar);


    function rojo(){
        capa.style.backgroundColor = "red";
    }

    function amarillo(){
        capa.style.backgroundColor = "yellow";
    }

    function verde(){
        capa.style.backgroundColor = "green";
    }

    function ocultar(){
        capa.style.visibility = "hidden";
    }

    function mostrar(){
        capa.style.visibility = "visible";
    }


