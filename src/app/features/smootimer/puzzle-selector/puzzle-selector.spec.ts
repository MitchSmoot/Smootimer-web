import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleSelector } from './puzzle-selector';

describe('PuzzleSelector', () => {
  let component: PuzzleSelector;
  let fixture: ComponentFixture<PuzzleSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuzzleSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuzzleSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
