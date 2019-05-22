import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EditGiftComponent } from './edit-gift/edit-gift.component';
import { AddGiftComponent } from './add-gift/add-gift.component';
import { MaterialModule } from 'src/app/common/material.module';
import { FormsModule } from '@angular/forms';
import { AllGiftsComponent } from './all-gifts/all-gifts.component';
import { CommonFunctionalityModule } from '../common/common.module';

import { AdminRoutingModule } from './admin-routes.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

@NgModule({
  declarations: [EditGiftComponent, AddGiftComponent, AllGiftsComponent, AddCategoryComponent,
  ManageUsersComponent],
  imports: [
    CommonFunctionalityModule, MaterialModule, FormsModule, AdminRoutingModule, CommonModule,
  ],
  exports: [EditGiftComponent, AddGiftComponent, AllGiftsComponent, AddCategoryComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
