import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from '../_models/user';
import { AuthService } from  '../_services/auth.service';
import {Component, OnInit} from "@angular/core";

//some code provided by
//https://www.techiediaries.com/angular-tutorial-reactive-forms/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
  }
}
