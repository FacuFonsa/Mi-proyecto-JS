//verifiquemos tu edad//

const EDAD = prompt ("Antes de ingresar, verifiquemos tu edad")



const EDAD_NUMERO = parseInt(EDAD);



if (isNaN(EDAD_NUMERO)){ 
    console.log("Ingresa solo numeros");
} else{
    if (EDAD_NUMERO >=18){
        console.log("Perfecto, ahora podes ingresar tu email");
    } else{
        console.log("Perdon, pero sos menor para ingresar");
    }

}


//ingresa al sitio//


let nombreIngresado = prompt("ingresar nombre:");
let apellidoIngresado = prompt("ingresa tu apellido");

function saludar(nombre, apellido) {
    console.log("bienvenido " + nombre + " " + apellido);
}

saludar(nombreIngresado, apellidoIngresado);


let email = prompt("ingresar tu email:");
let contraseña = prompt("ingresa tu contraseña");

function saludar2(email, contraseña) {
    console.log("Tus datos son: " + email+ " " + contraseña);
}

saludar2(email, contraseña);





//calcula el precio de tu set de bateria//

function sumar() {
    let num1= parseFloat(prompt("Ingresa el precio de Platillos"));
    let num2= parseFloat(prompt("ingrese el precio de Palillos"));
    let suma= num1 + num2
    alert("Tu nuevo set de Bateria cuesta: " + " " + "$" + suma)
    console.log("la suma es" + " " + suma);
}


sumar();

//preguntar si esta conforme con los productos

const CONSULTA = "si";
let intentos = 0;
let consulta= " ";

while(consulta !== CONSULTA){
    consulta = prompt("Estas conforme con tus productos?").toLowerCase();
    intentos++;

    if(consulta !== CONSULTA){
        alert("No te preocupes, cerra y volve al incio de pagina");
    }
}

alert("¡EXCELENTE! GRACIAS POR ELEGIRNOS" + " " + intentos + " " + "Consultas" );