import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidogComponent } from './holidog.component';

describe('HolidogComponent', () => {
  let component: HolidogComponent;
  let fixture: ComponentFixture<HolidogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
