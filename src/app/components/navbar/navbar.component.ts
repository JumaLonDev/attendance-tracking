import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  menuResponsive(op:string){
    switch (op) {
      case 'abrir':
        document.getElementById('abrirMenu')?.classList.remove('menucontenido__inactivo');
        document.getElementById('abrirMenu')?.classList.add('menucontenido__activo');
        document.getElementById('barras')?.classList.remove('activo');
        document.getElementById('barras')?.classList.add('inactivo');
        document.getElementById('cerrar')?.classList.remove('inactivo');
        document.getElementById('cerrar')?.classList.add('activo');

        break;
      case 'cerrar':
        document.getElementById('abrirMenu')?.classList.remove('menucontenido__activo');
        document.getElementById('abrirMenu')?.classList.add('menucontenido__inactivo');
        document.getElementById('cerrar')?.classList.remove('activo');
        document.getElementById('cerrar')?.classList.add('inactivo');
        document.getElementById('barras')?.classList.remove('inactivo');
        document.getElementById('barras')?.classList.add('activo');
        
        break;
      default:
        break;
    }
  }
}
