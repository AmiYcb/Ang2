import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BarcodeFormat } from '@zxing/library';
import { ModalComponent } from 'src/app/sharing/modal/modal.component';
import { ProdService } from '../AddProd/prod.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprod',
  templateUrl: './editprod.component.html',
  styleUrls: ['./editprod.component.css']
})
export class EditprodComponent implements OnInit {
  productId!: string | null;
reasons: any;
  userFile: any;
  message!: string;
  imgUrl!: string | ArrayBuffer | null;
  scannedData: any;




constructor(private route: ActivatedRoute,private router: Router,private prodService: ProdService,private dialog: MatDialog,private fb: FormBuilder, private http: HttpClient) {
  
}


ngOnInit(): void {
  // Subscribe to paramMap to get route parameters
  this.route.paramMap.subscribe(params => {
    // Retrieve the 'id' parameter from paramMap
    this.productId = params.get('id');
    
  });
this.getProducts(this.productId);
this.getBrands();
this.getAlts();
}

  getProducts(id:any) {
    this.prodService.editProduct(id).subscribe((datas: any) => {
      console.log(datas); 
      this.prod = datas;
    });
  }


  
  brands: any[] = []; // Change the type according to your actual brand structure
  bran?: any;
  getBrands() {
    this.prodService.getAllBrands().subscribe((brand: any) => {
      console.log(brand); // Log the data to the console
      this.brands = brand;
    });
  }
  
  
  alts: any[] = []; // Change the type according to your actual brand structure
  alt?: any;
  getAlts() {
    this.prodService.getAllAlt().subscribe((alt: any) => {
      console.log(alt); // Log the data to the console
      this.alts = alt;
    });
  }
  

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
  
      var mimeType = file.type;
      if (mimeType.match(/image\/*/)==null) {
        this.message = "Only images are supported";
        return;
      }
  
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgUrl = reader.result;
        // Update prod.imageUrl here
        this.prod.imageUrl = this.imgUrl as string;
      }
    }
  }
  
  updateProduct(): void {
    // Call the service method to update the product
    this.prodService.updateProduct(this.productId, this.prod).subscribe({
      next: () => {
        // Display success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Product updated successfully!',
          showConfirmButton: false,
          timer: 1500 // Automatically close after 1.5 seconds
        });
  
        // Navigate to the home page
        this.router.navigate(['/ProductList']);
      },
      error: (error) => {
        console.error('Error updating product:', error);
  
        // Display error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to update product. Please try again.',
        });
      }
    });
  }

  modalResult: string | null = null;
  libelle: string | null = null;


  form!: FormGroup;

  

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Result from modal:', result);
      this.modalResult = result;
    });
  }

  
// prod!:object;
// prod!: { imageUrl?: string, alternative?:string,barcode?:string,brand?:string,libelle?:string,reasons?:string};
prod: { imageUrl?: string, alternative?: string, barcode?: string, brand?: string, libelle?: string, reasons?: string } = {};


 

 





  supportedFormats: BarcodeFormat[] = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128];

  selectedDevice: MediaDeviceInfo | undefined; // Initialize with undefined

  onScanSuccess(result: any): void {
    this.scannedData = result;
  }

}
