import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { GiftCard } from 'src/app/models/gift-card.model';
import { FormControl } from '@angular/forms';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


export interface PeriodicElement {
  name: string;
  brand: string;
  points: string;
  description: string;
  numberOfTimesBought: string;
  categoryName: string;
}

@Component({
  selector: 'app-all-gifts',
  templateUrl: './all-gifts.component.html',
  styleUrls: ['./all-gifts.component.css']
})
export class AllGiftsComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['imageUrl', 'name', 'brand', 'points',
    'description', 'createdDate', 'numberOfTimesBought', 'categoryName', 'Actions'];
  public dataSource = new MatTableDataSource();
  public giftCardsArray: GiftCard[];
  public subscriptions: Subscription[] = [];


  public filteredValues = {
    brand: '', categoryName: '',
    isGlobal: ''
  };

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public brandFilter = new FormControl();
  public globalFilter = new FormControl();
  public categoryFilter = new FormControl();

  constructor(private fbService: FirebaseService,
    private tostr: ToastrService,
    private router: Router) { }


  /** Function to fetch all the gift cards from the database on the initialization of the component */
  public ngOnInit(): void {

    this.subscriptions.push(
      this.fbService.getAllGiftCardsFromFirebase().subscribe(list => {
        this.giftCardsArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.dataSource = new MatTableDataSource(this.giftCardsArray);
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = this.customFilterPredicate();
        this.dataSource.paginator = this.paginator;
      })
    );
  }

  /**
   * @param filter : Parameter to identify the filter criterion
   * Function to filter the gifts based on the category passed
   */
  public applyFilter(filter): void {

    console.log(filter);
    this.filteredValues['brand'] = this.brandFilter.value;
    this.filteredValues['categoryName'] = this.categoryFilter.value;
    this.filteredValues['isGlobal'] = this.globalFilter.value;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }

  /**
   * @param element : The particular gift selected
   * Function to delete the selected element
   */
  public onDeleteGift(element): void {
    this.fbService.deleteGiftCardFromFirebase(element.$key);
    this.tostr.success('Deleted Successfully');
  }


  /**
   * Function to custom Filter Predicate
   */
  public customFilterPredicate(): any {
    const myFilterPredicate = (data: PeriodicElement, filter: string): boolean => {
      const searchString = JSON.parse(filter);
      const datarow = data.name + data.brand + data.points + data.description + data.numberOfTimesBought + data.categoryName;

      if (searchString['brand'] == null) {
        searchString['brand'] = '';
      }
      if (searchString['categoryName'] == null) {
        searchString['categoryName'] = '';
      }
      if (searchString['isGlobal'] == null) {
        searchString['isGlobal'] = '';
      }

      if (searchString['isGlobal']) {
        return datarow.trim().toLowerCase().indexOf(searchString['isGlobal'].trim().toLowerCase()) !== -1
          && data.brand.trim().toLowerCase().indexOf(searchString['brand'].trim().toLowerCase()) !== -1
          && data.categoryName.trim().toLowerCase().indexOf(searchString['categoryName'].trim().toLowerCase()) !== -1;
      } else if (searchString['brand']) {
        return data.brand.trim().toLowerCase().indexOf(searchString['brand'].trim().toLowerCase()) !== -1
          && data.categoryName.trim().toLowerCase().indexOf(searchString['categoryName'].trim().toLowerCase()) !== -1
          && datarow.trim().toLowerCase().indexOf(searchString['isGlobal'].trim().toLowerCase()) !== -1;
      } else if (searchString['categoryName']) {
        return data.categoryName.trim().toLowerCase().indexOf(searchString['categoryName'].trim().toLowerCase()) !== -1
          && data.brand.trim().toLowerCase().indexOf(searchString['brand'].trim().toLowerCase()) !== -1
          && datarow.trim().toLowerCase().indexOf(searchString['isGlobal'].trim().toLowerCase()) !== -1;
      } else {
        return true;
      }
    };
    return myFilterPredicate;
  }

  public addGiftCard(): void {
    this.router.navigateByUrl('/admin/gifts/new');
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
