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
  removeFromCart(bid:any){
      this.ser.deleteFromCart(bid);
      this.ngOnInit();
  }

}
