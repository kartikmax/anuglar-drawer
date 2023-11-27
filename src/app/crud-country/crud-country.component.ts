import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudDialogComponent } from '../crud-dialog/crud-dialog.component';
import { CommonService } from '../common.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
  classification: string;
  group: string;
}

@Component({
  selector: 'app-crud-country',
  templateUrl: './crud-country.component.html',
  styleUrls: ['./crud-country.component.css'],
})
export class CrudCountryComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private elementService: CommonService
  ) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.getElementList();
  }

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'position',
    'name',
    'symbol',
    'classification',
    'group',
    'weight',
    'actions',
  ];

  getElementList() {
    this.loading = true;
    this.elementService.getElementList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
    this.loading = false;
  }

  deleteElement(element: PeriodicElement) {
    this.elementService.deleteElement(element.id).subscribe({
      next: (res) => {
        console.log(
          `${element.name} with position ${element.id}` + ' is deleted'
        );
        this.getElementList();
      },
      error: console.log,
    });
  }

  editElement(element: PeriodicElement): void {
    const dialogRef = this.dialog.open(CrudDialogComponent, {
      data: element,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.getElementList();
    });
  }
}
