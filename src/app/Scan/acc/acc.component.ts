import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProdService } from 'src/app/GESTION-PRODUITS/AddProd/prod.service';
import { ModalComponent } from 'src/app/sharing/modal/modal.component';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent {
  modalResult: any;

  constructor(private router: Router,private prodService: ProdService,private dialog: MatDialog,private fb: FormBuilder, private http: HttpClient) {
   
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Result from modal:', result);
      this.modalResult = result;
    });
  }

}
