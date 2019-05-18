import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditGiftComponent } from './edit-gift/edit-gift.component';
import { AddGiftComponent } from './add-gift/add-gift.component';

@NgModule({
  declarations: [EditGiftComponent, AddGiftComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
