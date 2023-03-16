import { NgModule } from '@angular/core';
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

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'star-pagina'},
  {path:'star-pagina', component: StarPaginaComponent},
  {path:'inicio', component: InicioComponent},
  {path:'asistencia', component: AsistenciaComponent},
  {path:'inicio-registro', component:InicioRegistroComponent},
  {path: 'historial', component:HistorialComponent},
  {path:'pqrs', component:PqrsComponent},
  {path:'footer', component:FooterComponent},
  {path:'confi-perfil', component:ConfiPerfilComponent},
  {path:'confi-administrativa', component:ConfiAdministrativaComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path: 'informe', component:InformeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
