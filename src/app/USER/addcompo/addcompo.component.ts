import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcompo',
  templateUrl: './addcompo.component.html',
  styleUrls: ['./addcompo.component.css']
})
export class AddcompoComponent {
 

  constructor(private router: Router,private userService: UserService,private fb: FormBuilder, private http: HttpClient) {
  }
  
  userFile: any;
  message!: string;
  imagePath: any;
  imgUrl?: string | ArrayBuffer | null;
  selectedFile: File | undefined;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

 
  productName: string = '';
  brandName: string = '';
  description: string = '';
  userId: any; 
 
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

submit() {
  const formData = {
    imageUrl: this.imgUrl,
    productName: this.productName,
    brandName: this.brandName,
    description: this.description,
    userId: this.userId
  };

  // Call your service to post the data to the backend
  this.userService.createEmail(formData).subscribe(
    response => {
      console.log('Product created successfully:', response);

      // Display success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Email sended successfully!',
        showConfirmButton: false,
        timer: 1500 // Automatically close after 1.5 seconds
      });
      this.router.navigate(['/User']);
      // Navigate to the home page
     
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
}
