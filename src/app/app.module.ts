import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { CommonFunctionalityModule } from './common/common.module';
import { ToastrModule } from 'ngx-toastr';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthGuardService } from './common/services/auth-guard.service';
import { StoreModule } from '@ngrx/store';
import { yoyoReducer } from './common/store/gift-details-store/gift-details.reducer';
import { AuthService } from './common/services/auth.service';
import { FirebaseService } from './common/services/firebase.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CommonFunctionalityModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    CommonFunctionalityModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({
      giftDetailState: yoyoReducer
    }),
    NgxSpinnerModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [AuthGuardService, FirebaseService, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
