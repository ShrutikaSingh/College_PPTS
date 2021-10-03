import { Component, OnInit } from '@angular/core';
declare const starmark: any;
declare const result:any;

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    starmark();
    result();

  }

}
