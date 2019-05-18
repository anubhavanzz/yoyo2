import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveAGiftComponent } from './give-a-gift.component';

describe('GiveAGiftComponent', () => {
  let component: GiveAGiftComponent;
  let fixture: ComponentFixture<GiveAGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveAGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveAGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
