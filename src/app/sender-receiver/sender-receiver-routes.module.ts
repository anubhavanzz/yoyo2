import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftDetailsComponent } from './gift-details/gift-details.component';
import { GiveAGiftComponent } from './give-a-gift/give-a-gift.component';

export const routes: Routes = [
  {
    path: 'giftsDetails',
    component: GiftDetailsComponent
  },
  {
    path: 'giveGift',
    component: GiveAGiftComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

/* tslint:disable */
export class SenderReceiverRoutingModule { }

/* tslint:enable */
