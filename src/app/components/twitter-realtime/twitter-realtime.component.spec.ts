import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterRealtimeComponent } from './twitter-realtime.component';

describe('TwitterRealtimeComponent', () => {
  let component: TwitterRealtimeComponent;
  let fixture: ComponentFixture<TwitterRealtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterRealtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterRealtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
