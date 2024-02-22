import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdService } from 'src/app/GESTION-PRODUITS/AddProd/prod.service';

@Component({
  selector: 'app-view-prod-user',
  templateUrl: './view-prod-user.component.html',
  styleUrls: ['./view-prod-user.component.css']
})
export class ViewProdUserComponent {

  @Input() product: any;
  prod: any;
  productId!: string | null;
  
  constructor(private route: ActivatedRoute,private router: Router,private prodService: ProdService,private dialog: MatDialog,private fb: FormBuilder, private http: HttpClient) { }
  
  ngOnInit(): void {
    // Subscribe to paramMap to get route parameters
    this.route.paramMap.subscribe(params => {
      // Retrieve the 'id' parameter from paramMap
      this.productId = params.get('id');
      
    });
  this.getProducts(this.productId);
  }

  getProducts(id:any) {
    this.prodService.editProduct(id).subscribe((datas: any) => {
      console.log(datas); 
      this.prod = datas;
    });
  }

}
