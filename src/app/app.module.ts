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
import { ProdTabComponent } from './GESTION-PRODUITS/prod-tab/prod-tab.component';
import { ModalComponent } from './sharing/modal/modal.component';
import { EditprodComponent } from './GESTION-PRODUITS/editprod/editprod.component';
import { ProductBarModule } from './Scan/product-bar/product-bar.module';
import { NavbarComponent } from './sharing/navbar/navbar.component';
import { SidebarComponent } from './sharing/sidebar/sidebar.component';
import { AddbrandComponent } from './GESTION-BRANDS/addbrand/addbrand.component';
import { BrandtabComponent } from './GESTION-BRANDS/brandtab/brandtab.component';
import { EdittabComponent } from './GESTION-BRANDS/edittab/edittab.component';
import { BrandmodelModule } from './GESTION-BRANDS/brandmodel/brandmodel.module';
import { AddsuggComponent } from './GESTION-SUGGESTION/addsugg/addsugg.component';
import { EditsuggComponent } from './GESTION-SUGGESTION/editsugg/editsugg.component';
import { FirstpageComponent } from './USER/firstpage/firstpage.component';
import { NavComponent } from './USER/nav/nav.component';
import { UserModule } from './USER/user/user.module';
import { ViewProdComponent } from './GESTION-PRODUITS/view-prod/view-prod.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AddsuggComponent,
    EditsuggComponent,
    PageNotFoundComponentComponent,
  
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

