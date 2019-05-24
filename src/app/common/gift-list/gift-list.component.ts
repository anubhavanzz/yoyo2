import { Store } from '@ngrx/store';
import { GiftDetailState } from './../store/gift-details-store/git-details.state';
import { GiftDetailDispatcher } from './../store/gift-details-store/gift-details.dispatcher';
import { Component, OnInit } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { Input } from '@angular/core';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { GiftListService } from 'src/app/common/services/gift-list.service';
import { giftActionTypes } from 'src/app/common/store/gift-details-store/gift-details.action';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {

  public giftCardsArray: GiftCard[];
  @Input() public filterType: string;
  @Input() public categoryType: string;
  @Input() public giftCardCount: number;
  // @Input() public giftCardList: GiftCard = new GiftCard();
  public giftCard: GiftCard;
  constructor(private fbService: FirebaseService,
  private giftListService: GiftListService,
  public giftDetailDispatcher: GiftDetailDispatcher,
  public gdStore: Store<GiftDetailState>) { }

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

  public getGifts(): void {
    this.gdStore.select((item: any) => item.giftDetailState).subscribe((val: any) => {
      console.log(val);
      if (val.giftAllDetailState) {
        this.giftCardsArray = val.giftAllDetailState;
        this.modifyGiftsArray();
      } else {
        this.fbService.getAllGiftCardsFromFirebase().subscribe(list => {
          this.giftCardsArray = list.map(item => {
            return {
              $key: item.key,
              ...item.payload.val()
            };
          });
          this.giftDetailDispatcher.giftDetailDispatch(giftActionTypes.GET_ALL_GIFT_DETAILS, this.giftCardsArray);
          // const a = this.giftCardsArray;
          // this.gdStore.select((item: any) => item.giftDetailState).subscribe((val: any) => {
          //   console.log(val);
          // });
          this.modifyGiftsArray();
        });
      }
    });
  }

  public modifyGiftsArray(): void {
    this.giftCardsArray = this.giftListService.sortGiftCardArray(this.giftCardsArray, this.filterType, this.categoryType);
    if (this.giftCardCount) {
      this.giftCardsArray = this.giftCardsArray.slice(0, this.giftCardCount);
    }
  }
}
