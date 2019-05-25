import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Review } from 'src/app/models/review.model';
import { GiftCard } from 'src/app/models/gift-card.model';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  review: Review;
  giftCard: GiftCard;
  constructor(@Inject(MAT_DIALOG_DATA) public data: GiftCard,
    private authService: AuthService) {

  }

  ngOnInit() {
    this.giftCard = this.data;
    console.log('From the Feedback dialog : ', this.giftCard);


  }

}
