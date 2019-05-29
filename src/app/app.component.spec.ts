import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { MatMenuModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {MatListModule} from '@angular/material/list';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
class MockService {
  public select() {}
  public getDefaultLang(): string {
    return 'en';
  }
  public setDefaultLang(lang: string): string {
    return lang;
  }
}
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatMenuModule,
        MatListModule,
        MatToolbarModule,
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
      declarations: [
        AppComponent, NavComponent, FooterComponent
      ],
      providers: [
        { provide: Store, useClass: MockService },
        { provide: TranslateService, useClass: MockService }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
