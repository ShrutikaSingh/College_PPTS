import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DriverComponent } from './driver/driver.component';
import { PassengerComponent } from './passenger/passenger.component';
import { CreateregulartripComponent } from './createregulartrip/createregulartrip.component';
import { CreatefrequenttripComponent } from './createfrequenttrip/createfrequenttrip.component';
import { AddacarComponent } from './addacar/addacar.component';
import { UpdateacarComponent } from './updateacar/updateacar.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchfrequenttripComponent } from './searchfrequenttrip/searchfrequenttrip.component';
import { SearchregulartripComponent } from './searchregulartrip/searchregulartrip.component';
import { MatchregulartripComponent } from './matchregulartrip/matchregulartrip.component';
import { RatingComponent } from './rating/rating.component';
import { StarttripComponent } from './starttrip/starttrip.component';
import { CheckinComponent } from './checkin/checkin.component';
  

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
 
  {path:"dashboard", component:DashboardComponent},
  {path:"editprofile", component:EditprofileComponent},
  {path:"driver", component:DriverComponent},
  {path:"passenger", component:PassengerComponent},
  {path:"createregulartrip", component:CreateregulartripComponent},
  {path:"createfrequenttrip", component:CreatefrequenttripComponent},
  {path:"addacar", component:AddacarComponent},
  {path:"updateacar", component:UpdateacarComponent},
  {path:"about", component:AboutComponent},
  {path:"logout", component:LogoutComponent},
  {path:"searchfrequenttrip", component:SearchfrequenttripComponent },
  {path:"searchregulartrip", component:SearchregulartripComponent},
  {path:"matchregulartrip",component:MatchregulartripComponent},
  {path:"rating",component:RatingComponent},
  {path:"starttrip",component:StarttripComponent},
  {path:"checkin",component:CheckinComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
