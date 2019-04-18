import { Component, OnInit, Input } from '@angular/core';
import { User } from "../user";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { UserService } from "../user.service";
import { MatButton } from "@angular/material";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => this.user = user);
  }
  goBack(): void {
    this.location.back();
  }
}