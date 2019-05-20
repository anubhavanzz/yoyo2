import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { GiftCard } from 'src/app/models/gift-card.model';
import { GiftCardService } from 'src/app/common/services/gift-card.service';

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css']
})
export class AddGiftComponent implements OnInit {


  giftForm = this.fb.group({
    ImageUrl: ['', Validators.required],
    Points: ['', Validators.required],
    Description: ['', Validators.required],
    Price: ['', Validators.required],
    CreatedDate: [''],
    CategoryId: ['', Validators.required],
    NumberOfTimesBought: [''],
    Brand: ['', Validators.required],
    Name: ['', Validators.required]
  });
  name = '';
  constructor(private fb: FormBuilder, private giftCardService: GiftCardService) { }

  public ngOnInit() {

  }
  onAdd(giftForm) {
    const newGift  = new GiftCard();
    // newGift.createdDate = new Date().toString();
    // newGift.numberOfTimesBought = 0;
    // newGift.Brand= giftForm.value.Brand;
    // newGift.Name= giftForm.value.Name;
    // newGift.categoryId=giftForm.value.CategoryId;
    // newGift.description=giftForm.value.Description;
    // newGift.imageUrl=giftForm.value.ImageUrl;
    // newGift.points=giftForm.value.points;
    // newGift.p
    console.log(giftForm);
    console.log(newGift);
  }
}
