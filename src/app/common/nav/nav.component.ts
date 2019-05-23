import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { User } from 'src/app/models/user.model';
import { GiftDetailDispatcher } from '../store/gift-details-store/gift-details.dispatcher';
import { giftActionTypes } from '../store/gift-details-store/gift-details.action';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  users: User[];

  constructor(private authService: AuthService, private router: Router,
    private fbService: FirebaseService ,  public giftDetailDispatcher: GiftDetailDispatcher) {

  }

  ngOnInit() {
    this.authService.getLoggedInUser();

    this.fbService.getAllUsersFromFirebase().subscribe(list => {
      this.users = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      this.giftDetailDispatcher.giftDetailDispatch(giftActionTypes.GET_ALL_USERS, this.users);
    });

  }

  onLogin() {
    this.authService.Login();

  }


  onLogout() {
    this.authService.Logout();
    this.router.navigateByUrl('');
  }

}
