import { Component } from '@angular/core';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent 
{

  IdsInCart:any=[];
  BooksInCart:any=[];
  constructor(private ser: ServiceLayerService){
  }

  ngOnInit(){
    this.BooksInCart=[]
    this.displayBooksInCart();
  }

  displayBooksInCart()
  {
      this.ser.getcart().subscribe((cartlist)=>{
        this.IdsInCart=cartlist;
        console.log("hi"+this.IdsInCart[0].bid)
        for(let i=0;i<this.IdsInCart.length;i++){
          this.ser.getBookById(this.IdsInCart[i].bid).subscribe((bookdata)=>{
            this.BooksInCart.push(bookdata);
            console.log(bookdata);
          })
        }
      })
      
      
  }
  removeFromCart(b:any){
    this.ser.deleteFromCart(b.bid).subscribe((data)=>{
      this.ngOnInit();
    });
    

  }

}
