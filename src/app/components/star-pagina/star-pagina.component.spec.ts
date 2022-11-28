import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarPaginaComponent } from './star-pagina.component';

describe('StarPaginaComponent', () => {
  let component: StarPaginaComponent;
  let fixture: ComponentFixture<StarPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
