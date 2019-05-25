import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftDetailsComponent } from './gift-details/gift-details.component';
import { GiveAGiftComponent } from './give-a-gift/give-a-gift.component';
import { GetPointsComponent } from './get-points/get-points.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AuthGuardService } from '../common/services/auth-guard.service';

export const routes: Routes = [
  {
    path: 'giftsDetails',
    component: GiftDetailsComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'giveGift',
    component: GiveAGiftComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'points',
    component: GetPointsComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'orders',
    component: OrderHistoryComponent, canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

/* tslint:disable */
export class SenderReceiverRoutingModule { }

/* tslint:enable */
