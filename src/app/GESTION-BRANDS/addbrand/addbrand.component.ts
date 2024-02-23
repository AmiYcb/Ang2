import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdService } from 'src/app/GESTION-PRODUITS/AddProd/prod.service';
import Swal from 'sweetalert2';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent {


  crudApi: any;

  @ViewChild('form') myForm!: NgForm;

  imgUrl!: any ;
  brandName: string = '';
  reasons: string = '';
  description: string = '';

 
  

  onSubmit() {
    // Create an object with form data
    const formData = {
      imageUrl: this.imgUrl,
      brandName: this.brandName,
      reasons: this.reasons,
      description: this.description
    };
  
    // Call your service to post the data to the backend
    this.BrandService.createBrand(formData).subscribe(
      response => {
        console.log('Product created successfully:', response);
  
        // Display success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Product created successfully!',
          showConfirmButton: false,
          timer: 1500 // Automatically close after 1.5 seconds
        });
  
        // Navigate to the home page
        this.router.navigate(['/BrandsList']);
      },
      error => {
        console.error('Error creating product:', error);
  
        // Display error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to create product. Please try again.',
        });
      }
    );
  }
  
 
  
  userFile: any;
  message!: string;
  imagePath: any;

onFileSelected(event:any) {

  if(event.target.files.length > 0){
    const file=event.target.files[0];
    this.userFile=file;
   // this.f['image'].setValue(false);

    var mimeType = event.target.files[0].type;
    if(mimeType.match(/image\/*/)==null){
      this.message="only images are supported";
      return ;
    }
    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
    }
  }
}







  form!: FormGroup;

  
  constructor(private router: Router,private BrandService: BrandService,private fb: FormBuilder, private http: HttpClient) {
   
  }


  openEdit(product: any): void {
    // Use Angular Router to navigate to the EditCompo component and pass data
    this.router.navigate(['/edit-compo', product.id]);
  }



  
prod!:object;
  

  
  
}
