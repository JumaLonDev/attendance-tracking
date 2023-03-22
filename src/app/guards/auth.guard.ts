import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';
import	Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UsuarioService, private router: Router) {    
  }
  canActivate():boolean{

    if(!this.userService.TKValidations()){
      Swal.fire({
        icon: 'warning',
        title: 'Alerta',
        text: 'Tiene que inicar sesión',
      })
      this.router.navigate([
        '/star-pagina'
      ])
      return false; 
    }
    return true;
  }
}
