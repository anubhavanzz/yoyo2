import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsReceivedComponent } from './gifts-received.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Store } from '@ngrx/store';
import { Observable, from as observableFrom } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material';

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
describe('GiftsReceivedComponent', () => {
  let component: GiftsReceivedComponent;
  let fixture: ComponentFixture<GiftsReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
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
        MatDialogModule
      ],
      declarations: [ GiftsReceivedComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Store, useClass: MockService },
        { provide: TranslateService, useClass: MockService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
