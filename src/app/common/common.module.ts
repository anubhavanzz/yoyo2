import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { IntroductionContentComponent } from './introductionContent/introductionContent.component';
import { MainComponent } from './login/main/main.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { GiftListComponent } from './gift-list/gift-list.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [SearchBarComponent, CategoriesComponent,
    LayoutComponent, LoginComponent, IntroductionContentComponent, MainComponent, NavComponent, FooterComponent,
    GiftCardComponent,
    GiftListComponent,
    CategoryListComponent
  ],
  exports: [SearchBarComponent, CategoriesComponent, LayoutComponent, LoginComponent, IntroductionContentComponent,
    GiftCardComponent, NavComponent, FooterComponent

  ],
  imports: [
    MaterialModule, CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CommonFunctionalityModule { }
