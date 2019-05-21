import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftDetailsComponent } from './gift-details/gift-details.component';

export const routes: Routes = [
  {
    path: 'giftsDetails',
    component: GiftDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

/* tslint:disable */
export class SenderReceiverRoutingModule { }

/* tslint:enable */
