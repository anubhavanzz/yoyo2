import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardComponent } from './gift-card.component';
import { MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GiftDetailDispatcher } from '../store/gift-details-store/gift-details.dispatcher';
import { Store } from '@ngrx/store';
class MockService {
}
describe('GiftCardComponent', () => {
  let component: GiftCardComponent;
  let fixture: ComponentFixture<GiftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftCardComponent
       ],
      imports: [
        MatCardModule,
        RouterModule.forRoot([])
      ],
      providers: [
        ToastrService, GiftDetailDispatcher,
        { provide: Store, useClass: MockService },
      ],
      // schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
