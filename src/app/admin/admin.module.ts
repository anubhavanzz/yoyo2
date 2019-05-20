import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditGiftComponent } from './edit-gift/edit-gift.component';
import { AddGiftComponent } from './add-gift/add-gift.component';
import { MaterialModule } from 'src/app/common/material.module';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routes.module';

@NgModule({
  declarations: [EditGiftComponent, AddGiftComponent],
  imports: [
    CommonModule, MaterialModule, FormsModule, AdminRoutingModule
  ],
  exports: [EditGiftComponent, AddGiftComponent]
})
export class AdminModule { }
