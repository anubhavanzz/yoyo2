import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: firebase.User;
  constructor(private authService: AuthService,private router:Router) { 

  }

  ngOnInit() {

  }

  onLogin() {
    this.authService.Login();
  }


  onLogout() {
    this.authService.Logout();
    this.router.navigateByUrl('');
  }

}
