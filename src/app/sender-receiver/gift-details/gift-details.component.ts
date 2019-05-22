import { Component, OnInit } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { GIFT_DETAILS_DEFAULT } from 'src/app/common/store/gift-details-store/gift-details.defaults';
import { GiftDetailState } from 'src/app/common/store/gift-details-store/git-details.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-gift-details',
  templateUrl: './gift-details.component.html',
  styleUrls: ['./gift-details.component.css']
})
export class GiftDetailsComponent implements OnInit {
  giftCard: GiftCard = GIFT_DETAILS_DEFAULT;
  constructor(public gdStore: Store<GiftDetailState>) { }

  ngOnInit() {
    this.gdStore.select((item: any) => item.giftDetailState).subscribe((val: any) => {
      console.log(val);
    });
    this.giftCard = {
      $key: '1',
      imageUrl: './../../../assets/logo.png',
      points: 4,
      description: 'Samplescription',
      price: 800,
      createdDate: '12/12/2018',
      categoryName: 'eCommerce',
      numberOfTimesBought: 1234,
      brand: 'Fastrack',
      name: 'Wrist watch'
    };
  }
}
