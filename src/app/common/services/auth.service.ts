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
        console.log('in firebase subscribe', this.loggedInUser);
        if (this.userList.find(user => user.email === fbUser.email)) {
          this.isUser = this.userList.find(user => user.email === fbUser.email).isUser;
          console.log('user already existing');
        } else {
          const newUser = new User();
          newUser.email = fbUser.email;
          newUser.isUser = true;
          newUser.name = fbUser.displayName;
          newUser.provider = 'Google.com';
          this.user = newUser;
          this.fbService.saveUser(newUser);
          console.log('saved the user');
        }
        this.isUserLoggedIn = true;
      });

      console.log('within subscirbe-', this.userList);
    });
  }

  async getLoggedInUser() {
    await this.getAllUsers();

  }
}
