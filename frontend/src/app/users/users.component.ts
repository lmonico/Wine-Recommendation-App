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
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  onSelect(user: User): void{
    this.selectedUser = user;
  }

}
