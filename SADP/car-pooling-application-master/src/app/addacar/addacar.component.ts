import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addacar',
  templateUrl: './addacar.component.html',
  styleUrls: ['./addacar.component.css']
})
export class AddacarComponent implements OnInit {

  car: Car;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.car = new Car;
    
  }
  submitForm(){
    this.apiService.addacar(this.car).subscribe(data => console.log(data));
  }
}