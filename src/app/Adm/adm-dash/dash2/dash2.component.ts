import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dash2',
  templateUrl: './dash2.component.html',
  styleUrls: ['./dash2.component.css']
})
export class Dash2Component {

  isOpen: boolean = false;
  @ViewChild('dropdown') dropdown!: ElementRef;

  constructor() { }

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

}
