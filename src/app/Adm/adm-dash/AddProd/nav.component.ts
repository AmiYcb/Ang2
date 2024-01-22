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
