let free = false;

const validarCliente = (time) =>{
    let edad = prompt("cual es tu edad?");
    if(edad > 18){
        if(time >= 2 && time < 7 && free == false){
        alert("sos el primero despues de las 02:00, podes pasar gratis");
        free == true;
    } else {
        alert("pasa pero tenes que pagar");
    }}else{
        alert("sos menor de edad");
    }}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(2);
validarCliente(2.4);