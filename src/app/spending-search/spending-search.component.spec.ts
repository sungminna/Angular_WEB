import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingSearchComponent } from './spending-search.component';

describe('SpendingSearchComponent', () => {
  let component: SpendingSearchComponent;
  let fixture: ComponentFixture<SpendingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendingSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
