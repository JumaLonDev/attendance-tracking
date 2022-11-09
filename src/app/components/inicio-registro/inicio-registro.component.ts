import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../services/cargar-scripts.service';
@Component({
  selector: 'app-inicio-registro',
  templateUrl: './inicio-registro.component.html',
  styleUrls: ['./inicio-registro.component.css']
})
export class InicioRegistroComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) {
      _CargarScripts.Carga(["animation"]);
   };

  ngOnInit(): void {
  }

}
