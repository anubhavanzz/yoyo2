import { Observable, from as observableFrom } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryComponent } from './add-category.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { configureTestSuiteEnv } from 'src/app/common/config/configureTestSuiteEnv';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { AngularFireList } from '@angular/fire/database';
import { Category } from 'src/app/models/category.model';

describe('AddCategoryComponent', () => {
  configureTestSuiteEnv();
  let component: AddCategoryComponent;
  let fixture: ComponentFixture<AddCategoryComponent>;

  class MockService {
    public giftCardsList: AngularFireList<any>;
    public getAllCategoryFromFirebase(): Observable<any> {
      const returnValue = [];
      returnValue.push({ payload: {val: function() {return 'All'; }},
      type: 'value', prevKey: null, key: '-LfT5eH7dAgRmj5hfZ3C' },
      { payload: {val: function() {return 'E-commerce'; }},
      type: 'value', prevKey: '-LfT5eH7dAgRmj5hfZ3C', key: '-LfT69rOpwgoemR0sZii' });
      return observableFrom([returnValue]);
    }
    public success(): void {
      return null;
    }
    public deleteCategoryFromFirebase(key: string): void {
      return null;
    }
    public addCategoryToFirebase(category: Category): void {
      return null;
    }
  }

  beforeAll((done: any) => (async() => {
    TestBed.configureTestingModule({
      declarations: [AddCategoryComponent],
      imports: [FormsModule,
        ToastrModule.forRoot(),
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
        AngularFireAuthModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: ToastrService, useClass: MockService },
        {provide: FirebaseService, useClass: MockService }]
    });
    await TestBed.compileComponents();
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryComponent);
    component = fixture.componentInstance;
    component.categories = [];
    // fixture.detectChanges();
  });

  afterAll(() => {
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    const firebaseService = TestBed.get(FirebaseService);
    spyOn(firebaseService, 'getAllCategoryFromFirebase').and.callThrough();
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalledWith();
  });

  it('should call ngOnInit and check whether it is defined and called or not', () => {
    const firebaseService = TestBed.get(FirebaseService);
    spyOn(firebaseService, 'getAllCategoryFromFirebase').and.callThrough();
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component).toBeDefined();
    expect(component.ngOnInit).toHaveBeenCalledWith();
  });

  it('should call addCategory and check whether it is defined and called or not', () => {
    const regiForm = {
      value: {
        CategoryName: 'new category'
      }
    };
    const firebaseService = TestBed.get(FirebaseService);
    const toastrService = TestBed.get(ToastrService);
    spyOn(firebaseService, 'getAllCategoryFromFirebase').and.callThrough();
    spyOn(toastrService, 'success').and.callThrough();
    expect(component.addCategory).toBeDefined();
    spyOn(component, 'addCategory').and.callThrough();
    component.addCategory(regiForm);
    expect(component.addCategory).toHaveBeenCalledWith(regiForm);
    expect(toastrService.success).toHaveBeenCalledWith('Added Successfully');
    expect(component.categories).toEqual([]);
  });

  it('should call deleteCategory and check whether it is defined and called or not', () => {
    const element = {
      $key: 'sadf12sdc1aascsdnk1'
    };
    const toastrService = TestBed.get(ToastrService);
    spyOn(toastrService, 'success').and.callThrough();
    expect(component.deleteCategory).toBeDefined();
    spyOn(component, 'deleteCategory').and.callThrough();
    component.deleteCategory(element);
    expect(component.deleteCategory).toHaveBeenCalledWith(element);
    expect(toastrService.success).toHaveBeenCalledWith('Deleted Successfully');
    expect(component.categories).toEqual([]);
  });
});
