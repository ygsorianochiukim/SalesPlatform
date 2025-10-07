import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseAgreement } from './purchase-agreement';

describe('PurchaseAgreement', () => {
  let component: PurchaseAgreement;
  let fixture: ComponentFixture<PurchaseAgreement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseAgreement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseAgreement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
