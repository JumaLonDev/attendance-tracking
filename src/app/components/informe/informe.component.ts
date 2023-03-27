import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso/curso.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { AsistenciaService } from 'src/app/services/asistencia/asistencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {

  fe: any;
  date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.fecha();
  }

  fecha(): void {
    this.fe =
      this.date.getDate() +
      '/' +
      (this.date.getMonth() + 1) +
      '/' +
      this.date.getFullYear();
  }

}
