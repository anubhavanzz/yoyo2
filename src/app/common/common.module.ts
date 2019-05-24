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
import { MaterialTableComponent } from './material-table/material-table.component';
import { GiftDetailDispatcher } from './store/gift-details-store/gift-details.dispatcher';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SearchBarComponent, CategoriesComponent,
    LayoutComponent, LoginComponent, IntroductionContentComponent, MainComponent, NavComponent, FooterComponent,
    GiftCardComponent,
    GiftListComponent,
    CategoryListComponent,
    GiftListComponent, MaterialTableComponent
  ],
  exports: [SearchBarComponent, CategoriesComponent, LayoutComponent, LoginComponent, IntroductionContentComponent,
    GiftCardComponent, NavComponent, FooterComponent, MaterialTableComponent

  ],
  imports: [
    MaterialModule, CommonModule, RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers : [
    GiftDetailDispatcher
  ]
})

export class CommonFunctionalityModule { }
