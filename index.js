let nombreUsuario = prompt("Ingrese su nombre por favor")

class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = parseInt (precio);
    }
}

const pulsera = new Producto("Pulsera", 450);
const mochila = new Producto("Mochila", 2200);
const relojDigital = new Producto("Reloj Digital", 3100);
const relojAnalogico = new Producto("Reloj Analogico $2000", 2000);
const gorras = new Producto("Gorras", 800);
let totalProductos = 0

let carrito = [];

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

function menu() {
    let opcion = 0;
    
    opcion = parseInt(prompt("Bienvenido " + nombreUsuario + ", seleccione una opcion para continuar. (ESC para salir)\nEn el carrito hay actualmente " + carrito.length + " Productos.\n 1.Agregar productos al carrito\n 2.Pagar el total de la compra\n 3.Reiniciar carrito\n 4.Mostrar productos dentro del carrito"));
    do{
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
menu()
function agregarProducto() {
    let seleccionarProducto = 0
    do {
        seleccionarProducto = parseInt(prompt("Seleccione el producto que desea agregar al carrito.\n su total hasta ahora es $" + totalProductos + ".\n 1.Pulsera\n 2.Mochila\n 3.Reloj digital\n 4.Reloj Analogico\n 5.Gorras\n 0.Volver al menu anterior."));

        if (seleccionarProducto === 1) {
            totalProductos = suma(totalProductos, pulsera.precio)
            carrito.push ('Pulsera $450')
        }if (seleccionarProducto === 2) {
            totalProductos = suma(totalProductos, mochila.precio)
            carrito.push ('Mochila $2200')
        }if (seleccionarProducto === 3) {
            totalProductos = suma(totalProductos, relojDigital.precio)
            carrito.push('Reloj Digital $3100')
        }if (seleccionarProducto === 4) {
            totalProductos = suma(totalProductos, relojAnalogico.precio)
            carrito.push ('Reloj Analogico $2000')
        }if (seleccionarProducto === 5) {
            totalProductos = suma(totalProductos, gorras.precio)
            carrito.push ('Gorras $800')
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
}

function revisarCarrito() {

    alert (carrito.join("\n") + "\n Total a pagar: $" + totalProductos)
}



