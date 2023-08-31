import { TestBed } from '@angular/core/testing';

import { AgendaPromiseService } from './agenda-promise.service';

describe('AgendaPromiseService', () => {
  let service: AgendaPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
