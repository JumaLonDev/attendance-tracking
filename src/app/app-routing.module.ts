import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { InicioRegistroComponent } from './components/inicio-registro/inicio-registro.component';
import { HistorialComponent } from './components/historial/historial.component';
import { PqrsComponent} from './components/pqrs/pqrs.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'inicio-registro'},
  {path:'inicio', component: InicioComponent},
  {path:'asistencia', component: AsistenciaComponent},
  {path:'inicio-registro', component:InicioRegistroComponent},
  {path: 'historial', component:HistorialComponent},
  {path:'pqrs', component:PqrsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
