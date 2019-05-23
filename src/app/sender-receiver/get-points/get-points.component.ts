import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-get-points',
  templateUrl: './get-points.component.html',
  styleUrls: ['./get-points.component.css']
})
export class GetPointsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  getPoints() {

  }
}
