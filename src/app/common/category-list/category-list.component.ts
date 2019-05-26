import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { Category } from 'src/app/models/category.model';
import { Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categories: Category[] = [];
  public subscriptions: Subscription[] = [];
  public selectedCategory = 'All';
  @Output() public categoryType: any = new EventEmitter();
  constructor(private fbService: FirebaseService) { }

  /**
   * Angular hook to initialize the component with the list of gifts
   */
  public ngOnInit(): void {
    this.subscriptions.push(this.fbService.getAllCategoryFromFirebase().subscribe(list => {
      list.map(item => {
        const category = new Category();
        category.$key = item.key,
          category.name = item.payload.val();
        this.categories.push(category);
        // this.subscriptions.forEach((subscription: Subscription) => {
        //   subscription.unsubscribe();
        // });
      });
      this.categories.unshift({$key: '01', name: 'All'});
      console.log(this.categories);
    })
  );
  }
/**
 * Function used to capture the click event in order to change the category list selected by the user
 * @param categoryType: category type selected by the user
 */
  public updateCategoryList(categoryType: string): void {
    console.log(categoryType);
    this.selectedCategory = categoryType;
    // if(categoryType === '')
    this.categoryType.emit(this.selectedCategory);
  }

}
