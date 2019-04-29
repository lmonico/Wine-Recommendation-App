import { Injectable } from '@angular/core';
import { Review } from "../_models/review";
import { REVIEWS } from "../mock-reviews";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  getReview(id: number): Observable<Review>{
    return of(REVIEWS.find(review => review.id === id));
  }
}
