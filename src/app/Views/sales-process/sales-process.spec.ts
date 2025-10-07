import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesProcess } from './sales-process';

describe('SalesProcess', () => {
  let component: SalesProcess;
  let fixture: ComponentFixture<SalesProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesProcess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesProcess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
