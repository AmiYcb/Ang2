import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BarcodeFormat } from '@zxing/library';
import { ModalComponent } from 'src/app/sharing/modal/modal.component';
import { ProdService } from './prod.service';
import { Router } from '@angular/router';
// import { ProductSService } from '../product-s.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  crudApi: any;

  @ViewChild('form') myForm!: NgForm;

  scannedData!: any ;
  imgUrl!: any ;
  libelle: string = '';
  reasons: string = '';
  alternative: string = '';
  brand: string = '';

 
  

  onSubmit() {
    // Create an object with form data
    const formData = {
      barcode: this.scannedData,
      imageUrl: this.imgUrl,
      libelle: this.libelle,
      reasons: this.reasons,
      alternative: this.alternative,
      brand: this.brand
    };

    // Call your service to post the data to the backend
    this.prodService.createProduct(formData).subscribe(response => {
      console.log('Product created successfully:', response);
    }, error => {
      console.error('Error creating product:', error);
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
  
 barcode !:any

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







  modalResult: string | null = null;


  form!: FormGroup;

  
  constructor(private router: Router,private prodService: ProdService,private dialog: MatDialog,private fb: FormBuilder, private http: HttpClient) {
   
  }


  openEdit(product: any): void {
    // Use Angular Router to navigate to the EditCompo component and pass data
    this.router.navigate(['/edit-compo', product.id]);
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
    this.getBrands();
    this.getAlts()
  }

 





  supportedFormats: BarcodeFormat[] = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128];

  selectedDevice: MediaDeviceInfo | undefined; // Initialize with undefined

  onScanSuccess(result: any): void {
    this.scannedData = result;
  }
}
