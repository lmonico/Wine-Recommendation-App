import { Injectable } from '@angular/core';
import { Review } from "../_models/review";
import { REVIEWS } from "../mock-reviews";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }
  //will need to change to get real reviews from DB
  getReview(id: number): Observable<Review>{
    return of(REVIEWS.find(review => review.id === id));
  }

  getReviews(searchText: string): Observable<Review[]>{
    //construct HTTP request with searchText variable
    searchText;
    return of(REVIEWS);
  }
}
