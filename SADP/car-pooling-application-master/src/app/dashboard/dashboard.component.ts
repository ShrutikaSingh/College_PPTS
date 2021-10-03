import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
 username:any;
  constructor(private apiService : ApiService) { }
  user: User;
  ngOnInit() {
    this.user = new User;
    this.apiService.userLogin(this.user).subscribe(data =>{
      this.username=data;
    });
  }
}
  