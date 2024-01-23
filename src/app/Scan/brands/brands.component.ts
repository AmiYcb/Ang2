
import { Component, OnInit } from '@angular/core';
import { ServicessService } from '../servicess.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
  animations: [
    trigger('scrollAnimation', [
      transition(':enter', []),
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class BrandsComponent implements OnInit {

  products: any[] = [];
  paginatedProducts: any[] = [];
  itemsPerPage = 4;
  currentPage = 0;
  scrollState = 'start';

  constructor(private service: ServicessService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.updatePaginatedProducts();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  get totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  updatePaginatedProducts() {
    const startIndex = this.currentPage * this.itemsPerPage;
    this.paginatedProducts = this.products.slice(startIndex, startIndex + this.itemsPerPage);
    this.scrollState = 'start'; // Reset the scroll state
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePaginatedProducts();
    }
  }

  nextPage() {
    const lastPage = this.totalPages - 1;
    if (this.currentPage < lastPage) {
      this.currentPage++;
      this.updatePaginatedProducts();
    }
  }
}
