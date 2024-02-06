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
@NgModule({
  declarations: [
    FirstpageComponent,
    NavComponent,
    AddcompoComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
    
  ],
  exports:[
    NavComponent
  ]
})
export class UserModule { }
