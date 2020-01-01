import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentpaypalComponent } from './paymentpaypal.component';

describe('PaymentpaypalComponent', () => {
  let component: PaymentpaypalComponent;
  let fixture: ComponentFixture<PaymentpaypalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentpaypalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentpaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
