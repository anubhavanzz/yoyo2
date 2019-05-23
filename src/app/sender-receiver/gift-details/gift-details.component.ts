import { Component, OnInit } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { GIFT_DETAILS_DEFAULT } from 'src/app/common/store/gift-details-store/gift-details.defaults';
import { GiftDetailState } from 'src/app/common/store/gift-details-store/git-details.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gift-details',
  templateUrl: './gift-details.component.html',
  styleUrls: ['./gift-details.component.css']
})
export class GiftDetailsComponent implements OnInit {
  giftCard: GiftCard = GIFT_DETAILS_DEFAULT;
  constructor(public gdStore: Store<GiftDetailState>,
    private router: Router
    ) { }

  ngOnInit() {
    this.gdStore.select((item: any) => item.giftDetailState).subscribe((val: any) => {
      console.log(val.giftDetailState);
      if (val.giftDetailState) {
        this.giftCard = val.giftDetailState;
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }
  public buyNow() {
    this.router.navigateByUrl('/user/giveGift');
  }
}
