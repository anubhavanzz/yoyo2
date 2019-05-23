import { Injectable } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Category } from 'src/app/models/category.model';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { User } from 'src/app/models/user.model';
import { UserGiftCardMapping } from 'src/app/models/user-giftcard-mapping.model';
import { UserPoints } from 'src/app/models/user-points.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // Gift Card releated CRUD operations
  giftCardsList: AngularFireList<any>;
  categoryList: AngularFireList<any>;
  userList: AngularFireList<any>;
  userGiftCard: AngularFireList<any>;
  userPointsList: AngularFireList<any>;


  constructor(private db: AngularFireDatabase) { }

  addGiftCardToFirebase(giftCard: GiftCard) {
    this.db.list('/GiftCard').push(giftCard);
  }
  getAllGiftCardsFromFirebase() {
    this.giftCardsList = this.db.list('GiftCard');
    return this.giftCardsList.snapshotChanges();
  }

  // getGiftCard(key) {
  //   return this.db.object('/GiftCard/' + key).snapshotChanges().map(res => {
  //     return res.payload.val();
  //   });
  // }

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

  // Save user to firebase

  saveUser(user) {
    this.db.list('/User').push(user);
  }

  getAllUsersFromFirebase() {
    this.userList = this.db.list('User');
    return this.userList.snapshotChanges();
  }

  // User bought gift card operations.

  addUserGiftCardToFirbase(userGiftCardMapping: UserGiftCardMapping) {
    this.db.list('/UserGiftCardMapping').push(userGiftCardMapping);
  }

  updateUserGiftCardToFirebase(userGiftCardMapping: UserGiftCardMapping) {
    this.giftCardsList.update(userGiftCardMapping.$key, {
      sender: userGiftCardMapping.sender,
      receiver: userGiftCardMapping.receiver,
      giftCard: userGiftCardMapping.giftCard,
      isRedeem: userGiftCardMapping.isRedeem,
      points: userGiftCardMapping.points
    });
  }

  // User points operations

  addUserPointsToFirebase(userPoints: UserPoints) {
    this.db.list('/UserPoints').push(userPoints);
  }
  getUsersPointsFromFirebase() {
    this.userPointsList = this.db.list('UserPoints');
    return this.userPointsList.snapshotChanges();
  }

  updateUserPointsToFirebase(userPoints: UserPoints) {
    this.userPointsList.update(userPoints.$key, {
      userEmail: userPoints.userEmail,
      points: userPoints.points
    });
  }




}
