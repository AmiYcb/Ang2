import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ProdService } from 'src/app/GESTION-PRODUITS/AddProd/prod.service';
import { ModalComponent } from 'src/app/sharing/modal/modal.component';
import { TabService } from 'src/app/tab/tab.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent {
  modalResult: any;

  constructor(private router: Router,private prodService: TabService,private dialog: MatDialog,private fb: FormBuilder, private http: HttpClient) {
   
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Result from modal:', result);
      this.modalResult = result;
    });
  }

  searchQuery: string = ''; 

 

  productBarcode: string = '';

  getProducts() {
   
  }

  lewed() {
    if (this.searchQuery) {
      this.prodService.getAllProducts().subscribe((products: any) => {
        // Find product where searchQuery matches the product's barcode
        const foundProduct = products.find((product: any) => product.barcode === this.searchQuery);
        if (foundProduct) {
          // Navigate to the 'result' route with product details as parameter
          this.router.navigate(['prodView', foundProduct.id]);
        } else {
          // Use SweetAlert to display error message
          Swal.fire({
            icon: 'error',
            title: 'Product Not Found',
            text: 'The product with the given barcode was not found.'
          });
        }
      });
    } else {
      // Use SweetAlert to display warning message
      Swal.fire({
        icon: 'warning',
        title: 'Empty Search Query',
        text: 'Please enter a valid barcode.'
      });
    }
  }
 
  // lewed() {
  //   if (this.searchQuery) {
  //     this.prodService.getAllProducts().subscribe((products: any) => {
  //       // Find product where searchQuery matches the product's barcode
  //       const foundProduct = products.find((product: any) => product.barcode === this.searchQuery);
  //       if (foundProduct) {
  //         // Use SweetAlert to display success message
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Product Found',
  //           text: `Product: ${JSON.stringify(foundProduct.libelle)} is boycoted`
  //         });
  //       } else {
  //         // Use SweetAlert to display error message
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Product Not Found',
  //           text: 'The product with the given barcode was not found.'
  //         });
  //       }
  //     });
  //   } else {
  //     // Use SweetAlert to display warning message
  //     Swal.fire({
  //       icon: 'warning',
  //       title: 'Empty Search Query',
  //       text: 'Please enter a valid barcode.'
  //     });
  //   }
  // }
  
   
  

}
