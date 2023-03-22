import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { CargarScriptsService } from '../../services/cargar-scripts.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inicio-registro',
  templateUrl: './inicio-registro.component.html',
  styleUrls: ['./inicio-registro.component.css']
})
export class InicioRegistroComponent implements OnInit {
  UsuarioForm: FormGroup;
  constructor(private _CargarScripts:CargarScriptsService, private fb: FormBuilder, private userService: UsuarioService, private router: Router, private Aroute: ActivatedRoute) {
      _CargarScripts.Carga(["animation"]);

      this.UsuarioForm = this.fb.group({
        email:['', Validators.required], 
        password:['', Validators.required], 
        nombre:['', Validators.required], 
        apellido:['', Validators.required],
        num_documento:['', Validators.required], 
        num_contrato:['', Validators.required], 
        num_contacto:['', Validators.required],
        correo_respaldo: ['', Validators.required]
      });
    // Variables animation
   };

   
   ngOnInit(): void {
    localStorage.removeItem('token');
  }
  
  logear(): void {
   const dataUser: any = {
     correoLogin: this.UsuarioForm.get('email')?.value,
     contrasenaLogin: this.UsuarioForm.get('password')?.value
   }

   this.userService.login(dataUser).subscribe(data => {
    localStorage.setItem('token', data.token);
    this.router.navigate(['/inicio'])
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido!',
      text: 'Logueado correctamente',
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
      correo_respaldo: this.UsuarioForm.get('correo_respaldo')?.value,
      num_documento: this.UsuarioForm.get('num_documento')?.value, 
      num_contrato: this.UsuarioForm.get('num_contrato')?.value, 
      num_contacto: this.UsuarioForm.get('num_contacto')?.value,
      contrasena: this.UsuarioForm.get('password')?.value
    }

    if(dataUser.nombre == '' || dataUser.apellido =='' || dataUser.correo == '' || dataUser.correo_respaldo == '' || dataUser.num_documento == '', dataUser.num_contrato, dataUser.num_contacto == '', dataUser.contrasena == '' ){
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
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al registrar el usuario'
        })
        return false;
      })
    }
   };
}
