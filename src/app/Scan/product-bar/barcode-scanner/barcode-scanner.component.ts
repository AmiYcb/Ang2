import { Component} from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css']
})
export class BarcodeScannerComponent {

  supportedFormats: BarcodeFormat[] = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128];

  selectedDevice: MediaDeviceInfo | undefined; // Initialize with undefined
  scannedData: string | null = null;

  onScanSuccess(result: any): void {
    this.scannedData = result;
  }

}
