import { Component, OnInit, Input } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() user: User;
}
