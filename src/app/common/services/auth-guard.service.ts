import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()

export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router,
    private tostr: ToastrService) { }

  canActivate() {

    console.log('From canActivate guard :User getting validated here is :', this.authService.user);
    if (this.authService.user.email) {
      return true;
    }

    this.tostr.warning('Please Log in');
    this.router.navigate(['/']);
    return false;

  }

}
