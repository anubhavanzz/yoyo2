import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularGiftsComponent } from './popular-gifts.component';

describe('PopularGiftsComponent', () => {
  let component: PopularGiftsComponent;
  let fixture: ComponentFixture<PopularGiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularGiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
