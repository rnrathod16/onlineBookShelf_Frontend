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
  thisbookqty:any
  curbook:any
  total_sum:any=0;
  Amount: any
  taxes: any=78.89;
  dc:any=60;
  toPay: any;
  citem:any;
  cwitem:any;
  qty:any;
  updatedList:any=[]
  rd:any;
  curuser:any;
  constructor(private ser: ServiceLayerService,private route:Router){
    this.rd=localStorage.getItem("userdata");
    this.curuser=JSON.parse(this.rd)
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
 
  
  displayBooksInCart()
  {
      this.ser.getcart(this.curuser.uid).subscribe((cartlist)=>
      {
        this.IdsInCart=cartlist;
        for(let i=0;i<this.IdsInCart.length;i++){
          //this.thisbookqty=this.IdsInCart[i].quantity
          this.ser.getBookById(this.IdsInCart[i].bid).subscribe((bookdata)=>{
            this.curbook=bookdata
            let x={     "bid":this.curbook.bid,
              "bname": this.curbook.bname,
              "bdesc": this.curbook.bdesc,
              "bprice": this.curbook.bprice,
              "bauthor": this.curbook.bauthor,
              "bpublishdate": this.curbook.bpublishdate,
              "bimg": this.curbook.bimg,
              "bstock": this.curbook.bstock,
              "bstatus": this.curbook.bstatus,
              "cid": this.curbook.cid,
              "bquantity": this.IdsInCart[i].quantity
        };
            this.BooksInCart.push(x)  
          })
        }
      }) 
  }

  checkoutCalculateSum()
{
    
    for(let i=0;i<this.BooksInCart.length;i++)
    {
      this.ser.getOneBookFromCart(this.BooksInCart[i].bid,this.curuser.uid).subscribe((data)=>{
        this.cwitem=data; 
        this.total_sum=parseInt(this.total_sum)+(parseInt(this.BooksInCart[i].bprice)*parseInt(this.cwitem.quantity));
        console.log(this.cwitem.quantity)
        console.log(this.BooksInCart[i].bprice)
        console.log("after"+this.total_sum)
        localStorage.setItem("Totalsum",JSON.stringify(this.total_sum));
      }) 
      
    }
        
    this.toPay=parseInt(this.total_sum)+parseInt(this.taxes)+parseInt(this.dc);

    localStorage.setItem("booksPurchase",JSON.stringify(this.BooksInCart))
 
    localStorage.setItem("AmountDetails",JSON.stringify(this.toPay));
    this.route.navigateByUrl("checkoutpage");
}
  

  purchaseCart()
  {
    this.checkoutCalculateSum();
    console.log("totalSum:"+this.total_sum)
    console.log("totalSum:"+this.toPay)
    
  }

  removeFromCart(b:any){
    this.ser.deleteFromCart(this.curuser.uid,b.bid).subscribe((data)=>{
      this.ngOnInit();
    });
  }

  // getCurrentQuantity(){
  //   this.ser.getOneBookFromCart(bid,this.curuser.uid).subscribe((data)=>{
  //     this.citem=data;
  //   })
  // }

  plus(bid:any)
  {
    this.ser.getOneBookFromCart(bid,this.curuser.uid).subscribe((data)=>{
      this.citem=data;
      this.citem.quantity += 1;
      this.ser.updateOneBookQty(this.citem).subscribe((data)=>{
        this.qty=this.citem.quantity;
      })
      
    })
  }

  minus(bid:any){
    this.ser.getOneBookFromCart(bid,this.curuser.uid).subscribe((data)=>{
      this.citem=data;
      this.citem.quantity -= 1;
      this.ser.updateOneBookQty(this.citem).subscribe((data)=>{})
      this.qty=this.citem.quantity;
    })
  }
}



// getCurrentQuantity(){
//   return this.quantity;
// }

// increaseQuantity(data:any){
//   this.quantity=parseInt(data.bq)
//   for(let i=0;i<this.BooksInCart.length;i++){
//       if(data.bid==this.BooksInCart[i].bid){
//        this.BooksInCart[i].bquantity=this.quantity
//       }
//   }
  
// }
/*
  displayBooksInCart()
  {
      this.ser.getcart(this.curuser.uid).subscribe((cartlist)=>
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
  }*/