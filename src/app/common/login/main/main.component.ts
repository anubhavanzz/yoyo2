import { GiftCard } from './../../../models/gift-card.model';
import { Component, OnInit } from '@angular/core';
import { GiftListService } from 'src/app/common/services/gift-list.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private giftListService: GiftListService, private translate: TranslateService) {
    translate.getDefaultLang();
   }
  public giftCard: GiftCard;
  public categoryType: string;

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
      name: 'flipkart gift card',
      rating: 1
    };
  }

  public changeCategoryType(categoryType: string): void {
    this.categoryType = categoryType;
    this.giftListService.setCategoryType(categoryType);
  }

}
