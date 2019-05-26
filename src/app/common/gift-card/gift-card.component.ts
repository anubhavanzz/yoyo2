import { Component, OnInit, Input } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { Router } from '@angular/router';
import { GIFT_DETAILS_DEFAULT } from '../store/gift-details-store/gift-details.defaults';
import { GiftDetailDispatcher } from '../store/gift-details-store/gift-details.dispatcher';
import { giftActionTypes } from '../store/gift-details-store/gift-details.action';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { GiftDetailState } from '../store/gift-details-store/git-details.state';
import { ErrorModel } from 'src/app/models/error.model';
@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input() public giftCard: GiftCard;
  public rating = 4;
  public starCount = [];
  public subscriptions: Subscription[] = [];
  public giftCardsArray: GiftCard[];
  constructor(
    private router: Router,
    public giftDetailDispatcher: GiftDetailDispatcher,
    public gdStore: Store<GiftDetailState>
  ) {
  }
  /**
   * Angular hook to initialize the component with star rating data
   */
  public ngOnInit(): void {
    const MAX_STARS = 5;
    this.rating = this.giftCard.rating;
    for (let i = 0; i < MAX_STARS; i++) {
      if (i < this.rating) {
        this.starCount[i] = 'checked';
      } else {
        this.starCount[i] = '';
      }
    }
  }

  /**
   * Function to set the gift card data to the store and navigate to giftcarddetails
   */
  public giftCardDetails(): void {
    console.log(this.giftCard);
    this.giftDetailDispatcher.giftDetailDispatch(giftActionTypes.GET_GIFT_DETAILS, this.giftCard);
    this.router.navigateByUrl('/user/giftsDetails');
  }
}
