import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { GiftCardService } from 'src/app/common/services/gift-card.service';
import { GiftCard } from 'src/app/models/gift-card.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-all-gifts',
  templateUrl: './all-gifts.component.html',
  styleUrls: ['./all-gifts.component.css']
})
export class AllGiftsComponent implements OnInit {

  displayedColumns: string[] = ['imageUrl', 'name', 'brand', 'points',
    'description', 'createdDate', 'numberOfTimesBought', 'categoryName', 'Actions'];
  dataSource = new MatTableDataSource();
  giftCardsArray: GiftCard[];
  @ViewChild(MatSort) sort: MatSort;
  brandFilter = new FormControl();
  globalFilter = new FormControl();
  categoryFilter = new FormControl();

  constructor(private giftCardService: GiftCardService) { }

  ngOnInit() {
    this.giftCardService.getAllGiftCardsFromFirebase().subscribe(list => {
      this.giftCardsArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      this.dataSource = new MatTableDataSource(this.giftCardsArray);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filter) {

  }

  onEditGift(element) {

  }
  onDeleteGift(element) {
    console.log(element);
    this.giftCardService.deleteGiftCardFromFirebase(element.$key);
  }

}
