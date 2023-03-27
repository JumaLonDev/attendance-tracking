import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any; 
  userName: any; 
  lastName: any; 
  rolUser: any; 
  Aroles = [1,2,3];
  token = localStorage.getItem('token');
  constructor(private router:Router, private userService: UsuarioService) { 
  }
 
  ngOnInit(): void {
    this.tokenInf();
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

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/star-pagina'])
  }

  tokenInf(){
    let data = this.userService.tknDecode(this.token);
    this.rolUser = data.id_rol; 
    this.userName = data.nombre;
    this.lastName = data.apellido;  
  }
}