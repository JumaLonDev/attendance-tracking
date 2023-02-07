import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  ACursoForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.ACursoForm = this.fb.group({
      addCurso:['',Validators.required]
    })
  }

  Addcurso(op: string){
    switch (op) {
      case 'abrir':
        document.getElementById('AgregarCurso')?.classList.remove('form-inactivo');
        document.getElementById('AgregarCurso')?.classList.add('form-activo');
        break;
      case 'cerrar':
        document.getElementById('AgregarCurso')?.classList.remove('form-activo');
        document.getElementById('AgregarCurso')?.classList.add('form-inactivo');
        break;
    }
  }
  ngOnInit(): void {
  }

}
