import { ReceiverDetails } from 'src/app/models/review.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { GiftListService } from 'src/app/common/services/gift-list.service';

@Component({
  selector: 'app-give-a-gift',
  templateUrl: './give-a-gift.component.html',
  styleUrls: ['./give-a-gift.component.css']
})
export class GiveAGiftComponent implements OnInit {
  public senderDetails: ReceiverDetails;
  public receiverDetails: ReceiverDetails;
  constructor( private authService: AuthService,
  private giftListService: GiftListService) { }

  public ngOnInit(): void {
    this.initializeProperties();
    console.log(this.authService.user);
    console.log(this.giftListService.getReceiverDetails());
    this.receiverDetails = this.giftListService.getReceiverDetails();
    this.senderDetails = { name: this.authService.user.name, email: this.authService.user.email };
  }

  public initializeProperties(): void {
    this.senderDetails = {name: '', email: ''};
    this.receiverDetails = {name: '', email: ''};
  }
}
