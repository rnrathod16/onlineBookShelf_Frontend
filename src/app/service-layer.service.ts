import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLayerService {
  bookData:any;
  tsum:any;

  constructor(private httpclient:HttpClient) 
  { 
  }

  setsum(data:any){
    this.tsum = data;
  }

  getsum(){
    return this.tsum;
  }

  setBookData(data:any){
    this.bookData = data;
  }

  getBookData(){
    return this.bookData;
  }

  addToCart(cartitem:any)
  {
    
    return this.httpclient.post("Books/wish",cartitem);
    console.log("in service: "+cartitem)
  }

  getcart(uid:any){
    return this.httpclient.get("Books/wish/"+uid);
  }

  getOneBookFromCart(bid:any,uid:any){
      return this.httpclient.get("Books/singleBookInWishList/"+bid+"/"+uid)
  }

  reduceStocks(q:any,id:any){
    return this.httpclient.post("Books/reduceStock/"+q+"/"+id,0);
}

  updateOneBookQty(nb:any){
    return this.httpclient.put("Books/updateWishItem",nb);
  }

  deleteFromCart(uid:any,bid:any){
    return this.httpclient.delete("Books/wishlist/"+bid+"/"+uid);
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

  updateBook(data:any){
    return this.httpclient.put("Books/updateBook",data);
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
    return this.httpclient.delete("Books/categories/"+id);
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

  updateUserData(data:any){
    return this.httpclient.post("Books/updateuser",data);
  }

  getOrderhistory(id:any){
    return this.httpclient.get("Books/list/users/orders/"+id);
  }

  addOrder(orderdata:any){
    return this.httpclient.post("Books/insertOrder",orderdata)
  }

  getuserbyemail(data:any){
    return this.httpclient.post("Books/getuserbyemail",data);
  }
}
