import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { UserPoints } from 'src/app/models/user-points.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-get-points',
  templateUrl: './get-points.component.html',
  styleUrls: ['./get-points.component.css']
})
export class GetPointsComponent implements OnInit {

  userPointsArray: UserPoints[];
  userPoints: UserPoints;
  constructor(private authService: AuthService, private fbService: FirebaseService,
    private tostr: ToastrService) { }

  ngOnInit() {
    this.fbService.getUsersPointsFromFirebase().subscribe(list => {
      this.userPointsArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      this.userPoints = this.userPointsArray.find(user => user.userEmail === this.authService.user.email);
    });
  }

  getPoints() {
    alert('500 Points will be credited to your account ,do you want to procceed');
    if (this.userPoints) {
      this.userPoints.points = this.userPoints.points + 500;
      this.fbService.updateUserPointsToFirebase(this.userPoints);
    } else {
      const uPoint = new UserPoints();
      uPoint.points = 500;
      uPoint.userEmail = this.authService.user.email;
      this.fbService.addUserPointsToFirebase(uPoint);
      this.tostr.success('500 Points added successfully', 'Congratulations');
    }

  }
}
