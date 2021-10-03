import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updateacar',
  templateUrl: './updateacar.component.html',
  styleUrls: ['./updateacar.component.css']
})
export class UpdateacarComponent implements OnInit {

  car: Car;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.car = new Car;
    
  }
  submitForm(){
    this.apiService.updatecar(this.car).subscribe(data => console.log(data));
  }
}


