import { Injectable } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class GiftCardService {

  giftCardsList: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { }

  addGiftCardToFirebase(giftCard: GiftCard) {
    this.db.list('/GiftCard').push(giftCard);
  }
  getAllGiftCardsFromFirebase() {
    this.giftCardsList = this.db.list('GiftCard');
    return this.giftCardsList.snapshotChanges;
  }

  updateGiftCardInFirebase(giftCard: GiftCard) {
    this.giftCardsList.update(giftCard.$key, {
      imageUrl: giftCard.imageUrl,
      points: giftCard.points,
      description: giftCard.description,
      price: giftCard.price,
      createdDate: giftCard.createdDate,
      categoryId: giftCard.categoryId,
      numberOfTimesBought: giftCard.numberOfTimesBought,
      brand: giftCard.brand,
      name: giftCard.name
    });
  }

}

