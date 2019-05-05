import { Component, OnInit } from '@angular/core';
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})

export class UsersComponent implements OnInit {

  users: User[];
  //give users access to user service
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
//asynchronous call to get list of users!
  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
