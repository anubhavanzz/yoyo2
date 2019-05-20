import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SearchBarComponent, CategoriesComponent, LayoutComponent, LoginComponent, HeaderComponent],
  exports: [SearchBarComponent, CategoriesComponent, LayoutComponent, LoginComponent, HeaderComponent]
})

export class CommonModule { }
