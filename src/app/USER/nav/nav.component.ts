import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { animate, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddcompoComponent } from '../addcompo/addcompo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nave',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
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
export class NavComponent implements OnInit {

  isOpen: boolean = false;
  @ViewChild('dropdown') dropdown!: ElementRef;
  // emails: any;

  currentPage: number = 0; // Current page index
  itemsPerPage: number = 3; // Number of items per page
  emails: any[] = []; // Array containing emails
  totalPages: number = 0; // Total number of pages


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



  constructor(private emailService: UserService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.getEmails();
   
  }

  
openDialog(){
  this.dialog.open(AddcompoComponent,{
    width:'550px',
    height:'480px'
  })
}

  


  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  getEmails() {
    this.emailService.getAllEmails().subscribe((datas: any) => {
      this.emails = datas;
      this.calculateTotalPages(); // Calculate total pages after receiving data
      this.dataSource.data = datas;
      this.dataSource.paginator = this.paginator;
      this.filteredEmails = datas
      // this.dataSource.sort = this.sort;
    });
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.emails.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  filteredEmails: any[] = []; // Declare filteredEmails array

  // Method to get emails for the current page
  getCurrentPageEmails(): any[] {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredEmails.slice(startIndex, endIndex);
  }


  onDelete(id: string): void {
    // Use SweetAlert to confirm the deletion
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this email!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Yes," proceed with deletion
        this.emailService.deleteEmail(id).subscribe(
          () => {
            console.log('Product deleted successfully');
  
            // Display success message using SweetAlert
            Swal.fire({
              icon: 'success',
              title: 'Email deleted successfully!',
              showConfirmButton: false,
              timer: 1500 // Automatically close after 1.5 seconds
            });
  
            // Optionally, you can reload the data or update the dataSource here
            this.getEmails();
          },
          (error) => {
            console.error('Error deleting email', error);
  
            // Display error message using SweetAlert
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Failed to delete product. Please try again.',
            });
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // User clicked "No," do nothing
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
  
    if (filterValue) {
      // Filter the emails array based on the search query
      this.filteredEmails = this.emails.filter(email =>
        email.brandName.toLowerCase().includes(filterValue) ||
        email.description.toLowerCase().includes(filterValue)
      );
    } else {
      // If the search query is empty, display all emails
      this.filteredEmails = this.emails;
    }
  }
  


  openModal(): void {
    const dialogRef = this.dialog.open(AddcompoComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Result from modal:', result);
      // this.modalResult = result;
    });
  }

  

}
