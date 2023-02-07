import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiPerfilComponent } from './confi-perfil.component';

describe('ConfiPerfilComponent', () => {
  let component: ConfiPerfilComponent;
  let fixture: ComponentFixture<ConfiPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
