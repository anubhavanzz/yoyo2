import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Review } from 'src/app/models/review.model';
import { GiftCard } from 'src/app/models/gift-card.model';
import { AuthService } from 'src/app/common/services/auth.service';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit, OnDestroy {

  public review = new Review();
  public giftCard: GiftCard;
  public rating = 0;
  public giftCards: GiftCard[];
  public reviews: Review[];
  public subscriptions: Subscription[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private fbService: FirebaseService,
    private tostr: ToastrService,
    private dialogRef: MatDialogRef<FeedbackFormComponent>) {

  }

  ngOnInit() {
    this.giftCard = this.data.gfdata;
    this.subscriptions.push(this.fbService.getAllGiftCardsFromFirebase().subscribe(list => {
      this.giftCards = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      this.giftCard = this.giftCards.find(item => item.$key === this.data.gfdata.giftCardId);
    })
    );

  }

  public onClick(rating: number): void {
    console.log(rating);
    this.rating = rating;
  }

  public onSaveClick(comment): void {
    this.review.comment = comment,
      this.review.createdDate = new Date().toString().substring(0, 15);
    this.review.email = this.authService.user.email;
    this.review.giftCardId = this.giftCard.$key;
    this.review.rating = this.rating;
    this.review.userName = this.authService.user.name;
    this.fbService.addReviewToFirebase(this.review);
    this.giftCard.rating = Math.floor((this.giftCard.rating + this.rating) / 2);
    this.fbService.updateGiftCardInFirebase(this.giftCard);
    this.tostr.success('Thanks for sharing Feedback');
    this.dialogRef.close();

  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

}
