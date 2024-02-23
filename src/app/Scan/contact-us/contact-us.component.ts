import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/USER/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private router: Router,private userService: UserService,private fb: FormBuilder, private http: HttpClient) {
  }
  
  userFile: any;
  message!: string;
  imagePath: any;


 
  productName: string = '';
  brandName: string = '';
  description: string = '';
 
 

submit() {
  const formData = {
   
    productName: this.productName,
    brandName: this.brandName,
    description: this.description,
   
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
