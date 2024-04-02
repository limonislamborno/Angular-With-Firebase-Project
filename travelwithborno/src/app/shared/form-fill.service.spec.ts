import { TestBed } from '@angular/core/testing';

import { FormFillService } from './form-fill.service';

describe('FormFillService', () => {
  let service: FormFillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
