import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from './firebase.service';
import { Store } from '@ngrx/store';
import { GiftDetailState } from '../store/gift-details-store/git-details.state';
import { CURRENT_USER } from '../store/gift-details-store/gift-details.defaults';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: firebase.User;
  user = CURRENT_USER;
  constructor(private afAuth: AngularFireAuth,
    private fbService: FirebaseService ,
    public gdStore: Store<GiftDetailState>) { }

  Login() {
    localStorage.setItem('loggedInUser', 'true');
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider).then(() => {
      this.getLoggedInUser();
      console.log(this.user);
    });
  }

  Logout() {
    localStorage.removeItem('loggedInUser');
    this.afAuth.auth.signOut();
  }

  getLoggedInUser() {
    return this.afAuth.authState.subscribe(fbUser => {
      this.loggedInUser = fbUser;
      this.user.name = this.loggedInUser.displayName;
      this.user.email = this.loggedInUser.email;
      this.user.provider = 'Google.com';
      this.user.isUser = true;
      console.log(this.user);
      this.gdStore.select((item: any) => item.giftDetailState).subscribe((val: any) => {
        console.log(val);
      });
      // if he is already existing not need to save /
      this.fbService.saveUser(this.user);
    });
  }
}
