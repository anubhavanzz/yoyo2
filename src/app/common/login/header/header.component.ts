import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: firebase.User;
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => this.user = user) ;
  }

  ngOnInit() {
  }

}
