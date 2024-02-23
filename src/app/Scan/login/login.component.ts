import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Iauth } from 'src/app/Adm/models/iauth';
import { ServicessService } from '../servicess.service';
import { Iuser } from 'src/app/Adm/models/iuser';
import { Router } from '@angular/router';
import { StateManagerService } from 'src/app/Adm/serviceslogin/state-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private form: FormBuilder,private serv:ServicessService, private router:Router,private statManagerService:StateManagerService){}
 
  auth:Iauth={username:"",password:""};
 
  
login() {
  this.serv.login(this.auth).subscribe((user:Iuser | null)=>{
    if(user==null){
      console.log("login faild");
            // this.router.navigate(['dash']);

    }
    else{
      
      this.router.navigate(['dash']);

    }
  });
  
  }

}
