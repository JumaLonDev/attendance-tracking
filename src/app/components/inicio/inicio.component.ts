import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import Swal from 'sweetalert2';
import { CursoService } from 'src/app/services/curso/curso.service';
import { Curso } from 'src/app/models/Cursos';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  ACursoForm: FormGroup;
  user: any; 
  id_user: any; 
  rolUser: any; 
  Aroles = [1,2,3]; 
  token = localStorage.getItem('token');
  Courses: any[] = [];

  constructor(private fb: FormBuilder, private router:Router, private userService: UsuarioService, private courserSevice: CursoService){
    this.ACursoForm = this.fb.group({
      num_curso:['',Validators.required], 
      nom_curso: ['', Validators.required], 
      jornada_curso: ['', Validators.required],
      prof_curso:['', Validators.required]
    }); 
  }

  ngOnInit(): void {
    this.tokenInf();
    this.getCurses();
  }

  Addcurso(op: string){
    switch (op) {
      case 'abrir':
        document.getElementById('AgregarCurso')?.classList.remove('form-inactivo');
        document.getElementById('AgregarCurso')?.classList.add('form-activo');
        document.getElementById('subscribe')?.classList.remove('form-inactivo');
        document.getElementById('subscribe')?.classList.add('form-activo');
        break;
      case 'cerrar':
        document.getElementById('AgregarCurso')?.classList.remove('form-activo');
        document.getElementById('AgregarCurso')?.classList.add('form-inactivo');
        document.getElementById('subscribe')?.classList.remove('form-activo');
        document.getElementById('subscribe')?.classList.add('form-inactivo');
        break;
    }
  }

  tokenInf(){
    let data = this.userService.tknDecode(this.token);
    this.rolUser = data.id_rol; 
    this.id_user = data.id_usuario
  }

  registrarCurso():void{
    const dataCurso = {
      num_curso: this.ACursoForm.get('num_curso')?.value, 
      nom_curso: this.ACursoForm.get('nom_curso')?.value,
      jornada_curso: this.ACursoForm.get('jornada_curso')?.value, 
      prof_curso: this.ACursoForm.get('prof_curso')?.value
    }
    if(dataCurso.num_curso == '' || dataCurso.nom_curso == '' || dataCurso.jornada_curso == '' || dataCurso.prof_curso == ''){
      Swal.fire({
        icon: 'error',
        title: 'Error al registrase',
        text: 'Hay Campos vacios',
      })
    }else{
      this.courserSevice.createNewCourse(dataCurso).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Registro Exitoso',
          text: 'Curso registrado exitosamente',
        })
        this.getCurses();
        this.Addcurso('cerrar')
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al registrar el curso'
        })
        console.log(error);
      return false; 
      })
    }
  }

  getCurses(){
    if(this.rolUser == this.Aroles[2]){
      this.courserSevice.getAllCourseByUser(this.id_user).subscribe(data => {
        this.Courses = data; 
      })
    }else{
      this.courserSevice.getCourses().subscribe(data => {
        this.Courses = data;
      })
    }
  }
}
