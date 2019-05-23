import { Component, OnInit, Input } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { Router } from '@angular/router';
import { GIFT_DETAILS_DEFAULT } from '../store/gift-details-store/gift-details.defaults';
import { GiftDetailDispatcher } from '../store/gift-details-store/gift-details.dispatcher';
import { giftActionTypes } from '../store/gift-details-store/gift-details.action';
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
  constructor(
    private router: Router,
    public giftDetailDispatcher: GiftDetailDispatcher
    ) {
  }
/**
 * Angular hook to initialize the component with star rating data
 */
  public ngOnInit(): void {
    const MAX_STARS = 5;
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
