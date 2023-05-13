import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLayerService {


  myCart:any
  constructor(private httpclient:HttpClient) 
  { 
    this.myCart=[];
  }

  addToCart(bid:any)
  {
    this.myCart.push(bid);
  }

  getcart(){
    return this.myCart;
  }

  deleteFromCart(id:any){
    const index = this.myCart.findIndex(id);
    this.myCart.splice(index,1);
  }

  getCountries(){
    return this.httpclient.get("https://restcountries.com/v2/all");
  }

  getAllUsers(){
    return this.httpclient.get("Books/list/users");
  }

  getAllBooks(){
    return this.httpclient.get("Books/list");
  }

  getUserById(id:any){
    return this.httpclient.get("Books/getuserbyid/"+id);
  }

  getBookById(id:any){
    return this.httpclient.get("Books/getbookbyid/"+id);
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

  bookStatusFreePaid(data:any){
    return this.httpclient.post("Books/bookstatus",data);
  }
}
