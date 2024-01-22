import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-modal',
  template: `
    <div style="text-align: center; margin-top: 20px;">
      <zxing-scanner
        [(device)]="selectedDevice"
        [formats]="supportedFormats"
        (scanSuccess)="onScanSuccess($event)"
        style="width: 300px; height: 300px; border: 1px solid #ccc;"
      ></zxing-scanner>
    </div>

    <div *ngIf="scannedData" style="text-align: center; margin-top: 20px;">
      <p style="font-size: 18px; color: green;">Scanned Barcode: {{ scannedData }}</p>
    </div>
  `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnDestroy {
  supportedFormats: BarcodeFormat[] = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128];

  selectedDevice: MediaDeviceInfo | undefined; // Initialize with undefined
  scannedData: string | null = null;

  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}

  ngOnDestroy() {
    console.log('ModalComponent destroyed');
  }

  onScanSuccess(result: any): void {
    this.scannedData = result;
    if (result) {
      this.dialogRef.close(result);
    }
  }
}
