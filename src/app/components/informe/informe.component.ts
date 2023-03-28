import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { AsistenciaService } from 'src/app/services/asistencia/asistencia.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';
import { audit } from 'rxjs';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {
  token = localStorage.getItem('token') ;
  fe: any;
  date = new Date();
  id_user: any;
  id_rol: any;
  list : any [] = [];
  Aroles = [1,2,3]
  DATA: HTMLElement | any;

  constructor(private asistencia:AsistenciaService, private userService: UsuarioService) { }

  ngOnInit(): void {
    this.tokenInf();
    this.fecha();
    if(this.id_rol === 1){
      this.getAllReport();
    }else{
      this.getCountAttendance();
    }
  }

  fecha(): void {
    this.fe =
      this.date.getDate() +
      '/' +
      (this.date.getMonth() + 1) +
      '/' +
      this.date.getFullYear();
  }
  tokenInf(){
    let data = this.userService.tknDecode(this.token);
    this.id_user = data.id_usuario
    this.id_rol = data.id_rol
  }

  getCountAttendance() {
    this.asistencia.getReport(this.id_user).subscribe(data => {
      this.list = data; 
    },error =>{
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
        title: 'Error al obtener el informe'
      })
    })
  }

  getAllReport(){
    this.asistencia.getAttendance().subscribe(data => {
      this.list = data
    },error => {
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
        title: 'Error al obtener todos los informes'
      })
    })
  }

  //Metodos para descargar los PDF
  async download(){
    try {
      this.DATA = document.getElementById('informe');

      const canvas = await html2canvas(this.DATA,{scale:2});
      const imgData = canvas.toDataURL('image/png')

      const docDefinition:TDocumentDefinitions = {
        pageSize:{
          width:595.28,
          height: 'auto'
        }, 

        content:[
          {
            image: imgData,
            width: 600,
          }
        ], 
        pageMargins:5,
      }
      pdfMake.createPdf(docDefinition).download(`${this.fe}_Informe_Attendance_Tracking`);

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
        title: 'PDF Creado correctamente'
      })
    } catch (error) {
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
        title: 'Error al descargar el PDF'
      })
    }
  }
}
