import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiAdministrativaComponent } from './confi-administrativa.component';

describe('ConfiAdministrativaComponent', () => {
  let component: ConfiAdministrativaComponent;
  let fixture: ComponentFixture<ConfiAdministrativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiAdministrativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiAdministrativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
