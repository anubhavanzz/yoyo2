import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-introduction-content',
  templateUrl: './introductionContent.component.html',
  styleUrls: ['./introductionContent.component.css']
})
export class IntroductionContentComponent implements OnInit {
  user: firebase.User;
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => this.user = user) ;
  }

  ngOnInit() {
  }

}
