import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab/tab/tab.component';
import { Dash2Component } from './Adm/adm-dash/dash2/dash2.component';
import { ProdTabComponent } from './Adm/adm-dash/prod-tab/prod-tab.component';
import { NavComponent } from './Adm/adm-dash/AddProd/nav.component';
import { EditprodComponent } from './Adm/adm-dash/editprod/editprod.component';
import { AccComponent } from './Scan/acc/acc.component';
import { AboutUsComponent } from './Scan/about-us/about-us.component';
import { ContactUsComponent } from './Scan/contact-us/contact-us.component';
import { BrandsComponent } from './Scan/brands/brands.component';
import { LoginComponent } from './Scan/login/login.component';


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



  // {path: '404', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
