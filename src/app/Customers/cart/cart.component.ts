import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  quantity:any=1;
  curbook:any
  total_sum:any;
  x:any={     "bid":"",
              "bname": "",
              "bdesc": "",
              "bprice": "",
              "bauthor": "",
              "bpublishdate": "",
              "bimg": "",
              "bstock": "",
              "bstatus": "",
              "cid": "",
              "bquantity":""
        };
  Amount: any
  taxes: any=78.89;
  dc:any=60;
  toPay: any;
  refreshCount=1;
  updatedList:any=[]
  constructor(private ser: ServiceLayerService,private route:Router){
  }

  ngOnInit(){
    this.BooksInCart=[]
    console.log("loading again")
      this.displayBooksInCart();
    
  }

  callAgain()
  {
      console.log("here is the ew list")
      for(let i=0;i<this.BooksInCart.length;i++){
        
        console.log(this.BooksInCart[i])
    }
  }
  increaseQuantity(data:any){
    this.quantity=parseInt(data.bq)
    for(let i=0;i<this.BooksInCart.length;i++){
        if(data.bid==this.BooksInCart[i].bid){
         this.BooksInCart[i].bquantity=this.quantity
        }
    }
    
  }
  
  displayBooksInCart()
  {
      this.ser.getcart().subscribe((cartlist)=>
      {
        this.IdsInCart=cartlist;
        for(let i=0;i<this.IdsInCart.length;i++){
          this.ser.getBookById(this.IdsInCart[i].bid).subscribe((bookdata)=>{
            this.curbook=bookdata
            this.x={     "bid":this.curbook.bid,
              "bname": this.curbook.bname,
              "bdesc": this.curbook.bdesc,
              "bprice": this.curbook.bprice,
              "bauthor": this.curbook.bauthor,
              "bpublishdate": this.curbook.bpublishdate,
              "bimg": this.curbook.bimg,
              "bstock": this.curbook.bstock,
              "bstatus": this.curbook.bstatus,
              "cid": this.curbook.cid,
              "bquantity": this.quantity
        };
            this.BooksInCart.push(this.x)  
            console.log(this.x);
          })
        }
      })
      
      
  }

  checkoutCalculateSum()
{
    this.total_sum=0;
    for(let i=0;i<this.BooksInCart.length;i++){
        this.total_sum=parseInt(this.total_sum)+(parseInt(this.BooksInCart[i].bprice)*parseInt(this.BooksInCart[i].bquantity));
    }
    this.toPay=parseInt(this.total_sum)+parseInt(this.taxes)+parseInt(this.dc);
}
  

  purchaseCart()
  {
    this.checkoutCalculateSum();
    console.log("totalSum:"+this.total_sum)
    console.log("totalSum:"+this.toPay)
    
    localStorage.setItem("booksPurchase",JSON.stringify(this.BooksInCart))
    localStorage.setItem("Totalsum",JSON.stringify(this.total_sum));
    localStorage.setItem("AmountDetails",JSON.stringify(this.toPay));
    this.route.navigateByUrl("checkoutpage");

  }

  removeFromCart(b:any){
    this.ser.deleteFromCart(b.bid).subscribe((data)=>{
      this.ngOnInit();
    });
  }
}
// getCurrentQuantity(){
//   return this.quantity;
// }

// checkoutCalculateSum()
// {
//     this.total_sum=0;
//     for(let i=0;i<this.BooksInCart.length;i++){
//         this.total_sum=parseInt(this.total_sum)+(parseInt(this.BooksInCart[i].bprice)*parseInt(this.BooksInCart[i].bq));
//     }
//     this.toPay=parseInt(this.total_sum)+parseInt(this.taxes)+parseInt(this.dc);

//     this.Amount ={
//       "tax":"78.89",
//       "dc" : "60.00",
//       "pay" : this.toPay
//     };
// }