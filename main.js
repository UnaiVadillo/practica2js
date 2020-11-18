var cuenta1 = {id: 1, transacciones:[transaccion = {fecha: new Date(2006,7,15), concepto:"Ingreso",importe: 123, saldo:200000 }, transaccion = {fecha: new Date(2000,11,17), concepto:"Impuestos",importe: 12312312, saldo:120000 }, transaccion = {fecha: new Date(2020,11,17), concepto:"coche nuevo",importe: 3333, saldo:160000 } ]}
var cuenta2 = {id: 2, transacciones:[transaccion = {fecha: new Date(2019,2,23), concepto:"ASd",importe: 1231231, saldo:123123 }, transaccion = {fecha: new Date(2003,11,17), concepto:"AAA",importe: 111, saldo:120000 }, transaccion = {fecha: new Date(1721,11,17), concepto:"coche nuevo",importe: 2223, saldo:160000 } ]}
var perfil1  = {dni: "72849750X", contra:987654, cuenta: [cuenta1,cuenta2]};
var perfil2 = {dni: "89854398B", contra:123456};

var cuentas= cuentas.push(perfil1,perfil2);
function generarBotones(){
    var numsClave = [0,1,2,3,4,5,6,7,8,9];
    numsClave = numsClave.sort(function() {return Math.random() - 0.5});
    var nums = $('#botonesNums');
    for (i=0; i<numsClave.length;i++){
        var button =  document.createElement("input");

        button.setAttribute("type","button");
        button.value=numsClave[i];
        button.innerHTML=numsClave[i];
        button.addEventListener("onclick", crearClave);
   
        nums.append(button);
        console.log(nums);
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
    let dni = $(':input#DNI');
    let dnivalor = dni.val();

    let clave = $(':input#clave').val();
    if( cuentas.find(user => dnivalor == user.dni && clave == user.contra)){
        alert("Login correcto");
        dniCookie = dnivalor;
        document.cookie = "dniLogged ="+dniCookie;
        window.location = "banco.html";
    }

}
$(document).ready(function(){
   
});