import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: User;
  //give users access to user service
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
//asynchronous call to get list of users!
  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  onSelect(user: User): void{
    this.selectedUser = user;
  }

}
