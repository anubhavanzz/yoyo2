import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MainComponent } from './main.component';
import { MatListModule, MatCardModule } from '@angular/material';
import { GiftListComponent } from '../../gift-list/gift-list.component';
import { CategoryListComponent } from '../../category-list/category-list.component';
import { GiftCardComponent } from '../../gift-card/gift-card.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Observable, from as observableFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { GiftDetailDispatcher } from '../../store/gift-details-store/gift-details.dispatcher';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
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
describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        GiftListComponent,
        CategoryListComponent,
        GiftCardComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        MatListModule,
        MatCardModule,
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
        GiftDetailDispatcher,
        { provide: Store, useClass: MockService },
        { provide: TranslateService, useClass: MockService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
