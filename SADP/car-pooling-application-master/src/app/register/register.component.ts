import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.user = new User;
    
  }
  submitForm(){
    this.apiService.registerUser(this.user).subscribe(data => console.log(data));
  }
}
