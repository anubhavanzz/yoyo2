import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionContentComponent } from './introductionContent.component';

describe('HeaderComponent', () => {
  let component: IntroductionContentComponent;
  let fixture: ComponentFixture<IntroductionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
