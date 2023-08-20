import { TestBed } from '@angular/core/testing';

import { LocalStorageAgendaService } from './local-storage-agenda.service';

describe('LocalStorageAgendaService', () => {
  let service: LocalStorageAgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageAgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
