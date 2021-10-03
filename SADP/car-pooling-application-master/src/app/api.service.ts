import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Car } from './Car';
import { Regulartrip } from "./Regulartrip.1";
import {Frequenttrip} from "./Frequenttrip";
import { Observable } from 'rxjs';



const remoteUrl = "http://localhost:9001";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  registerUser(user:User){
    return this.httpClient.post(remoteUrl+'/newuser/details',user);

  }
  userLogin(user:User){
    return this.httpClient.post(remoteUrl+'/newuser/login',user);
  }
  userUpdate(user:User){
    return this.httpClient.put(remoteUrl+'/newuser/updateuser/'+user.uId,user);
  }
  addacar(car:Car){
    return this.httpClient.post(remoteUrl+'/car/cardetails',car);
  }
  createregulartrip(regulartrip:Regulartrip){
    return this.httpClient.post(remoteUrl+'/rtrip/rdetails',regulartrip);
  }
  createfrequenttrip(frequenttrip:Frequenttrip){
    return this.httpClient.post(remoteUrl+'/ftrip/details',frequenttrip);
  }
  searchregulartrip(regulartrip:Regulartrip):Observable<any>{
    return this.httpClient.get(remoteUrl+'/rtrip/get/all/'+regulartrip.origin+'/'+regulartrip.destination);
  }
  searchfrequenttrip(frequenttrip:Frequenttrip):Observable<any>{
    return this.httpClient.get(remoteUrl+'/ftrip/get/all/'+frequenttrip.origin+'/'+frequenttrip.destination);
  }
  updatecar(car:Car){
    return this.httpClient.put(remoteUrl+'/car/updatecar/'+car.carId,car);
  }
  

}
