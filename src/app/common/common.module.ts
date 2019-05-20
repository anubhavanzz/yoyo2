import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './login/header/header.component';
import { MainComponent } from './login/main/main.component';
import { NavComponent } from './login/nav/nav.component';
import { FooterComponent } from './login/footer/footer.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [SearchBarComponent, CategoriesComponent,
    LayoutComponent, LoginComponent, HeaderComponent, MainComponent, NavComponent, FooterComponent,
    GiftCardComponent
  ],
  exports: [SearchBarComponent, CategoriesComponent, LayoutComponent, LoginComponent, HeaderComponent,
    GiftCardComponent

  ],
  imports: [
    MaterialModule,
  ],
})

export class CommonFunctionalityModule { }
