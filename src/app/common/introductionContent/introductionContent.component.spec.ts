import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionContentComponent } from './introductionContent.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { TranslateService } from '@ngx-translate/core';
class MockService {
  public getDefaultLang(): string {
    return 'en';
  }
  public setDefaultLang(lang: string): string {
    return lang;
  }
}
describe('IntroductionContentComponent', () => {
  let component: IntroductionContentComponent;
  let fixture: ComponentFixture<IntroductionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionContentComponent ],
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
      providers: [
        { provide: TranslateService, useClass: MockService }
      ]
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
