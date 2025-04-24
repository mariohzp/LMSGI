//ejercicio2
const btn = document.getElementById("btn-password");
const password = document.getElementById("password");

//llamada2
btn.addEventListener("input", check_password);

//funcion2
function check_password(){
    let paswd =password.value.length; 
    if(paswd <12){
        alert("ERROR LENGTH");
    } else{
        alert(":D");
    }
}