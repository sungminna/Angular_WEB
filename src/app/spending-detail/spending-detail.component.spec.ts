import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingDetailComponent } from './spending-detail.component';

describe('SpendingDetailComponent', () => {
  let component: SpendingDetailComponent;
  let fixture: ComponentFixture<SpendingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
