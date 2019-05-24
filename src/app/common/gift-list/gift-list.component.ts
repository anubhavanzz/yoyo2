import { element } from 'protractor';
import { Store } from '@ngrx/store';
import { GiftDetailState } from './../store/gift-details-store/git-details.state';
import { GiftDetailDispatcher } from './../store/gift-details-store/gift-details.dispatcher';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { Input } from '@angular/core';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { GiftListService } from 'src/app/common/services/gift-list.service';
import { giftActionTypes } from 'src/app/common/store/gift-details-store/gift-details.action';
import { Subscription } from 'rxjs';
import { ErrorModel } from 'src/app/models/error.model';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit, OnDestroy {

  public giftCardsArray: GiftCard[];
  public Subscriptions: Subscription[] = [];
  @Input() public filterType: string;
  @Input() public categoryType: string;
  @Input() public giftCardCount: number;
  // @Input() public giftCardList: GiftCard = new GiftCard();
  public giftCard: GiftCard;
  constructor(private fbService: FirebaseService,
  private giftListService: GiftListService,
  public giftDetailDispatcher: GiftDetailDispatcher,
  public gdStore: Store<GiftDetailState>) { }

  /**
   * Angular hook to initialize the component with gift card properties and get details of all the gifts
   */
  public ngOnInit(): void {
    this.giftCard = {
      $key: '',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ye9g_Iw1YhVuXIniKGjdm6Yd8bAuUu46cEhPDpo1fJ2OgUId5Q',
      points: 0,
      description: '',
      price: 100,
      createdDate: '',
      categoryName: '',
      numberOfTimesBought: 7,
      brand: '',
      name: 'flipkart gift card'
    };
    this.getGifts();
  }

  /**
   * Getting all gift data from Firebase and dispatching it to the store, if not present. If present, select the data from store.
   */
  public getGifts(): void {
    this.Subscriptions.push(this.gdStore.select((item: any) => item.giftDetailState).subscribe((val: any) => {
      // console.log(val);
      if (val.giftAllDetailState) {
        this.giftCardsArray = val.giftAllDetailState;
        this.modifyGiftsArray();
      } else {
        this.Subscriptions.push(this.fbService.getAllGiftCardsFromFirebase().subscribe(list => {
          this.giftCardsArray = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
          this.giftDetailDispatcher.giftDetailDispatch(giftActionTypes.GET_ALL_GIFT_DETAILS, this.giftCardsArray);
          this.modifyGiftsArray();
        })
        );
      }
    }, (exception: ErrorModel) => {
      console.log(exception);
    })
    );
  }

  /**
   * Modify the gift details as per the filter applied by the user or as required from the component
   */
  public modifyGiftsArray(): void {
    this.giftCardsArray = this.giftListService.sortGiftCardArray(this.giftCardsArray, this.filterType, this.categoryType);
    if (this.giftCardCount) {
      this.giftCardsArray = this.giftCardsArray.slice(0, this.giftCardCount);
    }
  }

  /**
   * Angular hook to unsubscribe from all the subscriptions on destruction of the component.
   */
  public ngOnDestroy(): void {
    this.Subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
