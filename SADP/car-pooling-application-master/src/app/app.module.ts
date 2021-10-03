import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { PassengerComponent } from './passenger/passenger.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CreateregulartripComponent } from './createregulartrip/createregulartrip.component';
import { CreatefrequenttripComponent } from './createfrequenttrip/createfrequenttrip.component';
import { AddacarComponent } from './addacar/addacar.component';
import { UpdateacarComponent } from './updateacar/updateacar.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchfrequenttripComponent } from './searchfrequenttrip/searchfrequenttrip.component';
import { SearchregulartripComponent } from './searchregulartrip/searchregulartrip.component';
import { MatchregulartripComponent } from './matchregulartrip/matchregulartrip.component';
import { StarttripComponent } from './starttrip/starttrip.component';
import { CheckinComponent } from './checkin/checkin.component';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DriverComponent,
    PassengerComponent,
    EditprofileComponent,
    CreateregulartripComponent,
    CreatefrequenttripComponent,
    AddacarComponent,
    UpdateacarComponent,
    LogoutComponent,
    SearchfrequenttripComponent,
    SearchregulartripComponent,
    MatchregulartripComponent,
    StarttripComponent,
    CheckinComponent,
    RatingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
