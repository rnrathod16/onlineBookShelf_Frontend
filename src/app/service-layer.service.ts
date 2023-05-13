import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLayerService {

  constructor(private httpclient:HttpClient) { 
  }

  getCountries(){
    return this.httpclient.get("https://restcountries.com/v2/all");
  }

  getAllUsers(){
    return this.httpclient.get("Books/list/users");
  }

  registerUser(data:any){
    return this.httpclient.post("Books/list/users",data);
  }

  loginUser(data:any){
    return this.httpclient.post("Books/login",data);
  }

  searchUserByEmail(data:any){
    return this.httpclient.post("Books/getuser",data);
  }
}
