import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TabService } from 'src/app/tab/tab.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/sharing/confirmation-dialog-component/confirmation-dialog-component.component';

@Component({
  selector: 'app-prod-tab',
  templateUrl: './prod-tab.component.html',
  styleUrls: ['./prod-tab.component.css']
})
export class ProdTabComponent {

  prod: any;
  filterText: string = '';
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['imageUrl','libelle', 'brand', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private prodService: TabService, private httpClient: HttpClient,public dialog: MatDialog) {}

  openConfirmationDialog(id: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: 'Are you sure you want to delete this item?' }
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onDelete(id);
      }
    });
  }

  onDelete(id: string): void {
    // Call your service to delete the item by ID
    this.prodService.deleteProduct(id).subscribe(
      () => {
        console.log('Product deleted successfully');
        this.getProducts()
      },
      (error) => {
        console.error('Error deleting product', error);
      }
    );
  }

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
