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
import { ProductBarModule } from './Scan/product-bar/product-bar.module';

import { BrandmodelModule } from './GESTION-BRANDS/brandmodel/brandmodel.module';
import { AddsuggComponent } from './GESTION-SUGGESTION/addsugg/addsugg.component';
import { EditsuggComponent } from './GESTION-SUGGESTION/editsugg/editsugg.component';
import { UserModule } from './USER/user/user.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { TestComponent } from './test/test.component';
import { ViewProdUserComponent } from './Scan/view-prod-user/view-prod-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AddsuggComponent,
    EditsuggComponent,
    PageNotFoundComponentComponent,
    TestComponent,
    ViewProdUserComponent,
  
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
    BrandmodelModule,
    ProductBarModule,
    UserModule
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

