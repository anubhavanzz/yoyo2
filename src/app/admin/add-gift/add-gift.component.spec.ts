import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGiftComponent } from './add-gift.component';
import { MatToolbarModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GiftCardComponent } from 'src/app/common/gift-card/gift-card.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { GiftDetailDispatcher } from 'src/app/common/store/gift-details-store/gift-details.dispatcher';
import { Store } from '@ngrx/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

class MockService {
  public select() {}
}
describe('AddGiftComponent', () => {
  let component: AddGiftComponent;
  let fixture: ComponentFixture<AddGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGiftComponent, GiftCardComponent ],
      imports: [
        ToastrModule.forRoot(),
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        MatSelectModule,
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
        AngularFireAuthModule,
        RouterModule.forRoot([])
      ],
      providers: [ToastrService, GiftDetailDispatcher,
        { provide: Store, useClass: MockService },
      ]
      // schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
