
var perfil1  = {dni: "72849750X", contra:987654};
var perfil2 = {dni: "89854398B", contra:123456};
var cuentas = [];
cuentas.push(perfil1,perfil2);
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