//ejercicio1 const
const addBtn = document.getElementById("btn-task");
const list = document.getElementById("list");
const input = document.getElementById("task");

//llamada1
addBtn.addEventListener("click",add_task);

//funcion1
function add_task() {
    const li =document.createElement("li");
    const p =document.createElement("p");
    p.textContent = input.value;
    //
    li.appendChild(p);
    list.appendChild(li);

    //limpiar el input
    input.value="";
}




//ejercicio2
const btn = document.getElementById("btn-password");
const password = document.getElementById("password");

//llamada2
btn.addEventListener("click",check_password);

//funcion2
function check_password(){
    let paswd =password.value.length; 
    if(paswd <12){
        alert("ERROR LENGTH");
    } else{
        alert(":D");
    }
}