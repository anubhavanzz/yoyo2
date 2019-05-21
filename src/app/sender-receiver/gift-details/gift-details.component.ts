import { Component, OnInit } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';

@Component({
  selector: 'app-gift-details',
  templateUrl: './gift-details.component.html',
  styleUrls: ['./gift-details.component.css']
})
export class GiftDetailsComponent implements OnInit {
  giftCard: GiftCard = new GiftCard();
  constructor() { }

  ngOnInit() {
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
