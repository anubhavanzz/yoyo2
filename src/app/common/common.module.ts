import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './login/home.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [ HomeComponent,
    IntroductionContentComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    GiftCardComponent,
    GiftListComponent,
    CategoryListComponent,
    GiftListComponent,
    MaterialTableComponent
  ],
  exports: [ HomeComponent,
    IntroductionContentComponent,
    GiftCardComponent,
    NavComponent,
    FooterComponent,
    MaterialTableComponent
  ],
  imports: [
    MaterialModule, CommonModule, RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    GiftDetailDispatcher
  ]
})

export class CommonFunctionalityModule { }
