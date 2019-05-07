import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  query: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  search(searchText: string): void {
    //do something
    this.query = "../reviews/" + searchText;
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users.slice(0, 4));
  }
}
