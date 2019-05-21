import { Component, OnInit, Input } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
   @Input() public giftCard: GiftCard = new GiftCard();

  constructor() {
  }

  ngOnInit() {
console.log('Here');
     console.log('In gift card', this.giftCard);

  }
}
