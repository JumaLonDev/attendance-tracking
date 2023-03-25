import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PqrsService } from 'src/app/services/pqrs/pqrs.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent implements OnInit {
  pqrsForm:FormGroup;
  token = localStorage.getItem('token');
  data = this.userService.tknDecode(this.token);
  dataUserPqrs: any[] = [];
  constructor(private fb: FormBuilder, private pqrsService: PqrsService, private userService: UsuarioService) {
    this.pqrsForm = this.fb.group({
      tipo_pqrs:['',Validators.required],
      text_pqrs:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getPqrsByUser();
  }

  createNewPqrs(){
    const dataPqrs = {
      id_usuario: this.data.id_usuario,
      tipo_pqrs: this.pqrsForm.get('tipo_pqrs')?.value, 
      text_pqrs: this.pqrsForm.get('text_pqrs')?.value
    }

    this.pqrsService.createNewpqrs(dataPqrs).subscribe(data => {
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
          title: 'PQRS Enviado correctamente'
        })
        this.pqrsForm.reset();
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
        title: 'Error al Enviar el PQRS'
      })
    })
  }

  getPqrsByUser():void{
    this.pqrsService.getPqrsByUser(this.data.id_usuario).subscribe(data =>{
      this.dataUserPqrs = data
      console.log(data);
    })  
  }
  refresh(): void { window.location.reload(); }
}
