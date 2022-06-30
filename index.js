
class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = parseInt (precio);
    }
}
let nombreUsuario
let totalProductos = 0
const pulsera = new Producto("Pulsera $450", 450);
const mochila = new Producto("Mochila $2200", 2200);
const relojDigital = new Producto("Reloj Digital $3100", 3100);
const relojAnalogico = new Producto("Reloj Analogico $2000", 2000);
const gorras = new Producto("Gorras $800", 800);


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

function usuario(){
    nombreUsuario = prompt("Ingrese su nombre por favor")
}

function menu() {
    let opcion = 0;
    do{
    opcion = parseInt(prompt("Bienvenido " + nombreUsuario + ", seleccione una opcion para continuar. (ESC para salir)\nEn el carrito hay actualmente " + carrito.length + " Productos.\n 1.Agregar productos al carrito\n 2.Pagar el total de la compra\n 3.Reiniciar carrito\n 4.Mostrar productos dentro del carrito"));
    
        switch (opcion) {
            case 1:
                agregarProducto()
                break
            case 2:
                metodoPago()
                break
            case 3:
                reinicioCarrito()
                break
            case 4:
                revisarCarrito()
                break
            default: 
            alert("seleccione una opcion valida!!")
            
        } 
    } while (opcion !== "ESC")
}

function agregarProducto() {
    do {
        agregarProducto = parseInt(prompt("Seleccione el producto que desea agregar al carrito.\n su total hasta ahora es $" + totalProductos + ".\n 1.Pulsera\n 2.Mochila\n 3.Reloj digital\n 4.Reloj Analogico\n 5.Gorras\n 0.Volver al menu anterior."));
        if (agregarProducto === 1) {
            totalProductos = suma(totalProductos, pulsera.precio)
            carrito.push(pulsera.nombre)
        }if (agregarProducto === 2) {
            totalProductos = suma(totalProductos, mochila.precio)
            carrito.push(mochila.nombre)
        }if (agregarProducto === 3) {
            totalProductos = suma(totalProductos, relojDigital.precio)
            carrito.push(relojDigital.nombre)
        }if (agregarProducto === 4) {
            totalProductos = suma(totalProductos, relojAnalogico.precio)
            carrito.push(relojAnalogico.nombre)
        }if (agregarProducto === 5) {
            totalProductos = suma(totalProductos, gorras.precio)
            carrito.push(gorras.nombre)
        }if (agregarProducto >= 6) {
            alert("Seleccione por favor una opcion valida")
        }

    }while (agregarProducto !== 0)
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
            mostrarTotal(totalProductos)   
            
        }if (metodoPago === 2) {
            totalProductos = transferencia;
            mostrarTotal(totalProductos)
    
        }if (metodoPago === 3) {
            alert("Se ha aplicado un recargo del 15%");
            totalProductos = credito;
            mostrarTotal(totalProductos)
            
        }if (metodoPago >= 4) {
            alert("Seleccione una opcion valida")
            
        }
}
function reinicioCarrito() {
    alert("Se han eliminado todos los productos del carrito")
    totalProductos = multiplicacion(totalProductos, 0);
    carrito = []
    menu()
}
function revisarCarrito() {
    alert (carrito.join("\n") + "\n Total a pagar: $" + totalProductos)
    menu()
}
usuario()
menu()


