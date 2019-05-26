import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { UserPoints } from 'src/app/models/user-points.model';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-get-points',
  templateUrl: './get-points.component.html',
  styleUrls: ['./get-points.component.css']
})
export class GetPointsComponent implements OnInit {

  public usersArray: User[];
  public user = new User();
  constructor(private authService: AuthService, private fbService: FirebaseService,
    private tostr: ToastrService) { }

  ngOnInit() {

  }

  public getPoints(): void {
    alert('500 Points will be credited to your account ,do you want to procceed');
    this.authService.user.points = this.authService.user.points + 500;
    this.fbService.updateUserPointsToFirebase(this.authService.user.$key, this.authService.user.points);
    this.tostr.success('Account is credited with 500 points');
  }
}
