import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Store } from '@ngrx/store';
import { Observable, from as observableFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

class MockService {
  public select(mapFn: any, ...paths: string[]): Observable<any> {
    const val = {
      globalState: {
        transactionInitState: '',
        accountAmountState: ''
      }
    };
    return observableFrom([val]);
  }
  public dispatch(): any {}
  public getDefaultLang(): string {
    return 'en';
  }
  public setDefaultLang(lang: string): string {
    return lang;
  }
}
describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ToastrModule.forRoot(),
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
      AngularFireAuthModule
    ],
    providers: [
      AuthGuardService,
      { provide: Store, useClass: MockService },
      { provide: TranslateService, useClass: MockService }
    ]
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
