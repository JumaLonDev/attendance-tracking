
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { InicioRegistroComponent } from './components/inicio-registro/inicio-registro.component';
import { HistorialComponent } from './components/historial/historial.component';
import { PqrsComponent} from './components/pqrs/pqrs.component';
import { StarPaginaComponent } from './components/star-pagina/star-pagina.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfiPerfilComponent } from './components/confi-perfil/confi-perfil.component';
import { ConfiAdministrativaComponent } from './components/confi-administrativa/confi-administrativa.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { InformeComponent } from './components/informe/informe.component';
import { RolesguardsGuard } from './guards/rolesguards.guard';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'star-pagina'},
  {path:'star-pagina', component: StarPaginaComponent},
  {path:'inicio', component: InicioComponent, canActivate:[AuthGuard]},
  {path:'asistencia/:id', component: AsistenciaComponent, canActivate:[AuthGuard, RolesguardsGuard]},//
  {path:'inicio-registro', component:InicioRegistroComponent},
  {path: 'historial', component:HistorialComponent, canActivate:[AuthGuard, RolesguardsGuard]},//
  {path:'pqrs', component:PqrsComponent, canActivate:[AuthGuard]},
  {path:'confi-perfil', component:ConfiPerfilComponent, canActivate:[AuthGuard]},
  {path:'confi-administrativa', component:ConfiAdministrativaComponent, canActivate:[AuthGuard, RolesguardsGuard]},//
  {path:'nosotros', component:NosotrosComponent, canActivate:[AuthGuard]},
  {path: 'informe', component:InformeComponent, canActivate:[AuthGuard] }, 
  {path: '**', pathMatch: 'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
