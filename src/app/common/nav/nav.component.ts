import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { User } from 'src/app/models/user.model';
import { GiftDetailDispatcher } from '../store/gift-details-store/gift-details.dispatcher';
import { giftActionTypes } from '../store/gift-details-store/gift-details.action';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isLogged: boolean;

  constructor(private authService: AuthService, private router: Router,
    private fbService: FirebaseService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {

    // this.authService.getLoggedInUser();
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 9000);


  }

  onLogin() {
    console.log('From Nav login ', this.authService.isUserLoggedIn);
    this.authService.Login();

    this.authService.isUserLoggedIn = true;
    this.isLogged = true;

  }
  home() {
    this.router.navigateByUrl('');
  }
  onLogout() {
    console.log('From nav logout ', this.authService.isUserLoggedIn);
    this.authService.Logout();
    this.authService.user = new User();
    this.authService.isUserLoggedIn = false;
    this.router.navigateByUrl('');
    console.log(this.authService.user);
  }
}
