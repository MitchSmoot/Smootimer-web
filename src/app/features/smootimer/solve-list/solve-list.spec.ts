import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveList } from './solve-list';

describe('SolveList', () => {
  let component: SolveList;
  let fixture: ComponentFixture<SolveList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolveList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolveList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
