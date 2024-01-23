import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TabService } from 'src/app/tab/tab.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/sharing/confirmation-dialog-component/confirmation-dialog-component.component';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private router:Router,private prodService: TabService, private httpClient: HttpClient,public dialog: MatDialog) {}

  Edit(productId: string): void {
    // Navigate to the edit route with the specific ID
    this.router.navigate(['edit', productId]);
  }

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
    // Use SweetAlert to confirm the deletion
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this product!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Yes," proceed with deletion
        this.prodService.deleteProduct(id).subscribe(
          () => {
            console.log('Product deleted successfully');
  
            // Display success message using SweetAlert
            Swal.fire({
              icon: 'success',
              title: 'Product deleted successfully!',
              showConfirmButton: false,
              timer: 1500 // Automatically close after 1.5 seconds
            });
  
            // Optionally, you can reload the data or update the dataSource here
            this.getProducts();
          },
          (error) => {
            console.error('Error deleting product', error);
  
            // Display error message using SweetAlert
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Failed to delete product. Please try again.',
            });
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // User clicked "No," do nothing
      }
    });
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
