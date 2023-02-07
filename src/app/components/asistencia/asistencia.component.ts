import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  constructor() { }

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
  ngOnInit(): void {
  }

}
