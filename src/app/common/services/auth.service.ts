import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from './firebase.service';
import { Store } from '@ngrx/store';
import { GiftDetailState } from '../store/gift-details-store/git-details.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: firebase.User;
  user = new User();
  userList: User[] = [];
  isUser: boolean;
  isUserLoggedIn = false;
  constructor(private afAuth: AngularFireAuth,
    private fbService: FirebaseService,
    public gdStore: Store<GiftDetailState>) {
  }

  Login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
    // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider).then(() => {
    //   this.getLoggedInUser();
    //   console.log(this.user);
    // });
  }

  Logout() {
    this.afAuth.auth.signOut();
  }


  getAllUsers() {
    this.fbService.getAllUsersFromFirebase().subscribe(list => {
      this.userList = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });

      return this.afAuth.authState.subscribe(fbUser => {
        this.loggedInUser = fbUser;
        if (this.userList && fbUser) {
          console.log('In Firebase susbscribed user', this.loggedInUser);
          if (this.userList.find(user => user.email === fbUser.email)) {
            this.user = this.userList.find(user => user.email === fbUser.email);
            this.isUser = this.userList.find(user => user.email === fbUser.email).isUser;
            console.log('User already registerd with application', this.user);
          } else {
            const newUser = new User();
            newUser.email = fbUser.email;
            newUser.isUser = true;
            newUser.name = fbUser.displayName;
            newUser.provider = 'Google.com';
            newUser.points = 0;
            this.user = newUser;
            this.fbService.saveUser(newUser);
            console.log('New User Saved');
          }
          this.isUserLoggedIn = true;
        }
      });
    });
  }

  getLoggedInUser() {
    this.getAllUsers();

  }
}
