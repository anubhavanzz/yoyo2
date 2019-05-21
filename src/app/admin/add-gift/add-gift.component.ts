import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { GiftCard } from 'src/app/models/gift-card.model';
import { ToastrService } from 'ngx-toastr';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css']
})
export class AddGiftComponent implements OnInit {

  giftCard: GiftCard = new GiftCard();
  giftCardObj;

  giftForm = this.fb.group({
    ImageUrl: ['', Validators.required],
    Points: ['', Validators.required],
    Description: ['', Validators.required],
    Price: ['', Validators.required],
    CreatedDate: [''],
    categoryName: ['', Validators.required],
    NumberOfTimesBought: [''],
    Brand: ['', Validators.required],
    Name: ['', Validators.required]
  });
  name = '';
  constructor(private fb: FormBuilder,
    private fbService: FirebaseService,
    private tostr: ToastrService,
    private route: ActivatedRoute
  ) {

  }

  public ngOnInit() {
    console.log('Yogesh');
    const id = this.route.snapshot.params.id;
    if (id) {
      console.log(id);
      let obj = this.fbService.getGiftCard(id);
      console.log(obj);
    }
  }

  onSave(giftForm) {
    const newGift = new GiftCard();
    newGift.createdDate = new Date().toString();
    newGift.numberOfTimesBought = 0;
    newGift.brand = giftForm.value.Brand;
    newGift.name = giftForm.value.Name;
    newGift.categoryName = giftForm.value.categoryName;
    newGift.description = giftForm.value.Description;
    newGift.imageUrl = giftForm.value.ImageUrl;
    newGift.points = giftForm.value.Points;
    newGift.price = giftForm.value.Price;

    console.log(giftForm);
    console.log(newGift);
    this.fbService.addGiftCardToFirebase(newGift);
    this.tostr.success('Gift added Succcessfully');

  }
}
