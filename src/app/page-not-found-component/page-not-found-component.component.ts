import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-not-found-component',
  templateUrl: './page-not-found-component.component.html',
  styleUrls: ['./page-not-found-component.component.css']
})
export class PageNotFoundComponentComponent {

  constructor() {
    // Swal.fire({
    //   title: 'Page Not Found',
    //   text: 'The page you requested does not exist.',
    //   icon: 'error'
    // });
  }
  
}
