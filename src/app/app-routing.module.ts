import { NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { AppCustomPreloader } from './customPreLoader';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AppComponent } from './app.component';

const routes: Routes = [
   {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  },
  {
    path: 'user',
    loadChildren: './sender-receiver/user.module#SenderReceiverModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
