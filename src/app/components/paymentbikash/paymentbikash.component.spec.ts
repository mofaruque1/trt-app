import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentbikashComponent } from './paymentbikash.component';

describe('PaymentbikashComponent', () => {
  let component: PaymentbikashComponent;
  let fixture: ComponentFixture<PaymentbikashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentbikashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentbikashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
