import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbrandComponent } from '../addbrand/addbrand.component';
import { BrandtabComponent } from '../brandtab/brandtab.component';
import { EdittabComponent } from '../edittab/edittab.component';
import { TabModule } from 'src/app/tab/tab/tab.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AddbrandComponent,
    BrandtabComponent,
    EdittabComponent,
  ],
  imports: [
    CommonModule,
    TabModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ]
})
export class BrandmodelModule { }
