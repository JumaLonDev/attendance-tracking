import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
@Component({
  selector: 'app-confi-perfil',
  templateUrl: './confi-perfil.component.html',
  styleUrls: ['./confi-perfil.component.css']
})
export class ConfiPerfilComponent implements OnInit {
  formularioR:FormGroup;
  constructor(private fb: FormBuilder,  private userService: UsuarioService) {
    this.formularioR = this.fb.group({
      
    })

    
   }

  ngOnInit(): void {
  }

}
