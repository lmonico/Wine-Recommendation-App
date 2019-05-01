import { Component, OnInit } from '@angular/core';
import {Review} from "../_models/review";
import {ReviewService} from "../_services/review.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.sass']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[];
  columnsToDisplay = ['variety','title'];

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews(): void{
    this.reviewService.getReviews().subscribe(reviews => this.reviews = reviews);
  }
}
