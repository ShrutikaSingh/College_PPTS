import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Regulartrip } from "../Regulartrip.1";


@Component({
  selector: 'app-createregulartrip',
  templateUrl: './createregulartrip.component.html',
  styleUrls: ['./createregulartrip.component.css']
})
export class CreateregulartripComponent implements OnInit {
  regulartrip: Regulartrip;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.regulartrip = new Regulartrip;
    
  }
  submitForm(){
    this.apiService.createregulartrip(this.regulartrip).subscribe(data => console.log(data));
  }
}
