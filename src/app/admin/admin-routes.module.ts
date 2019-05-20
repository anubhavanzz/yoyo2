import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGiftComponent } from './add-gift/add-gift.component';
import { EditGiftComponent } from './edit-gift/edit-gift.component';

export const routes: Routes = [
    {
      path: 'addGift',
      component: AddGiftComponent
    },
    {
        path: 'editGift',
        component: EditGiftComponent
      },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  /* tslint:disable */
export class AdminRoutingModule { }

/* tslint:enable */
