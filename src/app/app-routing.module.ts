import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab/tab/tab.component';
import { Dash2Component } from './Adm/adm-dash/dash2/dash2.component';
import { ProdTabComponent } from './GESTION-PRODUITS/prod-tab/prod-tab.component';
import { NavComponent } from './GESTION-PRODUITS/AddProd/nav.component';
import { EditprodComponent } from './GESTION-PRODUITS/editprod/editprod.component';
import { AccComponent } from './Scan/acc/acc.component';
import { AboutUsComponent } from './Scan/about-us/about-us.component';
import { ContactUsComponent } from './Scan/contact-us/contact-us.component';
import { BrandsComponent } from './Scan/brands/brands.component';
import { LoginComponent } from './Scan/login/login.component';
import { AddbrandComponent } from './GESTION-BRANDS/addbrand/addbrand.component';
import { BrandtabComponent } from './GESTION-BRANDS/brandtab/brandtab.component';
import { EdittabComponent } from './GESTION-BRANDS/edittab/edittab.component';


const routes: Routes = [

  {path:"", component:AccComponent },
  {path:"AboutUs", component:AboutUsComponent },
  {path:"Contact", component:ContactUsComponent },
  {path:"Brands", component:BrandsComponent },
  {path:"Login", component:LoginComponent },
  
  {path:"tab", component:TabComponent },

  {path:"dash", component:Dash2Component },
  {path:"ProductList", component:ProdTabComponent },
  {path:"prod", component:NavComponent },
  { path: 'edit/:id', component: EditprodComponent },


  {path:"addBrand", component:AddbrandComponent },
  {path:"BrandsList", component:BrandtabComponent },
  {path:"editBrand/:id", component:EdittabComponent },

 
  

  // {path: '404', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
