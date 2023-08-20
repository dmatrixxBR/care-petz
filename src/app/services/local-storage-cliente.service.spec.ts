import { TestBed } from '@angular/core/testing';

import { LocalStorageClienteService } from './local-storage-cliente.service';

describe('LocalStorageClienteService', () => {
  let service: LocalStorageClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
