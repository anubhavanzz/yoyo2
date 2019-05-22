import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource ,MatSort } from '@angular/material';
import { MatTableColumns } from '../MatTableColumns';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

  @Input() public tableDataSource;
  @Input() public columns: MatTableColumns;
  @Input() public displayedColumns: string[];

  dataSource = new MatTableDataSource(this.tableDataSource);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    console.log(this.tableDataSource);
    console.log(this.columns);
    console.log(this.displayedColumns);
    this.dataSource = new MatTableDataSource(this.tableDataSource);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
