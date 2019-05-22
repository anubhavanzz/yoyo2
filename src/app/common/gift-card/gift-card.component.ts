import { Component, OnInit, Input } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { Router } from '@angular/router';
import { GIFT_DETAILS_DEFAULT } from '../store/gift-details-store/gift-details.defaults';
@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
   @Input() public giftCard: GiftCard = GIFT_DETAILS_DEFAULT;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  giftCardDetails() {
    console.log(this.giftCard);
    this.router.navigateByUrl('/user/giftsDetails');
  }
}
