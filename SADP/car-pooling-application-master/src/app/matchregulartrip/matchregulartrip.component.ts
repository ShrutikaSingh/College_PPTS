import { Component, OnInit } from '@angular/core';
import { Regulartrip } from '../Regulartrip.1';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-matchregulartrip',
  templateUrl: './matchregulartrip.component.html',
  styleUrls: ['./matchregulartrip.component.css']
})
export class MatchregulartripComponent implements OnInit {
   regulartrip: Regulartrip;
  constructor(private apiService : ApiService) { }

  ngOnInit() {
  
  }


}
