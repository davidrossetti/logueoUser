

let usuarioConEmail=" ";
let contrasenia=" ";
let usuarioTieneArroba=false;
let usuarioContraseñaTieneNumero=false;
let usuarioContraseñaTieneLongitudMayorANueve=false;


//Verifica si el mail de  usuario tiene @:
function validacionArroba(usuarioConEmail) {
  contadorArroba = false;
  for (let i = 0; i < usuarioConEmail.length; i++) {
    if (usuarioConEmail[i] == "@") {
      contadorArroba = true;
      usuarioTieneArroba=true;
      alert(`Se verificar Correo con @`);
    }
  }
  if (contadorArroba == false) {
    alert(`Correo sin @.ingrese nuevo mail`);
    usuarioTieneArroba=false;
  }else{
    usuarioTieneArroba=true;
  }
  
}

//Tira una alerta si longitud de contraseña es menor a  9:
function validezLongitudContraseña(contrasenia) {
  if (contrasenia.length < 9) {
    alert("contraseña insegura");
    usuarioContraseñaTieneLongitudMayorANueve=false;
  }else{
    usuarioContraseñaTieneLongitudMayorANueve=true;
  }
}

//Verifica si dentro de la  contraseña tiene algun numero:
function validezNumeroEnContraseña(contrasenia) {
  const numeros = /[0,1,2,3,4,5,6,7,8,9]/;
  let numeroEnContrasenia = false;
  for (let i = 0; i < contrasenia.length; i++) {
    if (contrasenia[i].match(numeros)) {
      numeroEnContrasenia = true;
    }
  }
  if (numeroEnContrasenia == false) {
    alert(
      "Contraseña ingresada sin caracteres alfanuméricos"
    )
    usuarioContraseñaTieneNumero=false;
    }else{
      usuarioContraseñaTieneNumero=true;
    }    
}
//Crea una contraseña nueva:
function contraseñaNueva() {
     contraseniaIngresada=prompt("ingrese contraseña");
     validezLongitudContraseña(contraseniaIngresada);
     validezNumeroEnContraseña(contraseniaIngresada);
     if(usuarioContraseñaTieneNumero==true &&
       usuarioContraseñaTieneLongitudMayorANueve==true){
      alert("Se realizo cambio de contraseña");
      contrasenia=contraseniaIngresada;
     }else{
      alert("No se realizo cambio de contraseña")
     }
}
//Crea un nuevo usuario:
function usuarioNuevo(){
  usuarioIngresado=prompt("ingrese usuario");
  validacionArroba(usuarioIngresado);
  if(usuarioIngresado!=usuarioConEmail && usuarioTieneArroba==true){
    alert ("usuario creado con exito");
    usuarioConEmail=usuarioIngresado;
  }
  else{
    alert("usuario existente o invalido")
  }
}
//Verifica usuario y contraseña, si coinciden o no , tira un alerta de estado:
function ingresoPlataforma() {
  let IngresoNombre = prompt("introduce nombre").toLowerCase();
  let IngresoUsuario = prompt("introduce usuario").toLowerCase();
  let IngresoContrasenia = prompt("introduce contraseña").toLowerCase();
 
  if (IngresoUsuario == usuarioConEmail && IngresoContrasenia == contrasenia) {
    alert(`Bienvenido ${IngresoNombre}`);
  } else if (
    IngresoUsuario != usuarioConEmail &&
    IngresoContrasenia != contrasenia
  )
    alert(`usuario y contraseña incorrecta`);
  else if (IngresoUsuario != usuarioConEmail) {
    alert(`usuario incorrecto`);
  } else {
    alert(`contraseña incorrecta`);
  }
}
