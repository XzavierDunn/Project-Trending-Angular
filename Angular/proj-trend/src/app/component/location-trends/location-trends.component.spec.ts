import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTrendsComponent } from './location-trends.component';

describe('LocationTrendsComponent', () => {
  let component: LocationTrendsComponent;
  let fixture: ComponentFixture<LocationTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
