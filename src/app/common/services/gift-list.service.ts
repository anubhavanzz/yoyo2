import { Injectable } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';

@Injectable({
  providedIn: 'root'
})
export class GiftListService {

  public categoryType: string;
  constructor() { }
  public setCategoryType(categoryType: string): void {
    this.categoryType = categoryType;
  }

  public getCategoryType(): string {
    return this.categoryType;
  }

  public sortGiftCardArray(giftArray: GiftCard[], flterType: string, categoryType: string): GiftCard[] {
    categoryType = this.getCategoryType() ? this.getCategoryType() : '';
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
