import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSAComponent } from './osa.component';

describe('OSAComponent', () => {
  let component: OSAComponent;
  let fixture: ComponentFixture<OSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OSAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
