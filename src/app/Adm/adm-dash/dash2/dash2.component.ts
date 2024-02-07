import { Component, ElementRef, ViewChild } from '@angular/core';
import { BrandService } from 'src/app/GESTION-BRANDS/brand.service';
import { TabService } from 'src/app/tab/tab.service';

@Component({
  selector: 'app-dash2',
  templateUrl: './dash2.component.html',
  styleUrls: ['./dash2.component.css']
})
export class Dash2Component {

  isOpen: boolean = false;
  @ViewChild('dropdown') dropdown!: ElementRef;
  tabData: any;
  tabDataLength: any;
  brandData: any;
  tabDataLengthBrand: any;

  constructor(private productS: TabService,private brandService: BrandService) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      // Close dropdown when clicked outside
      setTimeout(() => {
        window.addEventListener('click', this.closeDropdown);
      });
    } else {
      window.removeEventListener('click', this.closeDropdown);
    }
  }

  closeDropdown = (event: { target: any; }) => {
    if (!this.dropdown.nativeElement.contains(event.target)) {
      this.isOpen = false;
      window.removeEventListener('click', this.closeDropdown);
    }
  }






  ngOnInit(): void {
    this.getTabData();
    this.getBrandData();
  }

  getTabData() {
    this.productS.getAllProducts().subscribe((data: any) => {
      console.log(data);
      this.tabData = data;
      this.tabDataLength = data.length;
    });
  }

  getBrandData() {
    this.brandService.getAllBrands().subscribe((data: any) => {
      console.log(data);
      this.brandData = data;
      this.tabDataLengthBrand = data.length;
    });
  }



}
