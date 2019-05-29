import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverDetailsComponent } from './receiver-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatIconModule, MatDialogModule, MatDialogRef } from '@angular/material';

describe('ReceiverDetailsComponent', () => {
  let component: ReceiverDetailsComponent;
  let fixture: ComponentFixture<ReceiverDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiverDetailsComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
