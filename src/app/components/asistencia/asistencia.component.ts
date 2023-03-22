import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso/curso.service'
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  Courses: any [] = [];
  date =  new Date();
  fe: any;  
  

  constructor(private cursoService: CursoService, private activatedRouter: ActivatedRoute) {
    const courseid = this.activatedRouter.snapshot.params['id'];

    this.cursoService.getUserByIdCourse(courseid).subscribe(data => {
      this.Courses = data;
      console.log(this.Courses);
    })
  }
  
  ngOnInit(): void {
    this.fecha();
  }
  addObservacion(op:string){
    switch (op) {
      case 'abrir':
        document.getElementById('observacion')?.classList.remove('observacion__inactivo');
        document.getElementById('observacion')?.classList.add('observacion__activo');
        break;
      case 'cerrar':
        document.getElementById('observacion')?.classList.remove('observacion__activo');
        document.getElementById('observacion')?.classList.add('observacion__inactivo');
        break;
    }
  }

  fecha(): void {
     this.fe = this.date.getDate() + "/" + (this.date.getMonth()+ 1) + "/" + this.date.getFullYear();
  }
}
