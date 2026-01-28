import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosComponent } from './gastos';

describe('Gastos', () => {
  let component: GastosComponent;
  let fixture: ComponentFixture<GastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
