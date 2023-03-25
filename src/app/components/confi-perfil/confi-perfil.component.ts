import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confi-perfil',
  templateUrl: './confi-perfil.component.html',
  styleUrls: ['./confi-perfil.component.css']
})
export class ConfiPerfilComponent implements OnInit {
  formularioR:FormGroup;
  Roles = [1,2,3];
  token = localStorage.getItem('token');
  datasUser: any; 
  data = this.userService.tknDecode(this.token);
  id_rol: any; 
  estado_usuario: any;


  constructor(private fb: FormBuilder,  private userService: UsuarioService) {
    this.formularioR = this.fb.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      correo:['', Validators.required],
      correo_respaldo:['', Validators.required],
      num_documento:['', Validators.required],
      num_contacto:['', Validators.required],
      num_contrato:['', Validators.required],

    })
   }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById():void{
    this.userService.getUserById(this.data.id_usuario).subscribe(data => {
      this.id_rol = data.id_rol,
      this.estado_usuario = data.estado_usuario
      this.formularioR.setValue({
        nombre:data.nombre,
        apellido: data.apellido,
        correo: data.correo,
        correo_respaldo: data.correo_respaldo,
        num_documento: data.num_documento, 
        num_contacto: data.num_contacto,
        num_contrato:data.num_contrato,
      })
    })
  }
  updateUserById():void{
    const dataUser = {
      nombre: this.formularioR.get('nombre')?.value, 
      apellido: this.formularioR.get('apellido')?.value, 
      correo: this.formularioR.get('correo')?.value, 
      correo_respaldo: this.formularioR.get('correo_respaldo')?.value, 
      num_documento: this.formularioR.get('num_documento')?.value, 
      num_contrato: this.formularioR.get('num_contrato')?.value, 
      num_contacto: this.formularioR.get('num_contacto')?.value,
      id_rol: this.id_rol, 
      estado_usuario: this.estado_usuario
    }
    this.userService.updateUserById(this.data.id_usuario,dataUser).subscribe(data => {
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
        title: 'Usuario Actualizado correctamente'
      })
      this.refresh();
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
        title: 'Error al actualizar el usuario'
      })
    })
  }
  refresh(): void { window.location.reload(); }
}
