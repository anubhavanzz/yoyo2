import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class GiftCardService {

  constructor(private db: AngularFireDatabase) { }

  addGiftCard() {
    this.db.list('/GiftCard').push({
      imageUrl: 'abc ',
      points: 10,
      description: 'abcde',
      price: 456,
      createdDate: 'add',
      categoryId: 'asdfa',
      numberOfTimesBought: '3',
      Brand: 'asdfasdf',
      Name: 'asdfa'
    });

  }
}

