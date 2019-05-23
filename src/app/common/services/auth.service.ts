import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser: firebase.User;
  user = new User();
  constructor(private afAuth: AngularFireAuth,
    private fbService: FirebaseService) { }

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
      // if he is already existing not need to save /
      this.fbService.saveUser(this.user);
    });
  }
}
