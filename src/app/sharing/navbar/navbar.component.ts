import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { StateManagerService } from 'src/app/Adm/serviceslogin/state-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
 
  constructor(private stateManagerService:StateManagerService,private router:Router){}

  logout() {
    // @ts-ignore
    this.stateManagerService.clearCurrentUser;
    this.router.navigate(['/']);
    
  }
  

  name=this.stateManagerService.currentUserValue.username;
  isOpen: boolean = false;
  @ViewChild('dropdown') dropdown!: ElementRef;


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
