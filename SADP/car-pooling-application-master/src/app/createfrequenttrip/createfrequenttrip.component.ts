import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Frequenttrip } from '../frequenttrip';
 
@Component({
  selector: 'app-createfrequenttrip',
  templateUrl: './createfrequenttrip.component.html',
  styleUrls: ['./createfrequenttrip.component.css']
})
export class CreatefrequenttripComponent implements OnInit {
   frequenttrip:Frequenttrip;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.frequenttrip = new Frequenttrip;
  }

  submitForm(){
    this.apiService. createfrequenttrip(this.frequenttrip).subscribe(data => console.log(data));
  }
}

 
