import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../_services/review.service";
import {Review} from "../_models/review";
import { Location } from "@angular/common";
import {MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.sass']
})
export class ReviewDetailComponent implements OnInit {
  review: Review;
  columnsToDisplay = ['title','variety', 'price', 'points', 'country','link'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private location: Location
  ) {}
  dataSource;
  ngOnInit() {
    this.getReview();
  }

  getReview(): void {
    console.log("I'm in the get review function in review detail component");
    const id = +this.route.snapshot.paramMap.get('id');
    this.reviewService.getReview(id).subscribe(review => this.review = review);
    this.dataSource = new MatTableDataSource(this.review.recommendations);
  }

  goBack(): void{
    this.location.back();
  }
}
