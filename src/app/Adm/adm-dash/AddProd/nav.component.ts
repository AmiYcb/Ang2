import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BarcodeFormat } from '@zxing/library';
import { ModalComponent } from 'src/app/sharing/modal/modal.component';
// import { ProductSService } from '../product-s.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  modalResult: string | null = null;


  form!: FormGroup;
  image: File | null = null;
  libelle: string = '';
  reasons: string = '';
  alternative: string = '';
  brand: string = '';
  
  constructor(private dialog: MatDialog,private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      barcode: '',
      image: null,
      libelle: '',
      reasons: '',
      alternative: '',
      brand: '',
    });
  }


  onFileSelected(event: any): void {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput.files && fileInput.files[0]) {
      this.image = fileInput.files[0];
    }
  }


  onSubmit(): void {
    // First, upload the image
    if (this.image) {
      this.uploadImage().subscribe((imagePath: string) => {
        // Once the image is uploaded, set the imagePath in the form
        this.form.patchValue({ image: imagePath });

        // Now, you can submit the rest of the form data
        this.submitForm();
      });
    } else {
      // If there's no image, just submit the form data
      this.submitForm();
    }
  }
  uploadImage() {
    const formData = new FormData();
    formData.append('image', this.image as Blob);

    return this.http.post<any>('/api/upload-image', formData); // Replace with your server endpoint
  }

  submitForm() {
    // Now, you can submit the entire form data to your server
    console.log('Form data:', this.form.value);
    // Add your HTTP request to submit form data to the server here
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

  
prod!:object;
  

  ngOnInit(): void {
    console.log("hayt")
  }

 





  supportedFormats: BarcodeFormat[] = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128];

  selectedDevice: MediaDeviceInfo | undefined; // Initialize with undefined
  scannedData: string | null = null;

  onScanSuccess(result: any): void {
    this.scannedData = result;
  }
}
