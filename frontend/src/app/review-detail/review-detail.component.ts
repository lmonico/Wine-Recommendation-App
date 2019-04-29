import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../_services/review.service";
import {Review} from "../_models/review";
import { Location } from "@angular/common";

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.sass']
})
export class ReviewDetailComponent implements OnInit {
  review: Review;

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getReview();
  }

  getReview(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reviewService.getReview(id).subscribe(review => this.review = review);
  }

  goBack(): void{
    this.location.back();
  }
}
