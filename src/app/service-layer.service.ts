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
}
