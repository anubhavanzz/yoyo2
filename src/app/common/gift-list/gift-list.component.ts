import { Component, OnInit } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { Input } from '@angular/core';
import { FirebaseService } from 'src/app/common/services/firebase.service';

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
  constructor(private fbService: FirebaseService) { }

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
    this.fbService.getAllGiftCardsFromFirebase().subscribe(list => {
      this.giftCardsArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      // console.log(this.giftCardsArray);
      const a = this.giftCardsArray;
      this.giftCardsArray = this.sortGiftCardArray(this.giftCardsArray, this.filterType, this.categoryType);
      if (this.giftCardCount) {
        this.giftCardsArray = this.giftCardsArray.slice(0, this.giftCardCount);
      }
      this.giftCardsArray.forEach(element => {
        // console.log('element = ' + element.numberOfTimesBought);
        // console.log('date = ' + element.createdDate);
      });
    });
  }

  public sortGiftCardArray(giftArray: GiftCard[], flterType: string, categoryType: string): GiftCard[] {
    const length = giftArray.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        switch (flterType) {
          case 'date':
            const currentObjectDate = new Date(giftArray[j].createdDate);
            const nextObjectDate = new Date(giftArray[j + 1].createdDate);
            if (currentObjectDate < nextObjectDate) {
              // swap temp and giftArray[i]
              const temp = giftArray[j];
              giftArray[j] = giftArray[j + 1];
              giftArray[j + 1] = temp;
            }
            break;
          case 'popularity':
            if (giftArray[j].numberOfTimesBought > giftArray[j + 1].numberOfTimesBought) {
              // swap temp and giftArray[i]
              const temp = giftArray[j];
              giftArray[j] = giftArray[j + 1];
              giftArray[j + 1] = temp;
            }
            break;
          case 'category':
            return giftArray.filter(gifts => gifts.categoryName === categoryType);
          default:
            return giftArray;
        }
      }
    }
    return giftArray;
  }

}
