import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { TabModule } from './tab/tab/tab.module';
import { Dash2Component } from './Adm/adm-dash/dash2/dash2.component';
import { ProdTabComponent } from './Adm/adm-dash/prod-tab/prod-tab.component';
import { ModalComponent } from './sharing/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    Dash2Component,
    ProdTabComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabModule,
    MatButtonModule,
    MatTableModule, 
    MatInputModule,
    MatPaginatorModule,
    ZXingScannerModule,
  

  ],
  exports:[
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function register() {
  throw new Error('Function not implemented.');
}

