import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPadreComponent } from './perfil-padre.component';

describe('PerfilPadreComponent', () => {
  let component: PerfilPadreComponent;
  let fixture: ComponentFixture<PerfilPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
