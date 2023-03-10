window.addEventListener('load', ()=>{

    const formularioL = document.querySelector('.formularioL');
    const formularioR = document.querySelector('.formularioR');
    const email = document.querySelector('#email');
    const emailL = document.querySelector('.emailL');
    const passwordL = document.querySelector('.passwordL');
    const password = document.querySelector('.password');
    const Ncontrato = document .querySelector('.Ncontracto');
    const NombreC = document.querySelector('.NombreC');
    const RPassword = document.querySelector('.RPassword');

    formularioL.addEventListener('submit', (a)=>{
        a.preventDefault();
        ValidarFormulario();
        console.log('Login');
    });

    formularioR.addEventListener('submit', (e)=>{
        e.preventDefault();
        ValidarFormulario();
        console.log('Registro');
    });

    
    const ValidarFormulario = ()=> {
        emailValue = email.value.trim();
        passwordValue = password.value.trim();
        NcontractoValue = Ncontrato.value.trim();
        NombreCValue = NombreC.value.trim();
        RPasswordValue = RPassword.value.trim();
        emailLValue = emailL.value.trim();
        passwordLValue = passwordL.value.trim();


        //Validación Login
        if(emailLValue === '')
        {
            failValidation(emailL, 'Campo en blanco');
        }else if(!emailValidation(emailLValue))
        {
            failValidation(emailL, 'Formato Incorrecto');
        }else{
            okValidation(emailL, '')
        }

        if(passwordLValue === ''){
            failValidation(passwordL, 'Campo en blanco');
            console.log('password L'); 
           
        }else{
            okValidation(passwordL, '');
        }


        //Fin Validación Login
        


        //Validación del campo email 
        if(emailValue === '')
        {
            failValidation(email, 'Campo en blanco');
        }else if(!emailValidation(emailValue))
        {
            failValidation(email, 'Formato Incorrecto');
        }else{
            okValidation(email, '')
        }

        //Validación de la contraseña

        //variable para la cadena de validacion de contraseña.
        const er = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,18}$/;
        //validacion de la contraseña.
        if(!passwordValue)
        {
            failValidation(password, 'Campo en blanco');
           
        }else if(passwordValue.length < 8)
        {
            failValidation(password, 'Debe tener minimo 8 caracteres');
           
        }else if(!passwordValue.match(er))
        {
            failValidation(password, 'Debe tener una mayúscula, minúsculas y números');
           
        }else{
            okValidation(password, '');
        }

        //Validación del número de contrato
        if(!NcontractoValue){
            failValidation(Ncontrato, "Campo en blanco");
            
        }else if(NcontractoValue.length < 8){
            failValidation(Ncontrato, 'Debe tener minimo 8 caracteres');
           
        }else if(!NcontractoValue.match(er)){
            failValidation(Ncontrato, 'Debe tener una mayúscula, minúsculas y números');
           
        }else{
            okValidation(Ncontrato, '');
        }

        // Validación del  nombre del Usuario

        if(!NombreCValue){
            failValidation(NombreC, 'El campo está en blanco');
           
        }else if(isNaN(NombreCValue)){
            failValidation(Ncontrato, 'El nombre no puede contener números');
           
        }else {
            okValidation(Ncontrato, '');
        }
    }
    const emailValidation = (email) =>{
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
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

    console.log("Hola");
})