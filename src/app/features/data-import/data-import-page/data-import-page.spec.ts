import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataImportPage } from './data-import-page';

describe('DataImportPage', () => {
  let component: DataImportPage;
  let fixture: ComponentFixture<DataImportPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataImportPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataImportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
