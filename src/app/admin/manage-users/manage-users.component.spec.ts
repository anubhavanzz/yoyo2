import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersComponent } from './manage-users.component';
import { MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

describe('ManageUsersComponent', () => {
  let component: ManageUsersComponent;
  let fixture: ComponentFixture<ManageUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUsersComponent ],
      imports: [
        FormsModule,
        MatTableModule,
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
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
