import { TestBed } from '@angular/core/testing';

import { DataImport } from './data-import';

describe('DataImport', () => {
  let service: DataImport;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataImport);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
