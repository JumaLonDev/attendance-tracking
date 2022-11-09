// Inicio esperar que la p+agina está cargada 
window.addEventListener('load', () => {

    // Inicio igualacion de las variables que está en fomulario
    var loginRegistro = document.querySelector(".loginRegistro");
    var formularioLogin = document.querySelector(".login");
    var formularioRegister = document.querySelector(".registro");
    var fondoLogin = document.querySelector(".fondo-login");
    var fondoRegistro = document.querySelector(".fondo-registro");
    // Fin igualacion de las variables que está en fomulario


    // Inicio Funcionalidad a los botones 
    document.getElementById("btn-sesión").addEventListener("click", ()=>{
        formularioRegister.style.display = "none";
        loginRegistro.style.left = "0";
        formularioLogin.style.display = "block";
        fondoRegistro.style.opacity = "1";
        fondoLogin.style.opacity = "0"
    })
    
    document.getElementById("btn-registro").addEventListener("click", ()=>{
        formularioRegister.style.display = "block";
        loginRegistro.style.left = "410px";
        formularioLogin.style.display = "none";
        fondoRegistro.style.opacity = "0";
        fondoLogin.style.opacity = "1"
    })
     // Fin Funcionalidad a los botones 
})
// Fin esperar que la p+agina está cargada 