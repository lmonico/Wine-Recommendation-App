import { Injectable } from '@angular/core';
import { User } from "../_models/user";
import { USERS } from "../mock-users";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(id: number): Observable<User> {
    return of(USERS.find(user => user.id === id));
  }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

}
