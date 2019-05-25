import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatTableColumns } from '../MatTableColumns';
import {  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

  @Input() public tableDataSource;
  @Input() public columns: MatTableColumns;
  @Input() public displayedColumns: string[];
  @Input() public actionsEnabled = true;
  @Output() rowSelected = new EventEmitter();

  dataSource = new MatTableDataSource(this.tableDataSource);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    console.log('From materail table', this.tableDataSource);
    console.log(this.columns);
    console.log(this.displayedColumns);
    this.dataSource = new MatTableDataSource(this.tableDataSource);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onClick(element) {
    console.log(element);
    this.rowSelected.emit(element);
  }
}
