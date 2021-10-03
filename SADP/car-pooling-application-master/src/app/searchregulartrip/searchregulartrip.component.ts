import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Regulartrip } from '../Regulartrip.1';


@Component({
  selector: 'app-searchregulartrip',
  templateUrl: './searchregulartrip.component.html',
  styleUrls: ['./searchregulartrip.component.css']
})
export class SearchregulartripComponent implements OnInit {
  regulartrip: Regulartrip;
  regulartrips:any;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.regulartrip = new Regulartrip;
    
  }
  submitForm(){
    
  }
getRTrips(){
  

this.apiService.searchregulartrip(this.regulartrip).subscribe((data)=>{
  this.regulartrips=data;
});
console.log(this.regulartrips);
}
  
}
