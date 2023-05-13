import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLayerService {

  constructor(private httpclient:HttpClient) { 
  }

  getAllUsers(){
    return this.httpclient.get("Books/list/users");
  }
}
