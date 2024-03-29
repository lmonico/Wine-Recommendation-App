import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout'; //used for responsive nav-bar
import {
  MatButtonModule,
  MatButtonToggleModule, MatCardModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from "@angular/material";
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from "./navbar/navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    UserDetailComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ReviewsComponent,
    LoginComponent,
    ReviewDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
