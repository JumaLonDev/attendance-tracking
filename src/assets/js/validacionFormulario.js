window.addEventListener('load', ()=>{

    const formularioL = document.querySelector('.formularioL');
    const formularioR = document.querySelector('.formularioR');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const Ncontrato = document .querySelector('.Ncontracto');
    const NombreC = document.querySelector('.NombreC');
    const RPassword = document.querySelector('.RPassword');

    formularioL.addEventListener('submit', (a)=>{
        a.preventDefault();
        ValidarFormulario();
    });

    formularioR.addEventListener('submit', (a)=>{
        a.preventDefault();
        ValidarFormulario();
    });

    
    const ValidarFormulario = ()=> {
        emailValue = email.value.trim();
        passwordValue = password.value.trim();
        NcontractoValue = Ncontrato.value.trim();
        NombreCValue = NombreC.value.trim();
        RPasswordValue = RPassword.trim();


        //Validación del campo email 
        if(!emailValue){
            failValidation(email,'Campo en blanco');
            return false;
        }else if(!emailValue(emailValidation)){
            failValidation(email, 'Formato Icorrecto');
            return false;
        }else{
            okValidation(email, '');
        }

        //Validación de la contraseña

        //variable para la cadena de validacion de contraseña.
        const er = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,18}$/;
        //validacion de la contraseña.
        if(!passwordValue)
        {
            failValidation(password, 'Campo en blanco');
            return false;
        }else if(passwordValue.length < 8)
        {
            failValidation(password, 'Debe tener minimo 8 caracterez');
            return false;
        }else if(!passwordValue.match(er))
        {
            failValidation(password, 'Debe tener una mayuscula, minusculas y numeros');
            return false;
        }else{
            okValidation(password, '');
        }

        //Validación del número de contrato
        if(!NcontractoValue){
            failValidation(Ncontrato, "Campo en blanco");
            return false; 
        }else if(NcontractoValue.length < 8){
            failValidation(Ncontrato, 'Debe tener minimo 8 caracterez');
            return false;
        }else if(!NcontractoValue.match(er)){
            failValidation(Ncontrato, 'Debe tener una mayuscula, minusculas y numeros');
            return false;
        }else{
            okValidation(Ncontrato, '');
        }

        // Validación del  nombre del Usuario

        if(!NombreCValue){
            failValidation(NombreC, 'El campo está en blanco');
            return false;
        }else if(isNaN(NombreCValue)){
            failValidation(Ncontrato, 'El nombre no puede contener núemros');
            return false;
        }else {
            okValidation(Ncontrato, '');
        }
    }
    const emailValidation = (email) =>{
        return /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(email);
    }

    //Objeto false para las validaciones.
    const failValidation = (input, sms) =>
    {
        const form = input.parentElement;
        const notify = form.querySelector('.error');
        notify.innerText = sms;
        form.className = 'error';
    }

    //Objeto true para las validaciones.
    const okValidation = (input, sms) =>
    {
        const form = input.parentElement;
        const notify = form.querySelector('.error');
        notify.innerText = sms;
        form.className = 'ok';
    }
})