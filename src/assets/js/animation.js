document.getElementById("btn-sesión").addEventListener("click", iniciarSesion)
document.getElementById("btn-registro").addEventListener("click", register)

//Declarar
var loginRegistro = document.querySelector(".loginRegistro");
var formularioLogin = document.querySelector(".login");
var formularioRegister = document.querySelector(".registro");
var fondoLogin = document.querySelector(".fondo-login");
var fondoRegistro = document.querySelector(".fondo-registro");

console.log("Hola MUNDO");


function iniciarSesion(){
    formularioRegister.style.display = "none";
    loginRegistro.style.left = "0";
    formularioLogin.style.display = "block";
    fondoRegistro.style.opacity = "1";
    fondoLogin.style.opacity = "0"
}
function register(){
    formularioRegister.style.display = "block";
    loginRegistro.style.left = "410px";
    formularioLogin.style.display = "none";
    fondoRegistro.style.opacity = "0";
    fondoLogin.style.opacity = "1"
}