import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreCartasComponent } from './padre-cartas.component';

describe('PadreCartasComponent', () => {
  let component: PadreCartasComponent;
  let fixture: ComponentFixture<PadreCartasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreCartasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
