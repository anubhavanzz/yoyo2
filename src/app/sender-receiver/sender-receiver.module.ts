import { CommonFunctionalityModule } from './../common/common.module';
import { NgModule } from '@angular/core';
import { PopularGiftsComponent } from './popular-gifts/popular-gifts.component';
import { NewGiftsComponent } from './new-gifts/new-gifts.component';
import { GiftDetailsComponent } from './gift-details/gift-details.component';
import { GiveAGiftComponent } from './give-a-gift/give-a-gift.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { GiftHistoryComponent } from './gift-history/gift-history.component';
import { GiftReviewComponent } from './gift-review/gift-review.component';
import { SenderReceiverRoutingModule } from './sender-receiver-routes.module';
import { MaterialModule } from '../common/material.module';
import { CommonModule } from '@angular/common';
import { GetPointsComponent } from './get-points/get-points.component';

@NgModule({
  declarations: [PopularGiftsComponent,
    NewGiftsComponent, GiftDetailsComponent, GiveAGiftComponent, ProfilePageComponent, GiftHistoryComponent, GiftReviewComponent,
    GetPointsComponent
  ],
  imports: [
    CommonFunctionalityModule, SenderReceiverRoutingModule, MaterialModule, CommonModule
  ]
})
export class SenderReceiverModule { }
