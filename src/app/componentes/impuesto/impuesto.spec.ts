import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestoComponent } from './impuesto';

describe('Impuesto', () => {
  let component: ImpuestoComponent;
  let fixture: ComponentFixture<ImpuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpuestoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpuestoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
