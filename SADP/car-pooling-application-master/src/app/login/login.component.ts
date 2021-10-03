import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
 username:any;
  constructor(private apiService : ApiService,private _router:Router) { }

  ngOnInit() {
    this.user = new User;
  }

    submitForm(){
      
      this.apiService.userLogin(this.user).subscribe(data =>{
       
       this._router.navigate(['/dashboard']);
     this.username=data;

      
      });
      console.log(this.username);
    }}
      
   

 
  
      
