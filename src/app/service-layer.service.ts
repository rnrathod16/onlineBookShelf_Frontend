import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLayerService {


  constructor(private httpclient:HttpClient) 
  { 
  }

  addToCart(cartitem:any)
  {
    
    return this.httpclient.post("Books/wish",cartitem);
    console.log("in service: "+cartitem)
  }

  getcart(){
    return this.httpclient.get("Books/wish");
  }

  deleteFromCart(id:any){
    return this.httpclient.delete("Books/wishlist/"+id);
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

  getAllCategories(){
    return this.httpclient.get("Books/list/categories");
  }

  insertCateogery(data:any){
    return this.httpclient.post("Books/insertCatogery",data);
  }


  deleteCategory(id:any){
    return this.httpclient.delete("Books/categories"+id);
  }

  addBooks(data:any){
    return this.httpclient.post("Books/list",data);
  }

  searchForBooks(bdetail:any){
    return this.httpclient.get("Books/searchBooks/"+bdetail);
  }

  deleteBookById(bid:any){
    return this.httpclient.post("Books/deletebookbyid",bid);
  }

  updateStock(data:any){
    return this.httpclient.put("Books/updateStock",data);
  }

  addOrder(orderdata:any){
    return this.httpclient.post("Books/insertOrder",orderdata)
  }
}
