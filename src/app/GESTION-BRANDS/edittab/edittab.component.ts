import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { ProdService } from 'src/app/GESTION-PRODUITS/AddProd/prod.service';
import { ModalComponent } from 'src/app/sharing/modal/modal.component';
import Swal from 'sweetalert2';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-edittab',
  templateUrl: './edittab.component.html',
  styleUrls: ['./edittab.component.css']
})
export class EdittabComponent {

  productId!: string | null;
  reasons: any;
    userFile: any;
    message!: string;
    imgUrl!: string | ArrayBuffer | null;
    scannedData: any;
  
  
  
  
  constructor(private route: ActivatedRoute,private router: Router,private brandService: BrandService,private dialog: MatDialog,private fb: FormBuilder, private http: HttpClient) {
    
  }
  
  
  ngOnInit(): void {
    // Subscribe to paramMap to get route parameters
    this.route.paramMap.subscribe(params => {
      // Retrieve the 'id' parameter from paramMap
      this.productId = params.get('id');
      
    });
  this.getProducts(this.productId);
  }
  
    getProducts(id:any) {
      this.brandService.editBrand(id).subscribe((datas: any) => {
        console.log(datas); 
        this.brand = datas;
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
          this.brand.imageUrl = this.imgUrl as string;
        }
      }
    }
    
    updateProduct(): void {
      // Call the service method to update the product
      this.brandService.updateBrand(this.productId, this.brand).subscribe({
        next: () => {
          // Display success message using SweetAlert
          Swal.fire({
            icon: 'success',
            title: 'Product updated successfully!',
            showConfirmButton: false,
            timer: 1500 // Automatically close after 1.5 seconds
          });
    
          // Navigate to the home page
          this.router.navigate(['/BrandsList']);
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
  
    
  
    
  // prod!:object;
  // prod!: { imageUrl?: string, alternative?:string,barcode?:string,brand?:string,libelle?:string,reasons?:string};
  brand: { imageUrl?: string, brandName?: string, boycottReasons?: string, brandDescription?: string} = {};
  
  
   
  
   
  
  
  
  
  
  
  }
  