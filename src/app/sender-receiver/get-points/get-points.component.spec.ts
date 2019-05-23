import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPointsComponent } from './get-points.component';

describe('GetPointsComponent', () => {
  let component: GetPointsComponent;
  let fixture: ComponentFixture<GetPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
