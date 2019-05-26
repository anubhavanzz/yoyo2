import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';
import { Category } from 'src/app/models/category.model';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['categoryName', 'Actions'];
  categories: Category[] = [];
  dataSource = new MatTableDataSource(this.categories);
  subscription: Subscription[] = [];
  constructor(private fbService: FirebaseService,
    private tostrService: ToastrService) { }

  /**Fetching all the category details from the database on initialization */
  public ngOnInit(): void {
    this.subscription.push(
      this.fbService.getAllCategoryFromFirebase().subscribe(list => {
        list.map(item => {
          const category = new Category();
          category.$key = item.key,
            category.name = item.payload.val();
          this.categories.push(category);
        });
        this.dataSource = new MatTableDataSource(this.categories);
      })
    );
  }

  /**
   * @param regiForm: details fetched from the form
   * Function to add category to the database */
  public addCategory(regiForm): void {
    this.fbService.addCategoryToFirebase(regiForm.value.CategoryName);
    console.log(regiForm);
    this.tostrService.success('Added Successfully');
    this.categories = [];
  }

  /**
   * @param element: Selected element
   * Function to delete the element from the firebase
   */
  public deleteCategory(element): void {
    this.fbService.deleteCategoryFromFirebase(element.$key);
    this.tostrService.success('Deleted Successfully');
    this.categories = [];
  }

  public ngOnDestroy(): void {
    this.subscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}



