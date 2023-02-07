import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent implements OnInit {
  pqrsForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.pqrsForm = this.fb.group({
      email:['',Validators.required],
      queja:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
