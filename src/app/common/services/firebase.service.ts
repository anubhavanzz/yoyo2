import { Injectable } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Category } from 'src/app/models/category.model';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { User } from 'src/app/models/user.model';
import { UserGiftCardMapping } from 'src/app/models/user-giftcard-mapping.model';
import { UserPoints } from 'src/app/models/user-points.model';
import { Review } from 'src/app/models/review.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // Gift Card releated CRUD operations
  public giftCardsList: AngularFireList<any>;
  public categoryList: AngularFireList<any>;
  public userList: AngularFireList<any>;
  public userGiftCardList: AngularFireList<any>;
  public userPointsList: AngularFireList<any>;
  public reviews: AngularFireList<any>;


  constructor(private db: AngularFireDatabase) { }

  // Gift card releated CRUD

  public addGiftCardToFirebase(giftCard: GiftCard): void {
    this.db.list('/GiftCard').push(giftCard);
  }
  public getAllGiftCardsFromFirebase() {
    this.giftCardsList = this.db.list('GiftCard');
    return this.giftCardsList.snapshotChanges();
  }

  public updateGiftCardInFirebase(giftCard: GiftCard) {
    this.giftCardsList.update(giftCard.$key, {
      imageUrl: giftCard.imageUrl,
      points: giftCard.points,
      description: giftCard.description,
      price: giftCard.price,
      createdDate: giftCard.createdDate,
      categoryName: giftCard.categoryName,
      numberOfTimesBought: giftCard.numberOfTimesBought,
      brand: giftCard.brand,
      name: giftCard.name,
      rating: giftCard.rating,
    });
  }

  public deleteGiftCardFromFirebase($key) {
    this.giftCardsList.remove($key);
  }

  //  Category releated CRUD operations
  public addCategoryToFirebase(category: Category) {
    this.db.list('/Category').push(category);
  }
  public getAllCategoryFromFirebase() {
    this.categoryList = this.db.list('Category');
    return this.categoryList.snapshotChanges();
  }

  public updateCategoryInFirebase(category: Category) {
    this.categoryList.update(category.$key, {
      name: category.name
    });
  }

  public deleteCategoryFromFirebase($key) {
    this.categoryList.remove($key);
  }

  // Save user to firebase

  public saveUser(user) {
    this.db.list('/User').push(user);
  }

  public getAllUsersFromFirebase() {
    this.userList = this.db.list('User');
    return this.userList.snapshotChanges();
  }

  public updateUserPointsToFirebase(key, points) {
    this.userList.update(key, {
      points: points
    });
  }

  // User bought gift card operations.

  public getAllUserGiftCardFromFirebase() {
    this.userGiftCardList = this.db.list('UserGiftCardMapping');
    return this.userGiftCardList.snapshotChanges();
  }
  public addUserGiftCardToFirbase(userGiftCardMapping: UserGiftCardMapping) {
    this.db.list('/UserGiftCardMapping').push(userGiftCardMapping);
  }

  public updateUserGiftCardToFirebase(userGiftCardMapping: UserGiftCardMapping) {
    this.userGiftCardList.update(userGiftCardMapping.$key, {
      sender: userGiftCardMapping.sender,
      receiver: userGiftCardMapping.receiver,
      giftCardName: userGiftCardMapping.giftCardName,
      isRedeem: userGiftCardMapping.isRedeem,
      points: userGiftCardMapping.points,
      giftCardId: userGiftCardMapping.giftCardId,
      createdDate: userGiftCardMapping.createdDate
    });
  }


  // Review CRUD operations
  public addReviewToFirebase(review: Review) {
    this.db.list('/Reviews').push(review);
  }
  public getReviewsFromFirebase() {
    this.reviews = this.db.list('Reviews');
    return this.reviews.snapshotChanges();
  }



}
