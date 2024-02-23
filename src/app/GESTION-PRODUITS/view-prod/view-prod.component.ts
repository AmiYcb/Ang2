import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdService } from '../AddProd/prod.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-prod',
  templateUrl: './view-prod.component.html',
  styleUrls: ['./view-prod.component.css']
})
export class ViewProdComponent {


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
    
  
   
    
  
    
    
  // prod!:object;
  // prod!: { imageUrl?: string, alternative?:string,barcode?:string,brand?:string,libelle?:string,reasons?:string};
  prod: { imageUrl?: string, alternative?: string, barcode?: string, brand?: string, libelle?: string, reasons?: string } = {};
  
  
   
  
   
  
  
  
  
  
  
    selectedDevice: MediaDeviceInfo | undefined; // Initialize with undefined
  
    onScanSuccess(result: any): void {
      this.scannedData = result;
    }
  




}
