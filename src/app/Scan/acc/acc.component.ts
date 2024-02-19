import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProdService } from 'src/app/GESTION-PRODUITS/AddProd/prod.service';
import { ModalComponent } from 'src/app/sharing/modal/modal.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent {
  modalResult: any;

  constructor(private router: Router,private prodService: ProdService,private dialog: MatDialog,private fb: FormBuilder, private http: HttpClient) {
   
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

  // lewed() {
  //   console.log('Search query:', this.searchQuery); // Print the search query to the console
  // }

  productBarcode: string = '';

  lewed() {
    console.log('Search query:', this.searchQuery); // Print the search query to the console
  
    if (this.searchQuery === this.productBarcode) {
      Swal.fire('Danger', 'this product is boycoted ', 'success'); // Display a success alert with '0' if the search query matches the product barcode
    } else {
      Swal.fire('We dont know try another ', 'error'); // Display an error alert with '-1' if the search query does not match the product barcode
    }
  }
  

}
