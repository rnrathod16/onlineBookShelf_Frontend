import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLayerService {


   static myCart:number[];
  constructor(private httpclient:HttpClient) 
  { 
    ServiceLayerService.myCart=[];
  }

  addToCart(bid:any)
  {
    ServiceLayerService.myCart.push(bid);
  }

  getcart(){
    return ServiceLayerService.myCart;
  }

  deleteFromCart(id:any){
    ServiceLayerService.myCart.splice(ServiceLayerService.myCart.indexOf(105),1);
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

  searchForBooks(bdetail:any){
    return this.httpclient.get("Books/searchBooks/"+bdetail);
  }
}
