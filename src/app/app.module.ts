import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { InicioRegistroComponent } from './components/inicio-registro/inicio-registro.component';
import { HistorialComponent } from './components/historial/historial.component';
import { CargarScriptsService } from './services/cargar-scripts.service';
import { PqrsComponent } from './components/pqrs/pqrs.component';
import { StarPaginaComponent } from './components/star-pagina/star-pagina.component';
import { FooterComponent } from './components/footer/footer.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ConfiPerfilComponent } from './components/confi-perfil/confi-perfil.component';
import { ConfiAdministrativaComponent } from './components/confi-administrativa/confi-administrativa.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
//Fin Servicios

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AsistenciaComponent,
    InicioRegistroComponent,
    HistorialComponent,
    PqrsComponent,
    StarPaginaComponent,
    FooterComponent,
    ConfiPerfilComponent,
    ConfiAdministrativaComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
