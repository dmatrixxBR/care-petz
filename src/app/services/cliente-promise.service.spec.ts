import { TestBed } from '@angular/core/testing';

import { ClientePromiseService } from './cliente-promise.service';

describe('ClientePromiseService', () => {
  let service: ClientePromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientePromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
