function iniciar(){
    let numero = document.getElementById("numero").value;
    let resultado = Math.floor(Math.random() * 3) + 1;

    if(numero === resultado){
    document.getElementById("resultado").innerHTML="ACERTASTE";

    }
    else if(numero>resultado){
        document.getElementById("resultado").innerHTML="El número introducido es MAYOR que el resultado";
    }
    else{
        document.getElementById("resultado").innerHTML="El número introducido es MENOR que el resultado";
    }   
}