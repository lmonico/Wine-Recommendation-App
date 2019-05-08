import { Injectable } from '@angular/core';
import { Review } from "../_models/review";
import { REVIEWS } from "../mock-reviews";
import {Observable, of} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviewLink;
  constructor(private http: HttpClient) { }
  //will need to change to get real reviews from DB
  getReview(id: number): Observable<Review>{
    this.reviewLink = 'localhost:3000/'+id;
    //TODO test getting single review
    //return this.http.get<Review>(this.reviewLink);
    return of(REVIEWS.find(review => review.id === id));
  }

  getReviews(searchText: string): Observable<Review[]>{
    //construct HTTP request with searchText variable
    //TODO check this search works can't have body in get only post!
    //return this.http.get<Review[]>('localhost:3000/search/'+searchText);
    searchText;
    return of(REVIEWS);
  }
}
