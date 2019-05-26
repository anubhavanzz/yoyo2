import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gift-review',
  templateUrl: './gift-review.component.html',
  styleUrls: ['./gift-review.component.css']
})
export class GiftReviewComponent implements OnInit {
@Input() public rating;
public starCount = [];
public coloredStars: number;
  constructor() { }

  ngOnInit() {
  //  console.log(this.rating);
    const MAX_STARS = 5;
    for (let i = 0; i < MAX_STARS; i++) {
      if (i < this.rating) {
        this.starCount[i] = 'checked';
      } else {
        this.starCount[i] = '';
      }
    }

    78 
   // console.log(this.starCount);

  }
}
