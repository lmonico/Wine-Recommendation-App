import {Component, OnInit, ViewChild} from '@angular/core';
import {Review} from "../_models/review";
import {ReviewService} from "../_services/review.service";
import {MatSort, MatTableDataSource} from "@angular/material";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.sass']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[];
  searchText: string;
  columnsToDisplay = ['title','variety', 'price', 'points', 'country','link'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) { }
  dataSource;
  ngOnInit() {
    this.getReviews();
    this.dataSource.sort = this.sort;
  }

  getReviews(): void{
    this.searchText = this.route.snapshot.paramMap.get('searchText');
    //TO DO pass searchtext to review service, need to update getReviews method
    //get reviews from review service
    this.reviewService.getReviews().subscribe(reviews => this.reviews = reviews);
    //update table datasource with reviews
    this.dataSource = new MatTableDataSource(this.reviews);
  }
}
