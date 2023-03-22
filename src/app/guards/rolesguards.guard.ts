import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate,Router} from '@angular/router';
import { UsuarioService } from '../services/usuario/usuario.service';
import	Swal from 'sweetalert2'
import { HistorialComponent } from '../components/historial/historial.component';
import { ConfiAdministrativaComponent } from '../components/confi-administrativa/confi-administrativa.component';
import { AsistenciaComponent } from '../components/asistencia/asistencia.component';
import { InicioComponent } from '../components/inicio/inicio.component';

@Injectable({
  providedIn: 'root'
})
export class RolesguardsGuard implements CanActivate {
  constructor(private userService: UsuarioService, private router:Router) {  
  }
  canActivate(route: ActivatedRouteSnapshot): boolean{
    let user:any = this.userService.tknDecode(localStorage.getItem('token')); 
    let rolUser = user.id_rol;

    switch (rolUser) {
      case 1:
        return true;
        break;
      case 2:
        if(route.component === HistorialComponent || route.component === ConfiAdministrativaComponent){
          Swal.fire({
            icon: 'error',
            title: '😢',
            text: 'No tiene permisos para acceder a esta vista',
          })
          this.router.navigate([
            '/inicio'
          ])
          return false; 
        }else{
          return true;
        }
        break; 
      default:
        Swal.fire({
          icon: 'error',
          title: '😢',
          text: 'No tiene permisos para acceder a esta vista',
        })
        this.router.navigate([
          '/inicio'
        ])
        return false; 
        break;
    }
    return true; 
  }
}
