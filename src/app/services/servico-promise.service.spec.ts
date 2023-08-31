import { TestBed } from '@angular/core/testing';

import { ServicoPromiseService } from './servico-promise.service';

describe('ServicoPromiseService', () => {
  let service: ServicoPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
