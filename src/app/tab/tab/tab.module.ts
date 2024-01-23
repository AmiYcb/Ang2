import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NavComponent } from 'src/app/Adm/adm-dash/AddProd/nav.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/sharing/modal/modal.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { ProdTabComponent } from 'src/app/Adm/adm-dash/prod-tab/prod-tab.component';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDialogComponent } from 'src/app/sharing/confirmation-dialog-component/confirmation-dialog-component.component';



@NgModule({
  declarations: [
    TabComponent,
    NavComponent,
    ModalComponent,
    ProdTabComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ZXingScannerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    
    
  ],
  exports:[
    ConfirmationDialogComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class TabModule { }
