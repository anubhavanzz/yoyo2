import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './login/main/main.component';
import { NavComponent } from './login/nav/nav.component';
import { FooterComponent } from './login/footer/footer.component';
import { HeaderComponent } from './login/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    CategoriesComponent,
    LayoutComponent,
    LoginComponent,
    MainComponent,
    NavComponent,
    FooterComponent],
  exports: [LoginComponent, HeaderComponent]
})
export class CommonModule { }
