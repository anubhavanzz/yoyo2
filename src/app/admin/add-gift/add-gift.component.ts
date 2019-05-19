import { Component, OnInit } from '@angular/core';
import { GiftAddModel } from 'src/app/models/gift-card.model';

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css']
})
export class AddGiftComponent implements OnInit {

  constructor() { }
  public newGiftDetails: GiftAddModel;

  public ngOnInit(): void {
    this.initializeNewGiftModel();
  }

  public initializeNewGiftModel(): void {
    this.newGiftDetails = {
      $giftCardId: '',
      giftImageUrl: 'https://emeraldgreensgolf.com/wp-content/uploads/2015/12/generic-gift-card.jpg',
      points: '',
      giftDescription: '',
      giftPrice: undefined,
      createdDate: '',
      $categoryId: '',
      numberOfTimesBought: undefined,
      giftBrand: '',
      giftName: ''
    };
  }

}
