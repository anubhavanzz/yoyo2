import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGiftsComponent } from './all-gifts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastrModule } from 'ngx-toastr';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('AllGiftsComponent', () => {
  let component: AllGiftsComponent;
  let fixture: ComponentFixture<AllGiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGiftsComponent ],
      // schemas: [NO_ERRORS_SCHEMA],
      imports: [
        FormsModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatCardModule,
        RouterModule.forRoot([]),
        AngularFireModule.initializeApp({
          apiKey: 'AIzaSyC4O9LJigZttUlVbxpKJwrta3UmcRZp1Zg',
          authDomain: 'yoyogift-e2fb7.firebaseapp.com',
          databaseURL: 'https://yoyogift-e2fb7.firebaseio.com',
          projectId: 'yoyogift-e2fb7',
          storageBucket: 'yoyogift-e2fb7.appspot.com',
          messagingSenderId: '293963158537',
          appId: '1:293963158537:web:adff0773339da453'
        }),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        ToastrModule.forRoot(),
        MatFormFieldModule
      ],
      providers: [
        // { provide: Store, useClass: MockService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
