import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';
import { Category } from 'src/app/models/category.model';
import { FirebaseService } from 'src/app/common/services/firebase.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  displayedColumns: string[] = ['categoryName', 'Actions'];
  categories: Category[] = [];
  dataSource = new MatTableDataSource(this.categories);
  constructor(private fbService: FirebaseService,
    private tostrService: ToastrService) { }

  ngOnInit() {
    this.fbService.getAllCategoryFromFirebase().subscribe(list => {
      list.map(item => {
        const category = new Category();
        category.$key = item.key,
          category.name = item.payload.val();
        this.categories.push(category);
      });
      console.log(this.categories);
      this.dataSource = new MatTableDataSource(this.categories);
    });
  }

  AddCategory(regiForm) {
    this.fbService.addCategoryToFirebase(regiForm.value.CategoryName);
    console.log(regiForm);
    this.tostrService.success('Added Successfully');
    this.categories = [];
  }

  DeleteCategory(element) {
    this.fbService.deleteCategoryFromFirebase(element.$key);
    this.tostrService.success('Deleted Successfully');
    this.categories = [];
  }
}



