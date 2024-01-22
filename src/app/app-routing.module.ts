import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab/tab/tab.component';
import { Dash2Component } from './Adm/adm-dash/dash2/dash2.component';
import { ProdTabComponent } from './Adm/adm-dash/prod-tab/prod-tab.component';
import { NavComponent } from './Adm/adm-dash/AddProd/nav.component';


const routes: Routes = [

  
  {path:"tab", component:TabComponent },

  {path:"", component:Dash2Component },
  {path:"Liste des produits", component:ProdTabComponent },
  {path:"aj", component:NavComponent },



  // {path: '404', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
