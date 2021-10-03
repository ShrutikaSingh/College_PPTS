import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  user: User;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.user = new User;
    
  }
  submitForm(){
    this.apiService.userUpdate(this.user).subscribe(data => console.log(data));
  }
}

