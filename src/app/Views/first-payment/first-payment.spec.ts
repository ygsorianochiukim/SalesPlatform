import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPayment } from './first-payment';

describe('FirstPayment', () => {
  let component: FirstPayment;
  let fixture: ComponentFixture<FirstPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstPayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
