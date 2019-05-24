import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GiftDetailState } from 'src/app/common/store/gift-details-store/git-details.state';
import { AuthService } from 'src/app/common/services/auth.service';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { UserGiftCardMapping } from 'src/app/models/user-giftcard-mapping.model';

@Component({
  selector: 'app-receiver-details',
  templateUrl: './receiver-details.component.html',
  styleUrls: ['./receiver-details.component.css']
})
export class ReceiverDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ReceiverDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: 'DialogData',
    private router: Router,
    public gdStore: Store<GiftDetailState>,
    public authService: AuthService,
    public fbService: FirebaseService) { }

  public receiverDetails = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  });
  public giftCardDetails;

  ngOnInit() {
    console.log('From receiver Detail------', this.authService.user);
  }

  /**
   * Function to submit the details of the sender and receiver so that the gift can be tagged to the receiver
   * @param receiverDetails: details of the receiver entered by the user
   */
  public submitDetails(receiverDetails: FormGroup): void {
    console.log('receiverDetails ' + receiverDetails);
    this.gdStore.select((item: any) => item.giftDetailState).subscribe((val: any) => {
      console.log('this.giftCardDetails ' + val.giftDetailState);
      this.giftCardDetails = val.giftDetailState;
    });
    const userGiftCard = new UserGiftCardMapping();
    userGiftCard.sender = this.authService.user.email,
      userGiftCard.receiver = receiverDetails.value.email,
      userGiftCard.giftCardName = this.giftCardDetails.name,
      userGiftCard.isRedeem = false,
      userGiftCard.points = this.giftCardDetails.points,
      userGiftCard.giftCardId = this.giftCardDetails.$key;
    userGiftCard.createdDate = new Date().toString().substring(0, 15);
    this.fbService.addUserGiftCardToFirbase(userGiftCard);
    this.dialogRef.close();
    this.router.navigateByUrl('/user/giveGift');
  }

}
