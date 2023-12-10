//verifiquemos tu edad//

// const EDAD = prompt ("Antes de ingresar, verifiquemos tu edad")



// const EDAD_NUMERO = parseInt(EDAD);



// if (isNaN(EDAD_NUMERO)){ 
//     console.log("Ingresa solo numeros");
// } else{
//     if (EDAD_NUMERO >=18){
//         console.log("Perfecto, ahora podes ingresar tu email");
//     } else{
//         console.log("Perdon, pero sos menor para ingresar");
//     }

// }


// //ingresa al sitio//


// let nombreIngresado = prompt("ingresar nombre:");
// let apellidoIngresado = prompt("ingresa tu apellido");

// function saludar(nombre, apellido) {
//     console.log("bienvenido " + nombre + " " + apellido);
// }

// saludar(nombreIngresado, apellidoIngresado);


// let email = prompt("ingresar tu email:");
// let contraseña = prompt("ingresa tu contraseña");

// function saludar2(email, contraseña) {
//     console.log("Tus datos son: " + email+ " " + contraseña);
// }

// saludar2(email, contraseña);

// //////////////////////////////////////////////////////////////////////////
// //array con informacion de usurario

// function Usuario(nombre, apellido, fecha_de_ingreso){
//     this.nombre = nombre
//     this.apellido = apellido
//     this.fecha_de_ingreso = fecha_de_ingreso
// }

// const USUARIO = new Usuario("Facundo", "Fonsalido", 2023);
// console.log(USUARIO);
// //////////////////////////////////////////////////////////////////////////



// //calcula el precio de tu set de bateria//

// function sumar() {
//     let num1= parseFloat(prompt("Ingresa el precio de Platillos"));
//     let num2= parseFloat(prompt("ingrese el precio de Palillos"));
//     let suma= num1 + num2
//     alert("Tu nuevo set de Bateria cuesta: " + " " + "$" + suma)
//     console.log("la suma es" + " " + suma);
// }


// sumar();


// //////////////////////////////////////////////////////////////////////

// //carrito de productos
// const CARRITO =[
//     {
//         producto: "Platillos",
//         precio: 350000
//     },
//     {
//         producto: "Palilloa",
//         precio: 75000
//     },    
// ]


// let precioTotal = 0;
// for(const item of CARRITO){
//     precioTotal += item.precio;
// }

// console.log("el precio total del carrito es : $" + precioTotal);
// //////////////////////////////////////////////////////////////////////

// //Carrito de productos ordenados por valor
// const CARRITO2 = [
//     {producto: "Platillos", precio:350000},
//     {producto: "Palillos", precio:75000},
// ]

// let productosOrdenados = CARRITO2.slice().sort((a,b) => a.precio - b.precio);

// console.log(productosOrdenados);

// //////////////////////////////////////////////////////////////////////////////////


// //preguntar si esta conforme con los productos

// const CONSULTA = "si";
// let intentos = 0;
// let consulta= " ";

// while(consulta !== CONSULTA){
//     consulta = prompt("Estas conforme con tus productos?").toLowerCase();
//     intentos++;

//     if(consulta !== CONSULTA){
//         alert("No te preocupes, cerra y volve al incio de pagina");
//     }
// }

// alert("¡EXCELENTE! GRACIAS POR ELEGIRNOS" + " " + intentos + " " + "Consultas" );

const productosAElegir = [
    {id:1, nombre:"Set de Platillos Paiste 2002", precio:65000},
    {id:2, nombre:"Set de Platillos Zildjian", precio:95000},
    {id:3, nombre:"Set de Bateria DW Profesional", precio:130000},
    {id:4, nombre:"Set Bateria TAMA Profesional", precio:110000},
]
function agregarProducto(id,nombre,precio){
    const carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];
    carrito.push({id, nombre, precio});
    localStorage.setItem(`carrito`, JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];
    const listaProductos = document.getElementById(`lista-productos`);
    const totalElement = document.getElementById(`total`);
    let total = 0;

    listaProductos.innerHTML = ``;

carrito.forEach(producto => {
    const listItem = document.createElement(`li`);
    listItem.innerHTML = `
    <span>${producto.nombre}</span>
    <span>${producto.precio}</span>
    `;
    listaProductos.appendChild(listItem);
    total += parseFloat(producto.precio);
});
totalElement.textContent = total.toFixed(2);

};

function limpiarCarrito(){
    localStorage.removeItem(`carrito`);
    mostrarCarrito();

}



function cards(){
    const contenedorProductos = document.getElementById (`productos`);

    productosAElegir.forEach(producto =>{
        const productoElement = document.createElement(`div`);
        productoElement.classList.add(`producto`);
        productoElement.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${"$" + producto.precio}</p>
        <button onclick ="agregarProducto('${producto.id}','${producto.nombre}','${producto.precio}')">Agregar al carrito</button>
        

        `;
        contenedorProductos.appendChild(productoElement);
    })


}

mostrarCarrito();
cards();































