import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGiftComponent } from './add-gift/add-gift.component';
import { EditGiftComponent } from './edit-gift/edit-gift.component';
import { AllGiftsComponent } from './all-gifts/all-gifts.component';
import { AddCategoryComponent } from './add-category/add-category.component';

export const routes: Routes = [
  {
    path: 'add',
    component: AddGiftComponent
  },
  {
    path: 'editGift',
    component: EditGiftComponent
  },
  {
    path: 'gifts',
    component: AllGiftsComponent
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
