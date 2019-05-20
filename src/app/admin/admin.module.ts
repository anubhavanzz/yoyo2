import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditGiftComponent } from './edit-gift/edit-gift.component';
import { AddGiftComponent } from './add-gift/add-gift.component';
import { MaterialModule } from 'src/app/common/material.module';
import { FormsModule } from '@angular/forms';
import { AllGiftsComponent } from './all-gifts/all-gifts.component';
// import { CommonModule } from '../common/common.module';


@NgModule({
  declarations: [EditGiftComponent, AddGiftComponent, AllGiftsComponent ],
  imports: [
    CommonModule, MaterialModule, FormsModule
  ],
  exports: [EditGiftComponent, AddGiftComponent, AllGiftsComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
