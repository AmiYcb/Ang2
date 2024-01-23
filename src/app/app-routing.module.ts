import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab/tab/tab.component';
import { Dash2Component } from './Adm/adm-dash/dash2/dash2.component';
import { ProdTabComponent } from './Adm/adm-dash/prod-tab/prod-tab.component';
import { NavComponent } from './Adm/adm-dash/AddProd/nav.component';
import { EditprodComponent } from './Adm/adm-dash/editprod/editprod.component';


const routes: Routes = [

  
  {path:"tab", component:TabComponent },

  {path:"", component:Dash2Component },
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
