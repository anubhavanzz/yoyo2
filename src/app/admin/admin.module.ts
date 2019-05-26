import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EditGiftComponent } from './edit-gift/edit-gift.component';
import { AddGiftComponent } from './add-gift/add-gift.component';
import { MaterialModule } from 'src/app/common/material.module';
import { FormsModule } from '@angular/forms';
import { AllGiftsComponent } from './all-gifts/all-gifts.component';
import { CommonFunctionalityModule } from '../common/common.module';
import { AdminRoutingModule } from './admin-routes.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';

@NgModule({
  declarations: [EditGiftComponent, AddGiftComponent, AllGiftsComponent, AddCategoryComponent,
    ManageUsersComponent, OrdersComponent],
  imports: [
    CommonFunctionalityModule,
    MaterialModule,
    FormsModule,
    AdminRoutingModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports: [EditGiftComponent, AddGiftComponent, AllGiftsComponent, AddCategoryComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
