import { NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { AppCustomPreloader } from './customPreLoader';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AppComponent } from './app.component';
const routes: Routes = [
  // { path: 'add-gift', component: AddGiftComponent },
  // { path: 'login', component: LoginComponent },
   {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  },
  {
    path: 'sender-receiver',
    loadChildren: './sender-receiver/sender-receiver.module#SenderReceiverModule'
  },
  // {
  //   path: 'login',
  //   loadChildren: './common/common.module#CommonFunctionalityModule'
  // }
];
//export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
