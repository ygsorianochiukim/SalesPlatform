import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subsequent } from './subsequent';

describe('Subsequent', () => {
  let component: Subsequent;
  let fixture: ComponentFixture<Subsequent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subsequent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subsequent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
