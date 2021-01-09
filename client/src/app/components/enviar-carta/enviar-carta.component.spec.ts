import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarCartaComponent } from './enviar-carta.component';

describe('EnviarCartaComponent', () => {
  let component: EnviarCartaComponent;
  let fixture: ComponentFixture<EnviarCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
