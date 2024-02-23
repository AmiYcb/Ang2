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
import { FirstpageComponent } from './USER/firstpage/firstpage.component';
import { SuggtabComponent } from './GESTION-SUGGESTION/suggtab/suggtab.component';
import { ViewProdComponent } from './GESTION-PRODUITS/view-prod/view-prod.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { UserMastBeLoggedInGuard } from './Adm/serviceslogin/user-mast-be-logged-in-guard';
import { TestComponent } from './test/test.component';
import { ViewProdUserComponent } from './Scan/view-prod-user/view-prod-user.component';


const routes: Routes = [

  {path:"", component:AccComponent },
  {path:"AboutUs", component:AboutUsComponent },
  {path:"Contact", component:ContactUsComponent },
  {path:"Brands", component:BrandsComponent },
  {path:"login", component:LoginComponent },
  
  {path:"test1", component:TestComponent },

  
  {path:"tab", component:TabComponent  },

  {path:"dash", component:Dash2Component},
  {path:"ProductList", component:ProdTabComponent  },
  {path:"prod", component:NavComponent  },
  { path: 'edit/:id', component: EditprodComponent  },
  {path:"view/:id", component:ViewProdComponent },


  
  {path:"addBrand", component:AddbrandComponent  },
  {path:"BrandsList", component:BrandtabComponent },
  {path:"editBrand/:id", component:EdittabComponent },

  {path:"sugg", component:SuggtabComponent  },

  {path:"prodView/:id", component:ViewProdUserComponent },

  
  //user
  // {path:"User", component:FirstpageComponent },
  { path: '**', component: PageNotFoundComponentComponent }
  // { path: '**', component: PageNotFoundComponent } // Wildcard route


  // {path: '404', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
