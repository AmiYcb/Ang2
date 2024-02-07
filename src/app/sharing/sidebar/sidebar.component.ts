import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/USER/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sugg: any;
  nbSugg: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getSuggs(); // Call the method to fetch brands when the component initializes
  }

  getSuggs() {
    this.userService.getAllEmails().subscribe((datas: any) => {
      console.log(datas); // Log the data to the console
      this.sugg = datas;
      this.nbSugg = datas.length; // Fix the typo here, it should be "length" not "length,"
    });
  }
}
