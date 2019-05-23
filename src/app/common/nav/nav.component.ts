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

public isLogged: boolean;
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.isLogged = false;
    this.authService.getLoggedInUser();
  }

  onLogin() {
    this.authService.Login();
    this.isLogged = true;

  }
  home() {
    this.router.navigateByUrl('');
  }
  onLogout() {
    this.authService.Logout();
    this.router.navigateByUrl('');
  }

  manageUsers() {
    this.router.navigateByUrl('/admin/users');
  }

  manageOrders() {
    this.router.navigateByUrl('/admin/orders');
  }

  manageGifts() {
    this.router.navigateByUrl('/admin/gifts');
  }

  addCategory() {
    this.router.navigateByUrl('/admin/addCat');
  }

  addItem() {
    this.router.navigateByUrl('/admin/gifts/new');
  }

}
