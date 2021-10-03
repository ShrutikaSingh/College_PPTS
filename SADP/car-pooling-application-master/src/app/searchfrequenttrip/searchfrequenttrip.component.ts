import { Component, OnInit } from '@angular/core';
import { Frequenttrip } from '../Frequenttrip';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchfrequenttrip',
  templateUrl: './searchfrequenttrip.component.html',
  styleUrls: ['./searchfrequenttrip.component.css']
})
export class SearchfrequenttripComponent implements OnInit {

  
  frequenttrips:any;
  frequenttrip: Frequenttrip;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.frequenttrip= new Frequenttrip;
    
  }
  submitForm(){
    
  }
getFTrips(){
  

this.apiService.searchfrequenttrip(this.frequenttrip).subscribe((data)=>{
  this.frequenttrips=data;
});
console.log(this.frequenttrips);
}
  
}

