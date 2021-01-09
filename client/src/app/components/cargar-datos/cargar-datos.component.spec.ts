import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarDatosComponent } from './cargar-datos.component';

describe('CargarDatosComponent', () => {
  let component: CargarDatosComponent;
  let fixture: ComponentFixture<CargarDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
