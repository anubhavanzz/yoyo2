import { Injectable } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // Gift Card releated CRUD operations
  giftCardsList: AngularFireList<any>;
  categoryList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  addGiftCardToFirebase(giftCard: GiftCard) {
    this.db.list('/GiftCard').push(giftCard);
  }
  getAllGiftCardsFromFirebase() {
    this.giftCardsList = this.db.list('GiftCard');
    return this.giftCardsList.snapshotChanges();
  }

  getGiftCard(key) {
    return this.db.object(/GiftCard/ + key);
  }

  updateGiftCardInFirebase(giftCard: GiftCard) {
    this.giftCardsList.update(giftCard.$key, {
      imageUrl: giftCard.imageUrl,
      points: giftCard.points,
      description: giftCard.description,
      price: giftCard.price,
      createdDate: giftCard.createdDate,
      categoryName: giftCard.categoryName,
      numberOfTimesBought: giftCard.numberOfTimesBought,
      brand: giftCard.brand,
      name: giftCard.name
    });
  }

  deleteGiftCardFromFirebase($key) {
    this.giftCardsList.remove($key);
  }

  //  Category releated CRUD operations
  addCategoryToFirebase(category: Category) {
    this.db.list('/Category').push(category);
  }
  getAllCategoryFromFirebase() {
    this.categoryList = this.db.list('Category');
    return this.categoryList.snapshotChanges();
  }

  updateCategoryInFirebase(category: Category) {
    this.categoryList.update(category.$key, {
      name: category.name
    });
  }

  deleteCategoryFromFirebase($key) {
    this.categoryList.remove($key);
  }
}
