import { Review } from './../../models/review.model';
import { Component, OnInit } from '@angular/core';
import { GiftCard } from 'src/app/models/gift-card.model';
import { GIFT_DETAILS_DEFAULT } from 'src/app/common/store/gift-details-store/gift-details.defaults';
import { GiftDetailState } from 'src/app/common/store/gift-details-store/git-details.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ReceiverDetailsComponent } from 'src/app/sender-receiver/receiver-details/receiver-details.component';
import { AuthService } from 'src/app/common/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FirebaseService } from 'src/app/common/services/firebase.service';

@Component({
  selector: 'app-gift-details',
  templateUrl: './gift-details.component.html',
  styleUrls: ['./gift-details.component.css']
})
export class GiftDetailsComponent implements OnInit {
  public giftCard: GiftCard = GIFT_DETAILS_DEFAULT;
  public reviewList: Review[];
  public filteredReviewList: Review[];
  constructor(public gdStore: Store<GiftDetailState>,
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private tostr: ToastrService,
    private fbService: FirebaseService
  ) { }

  public ngOnInit(): void {
    console.log('from Gift card details component ---', this.authService.user);
    console.log('from Gift card details component ---', this.authService.isUser, this.authService.isUserLoggedIn);
    this.gdStore.select((item: any) => item.giftDetailState).subscribe((val: any) => {
      console.log(val.giftDetailState);
      if (val.giftDetailState) {
        this.giftCard = val.giftDetailState;
      } else {
        this.router.navigateByUrl('/');
      }
    });
    this.fbService.getReviewsFromFirebase().subscribe(list => {
      this.reviewList = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      this.filteredReviewList = this.reviewList.filter(item => item.giftCardId === this.giftCard.$key);
    });
  }
  public buyNow() {
    // this.router.navigateByUrl('/user/giveGift');
  }
  public openDialog(): void {

    if (this.authService.user.points > 0) {
      const dialogRef = this.dialog.open(ReceiverDetailsComponent, {
        width: '30%',
        height: '95%',
        data: { name: 'this.name', animal: 'this.animal' }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });

    } else {
      this.tostr.warning('No Sufficient Credits', 'Please recharge account');
    }
  }

  public onAddToCart(): void {
    this.tostr.warning('For Future Implementation', 'Stay Tune :) ');
  }
}
