var usuarios = [];

var movimiento1 ={fecha: new Date(2015,10,7),
                      concepto:"Compra masiva",
                      importe: 1500, 
                      saldo:10000 };
var movimiento2 = {fecha: new Date(2018,8,25),
                       concepto:"Pc nuevo",
                       importe: 1200, 
                       saldo:21400};
var movimiento3 = {fecha: new Date(2014,4,2),
                        concepto:"Coche segunda mano",
                        importe: 2400, 
                        saldo:32400};
var movimiento4 = {fecha: new Date(2003,9,21),
                            concepto:"Casa",
                            importe: 10200, 
                            saldo:3210};

var cuenta1 = {numCuenta:11111111111, movimientos: [movimiento1, movimiento2]};
var cuenta2 = {numCuenta:22222222222, movimientos: [movimiento3, movimiento4]};

var perfil1  = {dni: "72849750X", contra:987654, cuenta: [cuenta1, cuenta2]};
var perfil2 = {dni: "89854398B", contra:123456, cuenta: [cuenta1]};

usuarios.push(perfil1,perfil2);


function generarBotones(){
    var numsClave = [0,1,2,3,4,5,6,7,8,9];
    numsClave = numsClave.sort(function() {return Math.random() - 0.5});
    var nums = $('#botonesNums');
    for (i=0; i<numsClave.length;i++){
        var button =  document.createElement("input");

        button.setAttribute("type","button");
        button.value=numsClave[i];
        button.innerHTML=numsClave[i];
        button.addEventListener("click", crearClave);
   
        nums.append(button);
     
    } 
}  

function crearClave(){

    var a =  event.target.value;
    let nums = $(':input#clave');
    let numsvalor= nums.val();
    if(numsvalor.length>=6){
        alert('La clave tiene que tener 6 numeros');
    }else{
        nums.val(numsvalor + a);
    }
}

function login(){
    let dnivalor = $('#DNI').val();
    let clave = $('#clave').val();
    if(usuarios.find(user => dnivalor == user.dni && clave == user.contra)){
        document.cookie = "dniCookie="+dnivalor;
        $(location).attr("href","banco.html");
    }else{
        alert("Login incorrecto");
    }

}
function mostrarCuentas(){
    var splitCookie= document.cookie.split("=");
    var dniCookie= splitCookie[1];
    var dniusu = usuarios.find(user=>dniCookie ===user.dni);
    console.log(dniusu.cuenta.length);
    for (x=0;x<dniusu.cuenta.length;x++){
		$("#cuentas").append('<option value="'+x+'">'+dniusu.cuenta[x].numCuenta+'</option>');
    }
}

function crearTabla(){
    movimientosCuenta = obtenerArrayMov();
    rellenarTabla(movimientosCuenta);
   
}
function obtenerArrayMov(){
    var splitCookie= document.cookie.split("=");
    var dniCookie= splitCookie[1];
    var dniusu = usuarios.find(user=>dniCookie ===user.dni);
    var movimientosCuenta= dniusu.cuenta[$('#cuentas').val()].movimientos;
    return movimientosCuenta;
}
function ordenarTablas(){
    var arrayOrdenado = [];
    movimientosCuenta = obtenerArrayMov();
     if($('#fecha').prop('checked')){
        arrayOrdenado = movimientosCuenta.sort((a, b) => b.fecha - a.fecha);
     }else{
        arrayOrdenado = movimientosCuenta.sort((a, b) => b.importe - a.importe);
     }
     rellenarTabla(arrayOrdenado);
}
function rellenarTabla(movimientosCuenta){
    $('#tablaMovimientos').empty();
    $('#tablaMovimientos').append('<tbody><th>Concepto</th><th>Importe</th><th>Saldo</th><th>Fecha</th></tbody>');
    for (x = 0 ; x < movimientosCuenta.length; x++) {
        $('#tablaMovimientos tr:last').after('<tr><td>'+movimientosCuenta[x].concepto+'</td><td>'+movimientosCuenta[x].importe+'</td><td>'+movimientosCuenta[x].saldo+'</td><td>'+movimientosCuenta[x].fecha+'</td></tr>');
    }
}