//Declaración de variables
var nombreUsuario = "Ignacio Farías";
var saldoCuenta = 5000;
var limiteExtraccion = 2500;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = "1234567";
var cuentaAmiga2 = "7654321";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar

function sumarDinero(dinero){
    saldoCuenta += dinero;
}

function restarDinero(dinero){
    saldoCuenta -= dinero;
}

function validoMonto(numero){
    if(isNaN(numero)){
        alert("Solo se pueden usar números");
        return false;
    } else{
        if(numero < 0){
            alert("Solo se pueden ingresar números enteros");
            return false;
        }
    }
    return true;
}

function cambiarLimiteDeExtraccion() {
    var limite = prompt("Introduzca su nuevo límite");
    if(validoMonto(limite) == false){
        return;
    }
    limiteExtraccion = parseInt(limite);
    actualizarLimiteEnPantalla();
    alert("Su nuevo límite es:$" + parseInt(limite));
}

function extraerDinero() {
    var saldoAnterior = saldoCuenta;
    var limExtrac = limiteExtraccion;
    var billetes = 100;
    var retiro = prompt("Retira la cantidad de dinero");
    if(retiro > limExtrac){
        alert("La cantidad de dinero que deseas extraer es mayor a su límite de extracción");
        return;
    }
    if(retiro % billetes){
        alert("Solo se puede extraer billetes de 100.");
        return;
    }

    if(validoMonto(retiro) == false){
        return;
    }

    if(retiro <= saldoCuenta){
        restarDinero(parseInt(retiro));
        actualizarSaldoEnPantalla();
        alert("Saldo anterior:$" + saldoAnterior + "\nSe retiró:$" + parseInt(retiro) + "\nAhora tiene:$" + saldoCuenta);
    }   else{
            if(saldoCuenta < retiro){
            alert("No hay saldo suficiente en la cuenta para realizar esta operación");
            }
    }
}

function depositarDinero() {
    var saldoAnterior = saldoCuenta;
    var ingreso = prompt("Ingresa la cantidad de dinero");
    if(validoMonto(ingreso) == false){
        return;
    }
    sumarDinero(parseInt(ingreso));
    actualizarSaldoEnPantalla();
    alert("Saldo anterior:$" + saldoAnterior + "\nSe depositó:$" +  parseInt(ingreso) + "\nAhora tiene:$" + saldoCuenta);
}

function pagarServicio() {
    var saldoAnterior = saldoCuenta;
    var servicio = prompt("Ingrese el número que corresponda al servicio que quiere pagar" + "\n1-Agua" + "\n2-Luz" + "\n3-Internet" + "\n4-Teléfono");
    if(validoMonto(servicio) == false){
        return;
    }
    var numeroIngresado = parseInt(servicio);
    if(agua, telefono, luz, internet > saldoCuenta){
        alert("No hay dinero suficiente en la cuenta");
        return;
    }
    switch(numeroIngresado){
        case 1:
            restarDinero(agua);
            alert("Se pagó el servicio agua." + "\nSaldo anterior:$" + saldoAnterior + "\nSaldo descontado:$" + agua + "\nSaldo actual:$" + saldoCuenta);
            break;
        case 2:
            restarDinero(telefono);
            alert("Se pago el servicio teléfono." + "\nSaldo anterior:$" + saldoAnterior + "\nSaldo descontado:$" + telefono + "\nSaldo actual:$" + saldoCuenta);
            break;
        case 3:
            restarDinero(luz);
            alert("Se pagó el servicio luz." + "\nSaldo anterior:$" + saldoAnterior + "\nSaldo descontado:$" + luz + "\nSaldo actual:$" + saldoCuenta);
            break;
        case 4:
            restarDinero(internet);
            alert("Se pagó el servicio internet." + "\nSaldo anterior:$" + saldoAnterior + "\nSaldo descontado:$" + internet + "\nSaldo actual:$" + saldoCuenta);
            break;
        default: alert("No se puede realizar la función.");
    }
    actualizarSaldoEnPantalla();
}

function transferirDinero() {
    var transferencia = prompt("Ingrese el monto que desea transferir");
    if(validoMonto(transferencia) == false){
        return;
    }
    var saldo = parseInt(transferencia);
    var cuenta = prompt("Ingrese el número correspondiente a la cuenta destino" + "\n1-Cuenta amiga 1:" + cuentaAmiga1 + "\n2-Cuenta amiga 2:" + cuentaAmiga2);
    if(validoMonto(cuenta) == false){
        return;
    }
    var amiga = parseInt(cuenta);
    if(parseInt(transferencia) > saldoCuenta){
        alert("No hay suficiente dinero en la cuenta");
        return;
    }
    switch(amiga){
        case 1:
            restarDinero(saldo);
            alert("Se han transferido $" + saldo + "\nCuenta destino:" + cuentaAmiga1);
            break;
        case 2:
            restarDinero(saldo);
            alert("Se han transferido $" + saldo + "\nCuenta destino:" + cuentaAmiga2);
            break;
        default: alert("La cuenta seleccionada no existe");
    }
    actualizarSaldoEnPantalla();
}

function iniciarSesion() {
    var contraseña = "3710";
	var ingreso = prompt("ingrese la contraseña");
	if(ingreso == contraseña){
        alert("Acceso autorizado");
    } else{
        alert("El nombre o la contraseña no concuerdan, por su seguridad el saldo quedara en 0.");
        saldoCuenta = 0;
        }
}

iniciarSesion();

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}