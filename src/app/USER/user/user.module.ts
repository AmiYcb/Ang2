import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstpageComponent } from '../firstpage/firstpage.component';
import { NavComponent } from '../nav/nav.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddcompoComponent } from '../addcompo/addcompo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TabModule } from 'src/app/tab/tab/tab.module';
import { SuggtabComponent } from 'src/app/GESTION-SUGGESTION/suggtab/suggtab.component';
@NgModule({
  declarations: [
    FirstpageComponent,
    NavComponent,
    AddcompoComponent,
    SuggtabComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    TabModule
    
  ],
  exports:[
    NavComponent
  ]
})
export class UserModule { }