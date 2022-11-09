import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { InicioRegistroComponent } from './components/inicio-registro/inicio-registro.component';
import { HistorialComponent } from './components/historial/historial.component';

//Inicio Servicios
import { CargarScriptsService } from './services/cargar-scripts.service';
import { PqrsComponent } from './components/pqrs/pqrs.component'
//Fin Servicios

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AsistenciaComponent,
    InicioRegistroComponent,
    HistorialComponent,
    PqrsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
