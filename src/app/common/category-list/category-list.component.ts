import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categories: Category[] = [];
  constructor(private fbService: FirebaseService) { }

  public ngOnInit(): void {
    this.fbService.getAllCategoryFromFirebase().subscribe(list => {
      list.map(item => {
        const category = new Category();
        category.$key = item.key,
          category.name = item.payload.val();
        this.categories.push(category);
      });
      console.log(this.categories);
    });
  }

}
