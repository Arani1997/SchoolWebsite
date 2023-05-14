import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditstudentComponent } from './admineditstudent.component';

describe('AdmineditstudentComponent', () => {
  let component: AdmineditstudentComponent;
  let fixture: ComponentFixture<AdmineditstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
