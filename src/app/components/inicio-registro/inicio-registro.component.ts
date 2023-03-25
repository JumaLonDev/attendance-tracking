import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
//import { CargarScriptsService } from '../../services/cargar-scripts.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inicio-registro',
  templateUrl: './inicio-registro.component.html',
  styleUrls: ['./inicio-registro.component.css']
})
export class InicioRegistroComponent implements OnInit {
  UsuarioForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UsuarioService, private router: Router, private Aroute: ActivatedRoute) {

      this.UsuarioForm = this.fb.group({
        email:['', Validators.required], 
        password:['', Validators.required], 
        nombre:['', Validators.required], 
        apellido:['', Validators.required],
        num_documento:['', Validators.required], 
        num_contacto:['', Validators.required],
        animation:['', Validators.required]
      });
    // Variables animation
   };

   
   ngOnInit(): void {
    localStorage.removeItem('token');
  }
  Animacion(opcion: string){
    switch(opcion){
      case 'iniciarsesion':
      document.getElementById('loginRegistro')?.classList.remove('lgr');
      document.getElementById('registro')?.classList.remove('registroActivo');
      document.getElementById('registro')?.classList.add('registroInactivo');
      document.getElementById('login')?.classList.remove('loginInactivo');
      document.getElementById('login')?.classList.add('loginActivo');
      break;
      case 'registrarse':
      document.getElementById('loginRegistro')?.classList.add('lgr');
      document.getElementById('login')?.classList.remove('loginActivo');
      document.getElementById('login')?.classList.add('loginInactivo');
      document.getElementById('registro')?.classList.remove('registroInactivo');
      document.getElementById('registro')?.classList.add('registroActivo');
      break;
    }
  }
  // Fin animacion
  
  logear(): void {
   const dataUser: any = {
     correoLogin: this.UsuarioForm.get('email')?.value,
     contrasenaLogin: this.UsuarioForm.get('password')?.value
   }

   this.userService.login(dataUser).subscribe(data => {
    localStorage.setItem('token', data.token);
    this.router.navigate(['/inicio'])
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Bienvenido'
    })
   },error => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o contraseña incorrecto'
    })
    return false;
  })
  }

  registrase():void{
    const dataUser:any = {
      nombre: this.UsuarioForm.get('nombre')?.value,
      apellido: this.UsuarioForm.get('apellido')?.value,
      correo: this.UsuarioForm.get('email')?.value, 
      num_documento: this.UsuarioForm.get('num_documento')?.value, 
      num_contacto: this.UsuarioForm.get('num_contacto')?.value,
      contrasena: this.UsuarioForm.get('password')?.value
    }

    if(dataUser.nombre == '' || dataUser.apellido =='' || dataUser.correo == '' || dataUser.num_documento == '' ||  dataUser.num_contacto == '', dataUser.contrasena == '' ){
      Swal.fire({
        icon: 'error',
        title: 'Error al registrase',
        text: 'Hay Campos vacios',
      })
    }else{
      this.userService.createNewUSer(dataUser).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Registro Exitoso',
          text: 'Usurio registrado exitosamente',
        })
        this.UsuarioForm.reset();
      }, error => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Error al registrar el usuario'
        })
        return false;
      })
    }
   };
}
