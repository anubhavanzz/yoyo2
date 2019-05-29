import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

describe('FirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
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
      AngularFireAuthModule
    ],
  }));

  it('should be created', () => {
    const service: FirebaseService = TestBed.get(FirebaseService);
    expect(service).toBeTruthy();
  });
});
