import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddcompoComponent } from 'src/app/USER/addcompo/addcompo.component';
import { UserService } from 'src/app/USER/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-suggtab',
  templateUrl: './suggtab.component.html',
  styleUrls: ['./suggtab.component.css']
})
export class SuggtabComponent {

  isOpen: boolean = false;
  @ViewChild('dropdown') dropdown!: ElementRef;
  emails: any[] = [];
  currentPage: number = 0; // Current page index
  itemsPerPage: number = 3; // Number of items per page
  totalPages: number = 0; // Total number of pages
  filteredEmails: any[] = []; // Declare filteredEmails array

  constructor(private emailService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getEmails();
  }

  openDialog() {
    this.dialog.open(AddcompoComponent, {
      width: '550px',
      height: '480px'
    });
  }

  getEmails() {
    this.emailService.getAllEmails().subscribe((datas: any) => {
      this.emails = datas;
      this.calculateTotalPages(); // Calculate total pages after receiving data
      // this.applyFilter(); // Filter emails initially
      this.filteredEmails = this.emails;
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

  // Method to get emails for the current page
  getCurrentPageEmails(): any[] {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredEmails.length);
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

  // applyFilter(): void {
  //   // Filter the emails array based on the search query
  //   this.filteredEmails = this.emails;
  // }

  openModal(): void {
    const dialogRef = this.dialog.open(AddcompoComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Result from modal:', result);
      // this.modalResult = result;
    });
  }



  applyFilter(event: Event): void {
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
  
    // Recalculate total pages after applying filter
    this.calculateTotalPages();
  }
  
  
}
