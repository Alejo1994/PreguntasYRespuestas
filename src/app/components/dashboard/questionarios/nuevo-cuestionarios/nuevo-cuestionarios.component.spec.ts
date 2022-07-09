import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCuestionariosComponent } from './nuevo-cuestionarios.component';

describe('NuevoCuestionariosComponent', () => {
  let component: NuevoCuestionariosComponent;
  let fixture: ComponentFixture<NuevoCuestionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCuestionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCuestionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
