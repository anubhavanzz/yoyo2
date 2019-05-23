import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { GiftCard } from 'src/app/models/gift-card.model';
import { ToastrService } from 'ngx-toastr';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { GIFT_DETAILS_DEFAULT } from 'src/app/common/store/gift-details-store/gift-details.defaults';


@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css']
})
export class AddGiftComponent implements OnInit, OnDestroy {

  giftCard: GiftCard = GIFT_DETAILS_DEFAULT;
  giftCardsArray: GiftCard[];
  categories: Category[] = [];

  giftForm = this.fb.group({
    ImageUrl: ['', Validators.required],
    Points: ['', [Validators.required, Validators.min(0)]],
    Description: ['', [Validators.required, Validators.minLength(5)]],
    Price: ['', [Validators.required, Validators.min(0)]],
    CreatedDate: [''],
    categoryName: ['', Validators.required],
    NumberOfTimesBought: [''],
    Brand: ['', Validators.required],
    Name: ['', Validators.required],
  });

  name = '';
  constructor(private fb: FormBuilder,
    private fbService: FirebaseService,
    private tostr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }
  public ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.fbService.getAllGiftCardsFromFirebase().subscribe(list => {
      this.giftCardsArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      if (id) {
        this.giftCard = this.giftCardsArray.filter(item => item.$key === id)[0];
      }
    });
    // Getting all categories
    this.fbService.getAllCategoryFromFirebase().subscribe(list => {
      list.map(item => {
        const category = new Category();
        category.$key = item.key,
          category.name = item.payload.val();
        this.categories.push(category);
      });
    });

  }

  /**
   * @param giftForm: the details fetched from the form
   * Function to add the new gift in case the gift isn't present, it updates if the same type already exists
   */
  public onSave(giftForm) {
    const newGift = GIFT_DETAILS_DEFAULT;
    newGift.brand = giftForm.value.Brand;
    newGift.name = giftForm.value.Name;
    newGift.categoryName = giftForm.value.categoryName;
    newGift.description = giftForm.value.Description;
    newGift.imageUrl = giftForm.value.ImageUrl;
    newGift.points = giftForm.value.Points;
    newGift.price = giftForm.value.Price;
    newGift.createdDate = new Date().toString();
    newGift.numberOfTimesBought = 0;

    if (this.giftCard.$key) {
      newGift.numberOfTimesBought = this.giftCard.numberOfTimesBought;
      newGift.$key = this.giftCard.$key;
      this.fbService.updateGiftCardInFirebase(newGift);
      this.tostr.success('Updated Successfully');
    } else {
      this.fbService.addGiftCardToFirebase(newGift);
      this.tostr.success('Gift added Succcessfully');
    }
    this.router.navigateByUrl('/admin/gifts');

    this.giftForm.reset();
  }

  /**
   * Function to navigate to the category form
   */
  public addCategory() {
    this.router.navigateByUrl('/admin/addCat');
  }

  public ngOnDestroy() {
    localStorage.setItem('giftFormDirty', 'true');
  }
}
