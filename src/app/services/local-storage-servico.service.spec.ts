import { TestBed } from '@angular/core/testing';

import { LocalStorageServicoService } from './local-storage-servico.service';

describe('LocalStorageServicoService', () => {
  let service: LocalStorageServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
