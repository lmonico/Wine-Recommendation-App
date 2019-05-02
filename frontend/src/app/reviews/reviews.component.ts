import {Component, OnInit, ViewChild} from '@angular/core';
import {Review} from "../_models/review";
import {ReviewService} from "../_services/review.service";
import {MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.sass']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[];
  columnsToDisplay = ['title','variety', 'price', 'points', 'country','link'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(private reviewService: ReviewService) { }
  dataSource;
  ngOnInit() {
    this.getReviews();
    this.dataSource.sort = this.sort;
  }

  getReviews(): void{
    //get reviews from review service
    this.reviewService.getReviews().subscribe(reviews => this.reviews = reviews);
    //update table datasource with data
    this.dataSource = new MatTableDataSource(this.reviews);
  }
}
