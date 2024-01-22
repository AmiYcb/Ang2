import { Component, ViewChild } from '@angular/core';
import { TabService } from '../tab.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  prod: any;
  filterText: string = '';
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['title', 'description'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private prodService: TabService, private httpClient: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.prodService.getAllProducts().subscribe((datas: any) => {
      console.log(datas); // Log the data to the console
      this.prod = datas;
      this.dataSource.data = datas;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
