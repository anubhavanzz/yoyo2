import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGiftComponent } from './add-gift/add-gift.component';
import { EditGiftComponent } from './edit-gift/edit-gift.component';
import { AllGiftsComponent } from './all-gifts/all-gifts.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddGiftCanDeactivateGuardService } from '../common/services/add-gift-can-deactivate-guard.service';
import { AuthGuardService } from '../common/services/auth-guard.service';
import { ManageUsersComponent } from './manage-users/manage-users.component';

export const routes: Routes = [
  {
    path: 'gifts/new',
    component: AddGiftComponent,  canDeactivate: [AddGiftCanDeactivateGuardService]
  },
  {
    path: 'gifts/:id',
    component: AddGiftComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'gifts',
    component: AllGiftsComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    component: ManageUsersComponent
  },

  {
    path: 'addCat',
    component: AddCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

/* tslint:disable */
export class AdminRoutingModule { }

/* tslint:enable */
