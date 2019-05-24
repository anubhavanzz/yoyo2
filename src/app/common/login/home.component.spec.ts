import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { IntroductionContentComponent } from '../introductionContent/introductionContent.component';
import { MainComponent } from './main/main.component';
import { GiftListComponent } from '../gift-list/gift-list.component';
import { MatCardModule, MatListModule } from '@angular/material';
import { CategoryListComponent } from '../category-list/category-list.component';
import { GiftCardComponent } from '../gift-card/gift-card.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastrService } from 'ngx-toastr';
import { GiftDetailDispatcher } from '../store/gift-details-store/gift-details.dispatcher';
import { Store } from '@ngrx/store';
import { Observable, from as observableFrom  } from 'rxjs';
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
}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        IntroductionContentComponent,
        MainComponent,
        GiftListComponent,
        CategoryListComponent,
        GiftCardComponent
      ],
      imports: [
        MatCardModule,
        MatListModule,
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
      providers: [ToastrService, GiftDetailDispatcher,
        { provide: Store, useClass: MockService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
