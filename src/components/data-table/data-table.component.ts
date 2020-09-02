import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {

  @Input() TableData = []

  dtColumns: String[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }

  ngOnInit() {
    this.dtColumns = Object.keys(this.TableData[0]);
    this.dataSource = new MatTableDataSource<any>(this.TableData);
  }

  updateFilter(column) {
    console.log(column)
    //this.displayedColumns = this.displayedColumns.slice(columnIndex, columnIndex);
  }
}