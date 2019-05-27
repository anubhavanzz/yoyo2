import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from './firebase.service';
import { Store } from '@ngrx/store';
import { GiftDetailState } from '../store/gift-details-store/git-details.state';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedInUser: firebase.User;
  public user = new User();
  public userList: User[] = [];
  public isUser: boolean;
  public isUserLoggedIn = false;
  constructor(private afAuth: AngularFireAuth,
    private fbService: FirebaseService,
    public gdStore: Store<GiftDetailState>,
    private translate: TranslateService) {
      this.translate.setDefaultLang('en');
  }

  public changeLanguage (lang) {
    this.translate.setDefaultLang(lang);
  }

  public Login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then(() => {
        this.getLoggedInUser();
        console.log(this.user);
      });
    // this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider).then(() => {
    //   this.getLoggedInUser();
    //   console.log(this.user);
    // });
  }

  public Logout() {
    this.afAuth.auth.signOut();
  }


  public getAllUsers() {
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

  public getLoggedInUser() {
    this.getAllUsers();

  }
}
