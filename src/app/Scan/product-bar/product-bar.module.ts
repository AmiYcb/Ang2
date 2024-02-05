import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { AccComponent } from '../acc/acc.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { BrandsComponent } from '../brands/brands.component';
import { ServicessService } from '../servicess.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    BarcodeScannerComponent,
    AccComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
    BrandsComponent,
    LoginComponent,
    
  ],
  imports: [
    ZXingScannerModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule
   
  ],
 
  exports: [
    BarcodeScannerComponent,
    AccComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
    BrandsComponent,
    LoginComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductBarModule { }
