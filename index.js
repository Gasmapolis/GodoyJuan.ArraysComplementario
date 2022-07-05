
class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = parseInt (precio);
    }
}

const pulsera = new Producto("Pulsera", 450);
const mochila = new Producto("Mochila", 2200);
const relojDigital = new Producto("Reloj Digital", 3100);
const relojAnalogico = new Producto("Reloj Analogico", 2000);
const gorras = new Producto("Gorras", 800);
let totalProductos = 0
let carrito = [];
let listaCompras = [];

function suma(numeroUno, numeroDos) {
    let resultado = numeroUno + numeroDos;
    return resultado;
}

function resta(numeroUno, numeroDos) {
    let resultado = numeroUno - numeroDos;
    return resultado;
}

function multiplicacion(numeroUno, numeroDos) {
    let resultado = numeroUno * numeroDos;
    return resultado;
}

function usuario(){
    nombreUsuario = prompt("Ingrese su nombre por favor")
    while (nombreUsuario === "") {
        nombreUsuario = prompt("Ingrese su nombre por favor")
    }
}

function menu() {
    let opcion = 0;
    
    do{
        opcion = parseInt(prompt("Bienvenido " + nombreUsuario + ", seleccione una opcion para continuar. (ESC para salir)\nEn el carrito hay actualmente " + carrito.length + " Productos.\n 1.Agregar productos al carrito\n 2.Pagar el total de la compra\n 3.Reiniciar carrito\n 4.Mostrar productos dentro del carrito"));
    
    switch (opcion) {
        case 1:
            agregarProducto()
            return menu()
        case 2:
            metodoPago()
            return mostrarTotal(totalProductos)
        case 3:
            reinicioCarrito()
            return menu()
        case 4:
            revisarCarrito()
            return menu()
        default: 
            alert("seleccione una opcion valida!!")
            
        } 
    } while (opcion !== "") 
}

function agregarProducto() {
    let seleccionarProducto = 0
    do {
        seleccionarProducto = parseInt(prompt("Seleccione el producto que desea agregar al carrito.\n su total hasta ahora es $" + totalProductos + "\n Actualmente hay " + carrito.length + " productos en el carrito.\n 1.Pulsera $450\n 2.Mochila $2200\n 3.Reloj digital $3100\n 4.Reloj Analogico $2000\n 5.Gorras $800\n 0.Volver al menu anterior." ));

        if (seleccionarProducto === 1) {
            totalProductos = suma(totalProductos, pulsera.precio)
            listaCompras.push(pulsera)
            carrito.push ( pulsera.nombre + ' $' + pulsera.precio )
        }if (seleccionarProducto === 2) {
            totalProductos = suma(totalProductos, mochila.precio)
            listaCompras.push(mochila)
            carrito.push (mochila.nombre + ' $' + mochila.precio)
        }if (seleccionarProducto === 3) {
            totalProductos = suma(totalProductos, relojDigital.precio)
            listaCompras.push(relojDigital)
            carrito.push(relojDigital.nombre + ' $' + relojDigital.precio)
        }if (seleccionarProducto === 4) {
            totalProductos = suma(totalProductos, relojAnalogico.precio)
            listaCompras.push(relojAnalogico)
            carrito.push (relojAnalogico.nombre + ' $' + relojAnalogico.precio)
        }if (seleccionarProducto === 5) {
            totalProductos = suma(totalProductos, gorras.precio)
            listaCompras.push(gorras)
            carrito.push (gorras.nombre + ' $' + gorras.precio)
        }if (seleccionarProducto >= 6) {
            alert("Seleccione por favor una opcion valida")
        }

    }while (seleccionarProducto !== 0)

}

function mostrarTotal(resultado) {
    alert("El total a pagar es: $" + resultado + "\n !!muchas gracias por su compra!!");
    
}

function metodoPago() {
    let transferencia = totalProductos
    let efectivo = totalProductos * 0.90
    let credito = totalProductos * 1.15
    let metodoPago = 0

        metodoPago = parseInt(prompt("El total en el carrito es de: $" + totalProductos + "\nComo desea pagarlo?\n 1.Efectivo\n 2.Transferencia\n 3.Tarjeta de credito"));
        if (metodoPago === 1) {
            alert("Se ha aplicado un descuento del 10%");
            totalProductos = efectivo;

        }if (metodoPago === 2) {
            totalProductos = transferencia;

        }if (metodoPago === 3) {
            alert("Se ha aplicado un recargo del 15%");
            totalProductos = credito;

        }if (metodoPago >= 4) {
            alert("Seleccione una opcion valida")
            
        }
}
function reinicioCarrito() {
    alert("Se han eliminado todos los productos del carrito")
    totalProductos = multiplicacion(totalProductos, 0);
    carrito = []
    listaCompras = []
}

function revisarCarrito() {

    alert ("Los productos en su carrito son:\n" + carrito.join("\n") + "\n Total a pagar: $" + totalProductos)
}

function listaFiltrada() {
    const relojes = listaCompras.filter((listaCompras) => listaCompras.nombre.includes('Reloj'))
    const baratos = listaCompras.filter((listaCompras) => listaCompras.precio < 2000)
    console.log("Relojes vendidos")
    console.log(relojes)
    console.log("productos baratos")
    console.log(baratos)
}

usuario()
menu()
listaFiltrada()
