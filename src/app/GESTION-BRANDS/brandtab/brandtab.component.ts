import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BrandService } from '../brand.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brandtab',
  templateUrl: './brandtab.component.html',
  styleUrls: ['./brandtab.component.css']
})
export class BrandtabComponent implements AfterViewInit {

  brand: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['imageUrl', 'brandName','boycottReasons', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router:Router,private brandService: BrandService, public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getBrands();
  }

  getBrands() {
    this.brandService.getAllBrands().subscribe((datas: any) => {
      console.log(datas); // Log the data to the console
      this.brand = datas;
      this.dataSource.data = datas;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  openConfirmationDialog(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure you want to delete this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
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
        this.brandService.deleteBrand(id).subscribe(
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
            this.getBrands();
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



  Edit(productId: string): void {
    // Navigate to the edit route with the specific ID
    this.router.navigate(['editBrand', productId]);
  }

}
