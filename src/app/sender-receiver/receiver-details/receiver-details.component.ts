import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GiftDetailState } from 'src/app/common/store/gift-details-store/git-details.state';

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
    public gdStore: Store<GiftDetailState>) { }

    public receiverDetails = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
    public giftCardDetails;

  ngOnInit() {
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
    const receiverDetailsPayload = {
      sender: undefined,
      receiver: receiverDetails.value.email,
      giftCard: this.giftCardDetails.name,
      isRedeem: false,
      points: this.giftCardDetails.points
    };
    console.log('receiverDetailsPayload ' + receiverDetailsPayload);
    this.dialogRef.close();
    this.router.navigateByUrl('/user/giveGift');
  }

}
