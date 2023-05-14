import { Component } from '@angular/core';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent 
{

  BooksInCart:any
  IdsInCart:any
  constructor(private ser: ServiceLayerService){
    this.IdsInCart=[];
    this.BooksInCart=[];
  }

  ngOnInit(){
    this.IdsInCart.splice(0);
    this.BooksInCart.splice(0);
    this.IdsInCart= this.ser.getcart();
    this.displayBooksInCart();
    console.log(this.BooksInCart);
  }

  displayBooksInCart()
  {
    for(let i=0;i<this.IdsInCart.length;i++)
    {
      this.ser.getBookById(this.IdsInCart[i]).subscribe((data)=>{
        this.BooksInCart.push(data);
      })

    }
  }
  removeFromCart(b:any){
      this.ser.deleteFromCart(b.bid);
      console.log(this.ser.getcart());
      alert(b.bname + "Has been removed from Cart!");
      this.ngOnInit();
  }

}
