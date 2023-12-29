const productosAElegir = [
    {id:1, nombre:"Set de Platillos Paiste 2002", precio:67.00},
    {id:2, nombre:"Set de Platillos Zildjian", precio:96.00},
    {id:3, nombre:"Set de Bateria DW Profesional", precio:129.00},
    {id:4, nombre:"Set Bateria TAMA Profesional", precio:110.00},
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
        <p>${"USD" + producto.precio}</p>
        <button onclick ="agregarProducto('${producto.id}','${producto.nombre}','${producto.precio}')">Agregar al carrito</button>
        

        `;
        contenedorProductos.appendChild(productoElement);
    })


}

mostrarCarrito();
cards();

//cotizador//


const cotizador = "https://criptoya.com/api/dolar";

const divCotizador = document.getElementById("divCotizador");

setInterval(()=>{
    fetch(cotizador)
    .then(response => response.json())
    .then(({oficial, blue})=>{
        divCotizador.innerHTML = `
        <h3>Valor del Dolar</h3>
        <p>Dolar Oficial: ${oficial}</p>
        <p>Dolar Blue: ${blue}</p>
        `
    })
    .catch(error => console.log(error))



},2000);

const BOTON = document.getElementById("boton");

let carrito = ["bateria", "platillos", "palillos"];

BOTON.addEventListener("click", () => {
    Swal.fire({
        title: "¿Estas conforme con tu compra?",
        icon: "warning",
        confirmButtonText: "Si",
        showCancelButton: true,
        cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = carrito.filter((producto) => producto !== "bateria");
            console.log(carrito);
            Swal.fire({
                title: "Perfecto!!! te enviamos la factura por mail",
                icon: "success",
                confirmButtonText: "aceptar",
            });
        } else {
            Swal.fire({
                title: "Cancelaste la compra",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    });
});































