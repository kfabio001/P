import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPensumComponent } from './tabla-pensum.component';

describe('TablaPensumComponent', () => {
  let component: TablaPensumComponent;
  let fixture: ComponentFixture<TablaPensumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPensumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPensumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
