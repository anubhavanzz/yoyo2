import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGiftComponent } from './admin/add-gift/add-gift.component';
import { LoginComponent } from './common/login/login.component';

const routes: Routes = [
  { path: 'add-gift', component: AddGiftComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
