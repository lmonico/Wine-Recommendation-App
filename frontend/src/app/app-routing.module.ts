import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {ReviewDetailComponent} from "./review-detail/review-detail.component";
import {ReviewsComponent} from "./reviews/reviews.component";

const routes: Routes = [ { path: 'users', component: UsersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: HomeComponent },
  { path: 'userdetail/:id', component: UserDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reviews/reviewdetail/:id', component: ReviewDetailComponent },
  { path: 'reviews/:searchText', component: ReviewsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
