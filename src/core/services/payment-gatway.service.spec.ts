import { TestBed } from '@angular/core/testing';

import { PaymentGatwayService } from './payment-gatway.service';

describe('PaymentGatwayService', () => {
  let service: PaymentGatwayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentGatwayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
