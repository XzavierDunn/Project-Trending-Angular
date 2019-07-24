import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTrendsComponent } from './global-trends.component';

describe('GlobalTrendsComponent', () => {
  let component: GlobalTrendsComponent;
  let fixture: ComponentFixture<GlobalTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
