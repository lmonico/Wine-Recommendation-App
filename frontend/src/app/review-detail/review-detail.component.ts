import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.sass']
})
export class ReviewDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getReview();
  }

  getReview(){
    
  }
}
