import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso/curso.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { AsistenciaService } from 'src/app/services/asistencia/asistencia.service';
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css'],
})
export class AsistenciaComponent implements OnInit {
  Courses: any[] = [];
  inasistencia: any[] = [];
  date = new Date();
  courseid: any;
  fe: any;
  userName: any;
  lastnameUser: any;
  curso_name: any;
  curso_number: any;
  ObservacionForm: FormGroup;
  AsistenciaForm: FormGroup;

  constructor(
    private cursoService: CursoService,
    private activatedRouter: ActivatedRoute,
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private asistenciaService: AsistenciaService
  ) {
    this.ObservacionForm = this.fb.group({
      queja: ['', Validators.required],
    });
    this.AsistenciaForm = this.fb.group({
      checkAsistencia: ['', Validators.required],
    });
    this.courseid = this.activatedRouter.snapshot.params['id'];

    this.cursoService.getUserByIdCourse(this.courseid).subscribe((data) => {
      this.Courses = data;
    });
  }

  ngOnInit(): void {
    this.fecha();
    this.getCoursesById();
  }
  addObservacion(op: string) {
    switch (op) {
      case 'abrir':
        document
          .getElementById('observacion')
          ?.classList.remove('observacion__inactivo');
        document
          .getElementById('observacion')
          ?.classList.add('observacion__activo');
        break;
      case 'cerrar':
        document
          .getElementById('observacion')
          ?.classList.remove('observacion__activo');
        document
          .getElementById('observacion')
          ?.classList.add('observacion__inactivo');
        break;
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

  getCoursesById() {
    this.cursoService.getCourseById(this.courseid).subscribe((data) => {
      this.curso_name = data.nom_curso;
      this.curso_number = data.num_curso;
    });
  }

  getUserById(id_user: any) {
    this.usuarioService.getUserById(id_user).subscribe((data) => {
      this.userName = data.nombre;
      this.lastnameUser = data.apellido;
    });
  }

  createAttendance() {
    this.asistenciaService
      .createNewAttendance(this.inasistencia)
      .subscribe((data) => {

      });
  }

  llenarArray(id_usuario: number, c_inasistencia?: any) {
    if (c_inasistencia) { 
      this.inasistencia.push({
        id_usuario,
        c_inasistencia,
        id_curso: Number(this.courseid),
        f_inasistencia: this.date
      });
    } else {
      this.inasistencia.splice(this.inasistencia.indexOf(c_inasistencia), 1);
    }
    console.log(this.inasistencia);
  }
}
