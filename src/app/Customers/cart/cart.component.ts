import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  toggle:any;
  //sendsum: void;

  constructor(private ser: ServiceLayerService,private route:Router, private toastr: ToastrService){
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
              //"bquantity": this.toggle ? (this.IdsInCart[i].quantity-1)+1 : (this.IdsInCart[i].quantity+1)-1
                };
            this.BooksInCart.push(x)  
          })
        }
      }) 
  }

  checkoutCalculateSum()
{
    this.total_sum = 0;
    for(let i=0;i<this.BooksInCart.length;i++)
    {
      this.ser.getOneBookFromCart(this.BooksInCart[i].bid,this.curuser.uid).subscribe((data)=>{
        this.cwitem=data; 
        this.total_sum=parseInt(this.total_sum)+(parseInt(this.BooksInCart[i].bprice)*parseInt(this.cwitem.quantity));
        console.log(this.cwitem.quantity)
        console.log(this.BooksInCart[i].bprice)
        console.log("after"+this.total_sum) 
        this.ser.setsum(this.total_sum);
      }) 
      this.toPay=parseInt(this.total_sum)+parseInt(this.taxes)+parseInt(this.dc);
      localStorage.setItem("booksPurchase",JSON.stringify(this.BooksInCart))
      localStorage.setItem("AmountDetails",JSON.stringify(this.toPay));
    }
        
    

     
}
  

  purchaseCart()
  {

    // this.checkoutCalculateSum();
    // localStorage.setItem("Totalsum",JSON.stringify(this.total_sum));
     
    // console.log("totalSum:"+this.total_sum)
    localStorage.setItem("list", JSON.stringify(this.BooksInCart));
    this.route.navigateByUrl("checkoutpage");
  }

  removeFromCart(b:any){
    this.ser.deleteFromCart(this.curuser.uid,b.bid).subscribe((data)=>{
      console.log(data);
      
      this.ngOnInit();
    });
  }

  qtyDetails(bid:any,qtyForm:any)
  {
    
    console.log(qtyForm);
    this.ser.getOneBookFromCart(bid,this.curuser.uid).subscribe((data)=>{
      this.citem=data;
      this.citem.quantity =qtyForm.qty;
      this.ser.updateOneBookQty(this.citem).subscribe((data)=>{
        // this.qty=this.citem.quantity;
        this.toastr.success("Quantity updated!")
      })
    })
    
  }

  // plus(bid:any)
  // { 
  //   this.toggle = true;
  //   this.ser.getOneBookFromCart(bid,this.curuser.uid).subscribe((data)=>{
  //     this.citem=data;
  //     console.log(this.citem);
  //     this.citem.quantity += 1;
  //     this.ser.updateOneBookQty(this.citem).subscribe((data)=>{
  //       // this.qty=this.citem.quantity;
  //     })
  //     console.log(this.citem);
      
  //   })
  //   this.ngOnInit();
  // }

  // minus(bid:any){
  //   this.toggle = false;
  //   this.ser.getOneBookFromCart(bid,this.curuser.uid).subscribe((data)=>{
  //     this.citem=data;
  //     console.log(this.citem);
      
  //     this.citem.quantity -= 1;
  //     this.ser.updateOneBookQty(this.citem).subscribe((data)=>{})
  //     // this.qty=this.citem.quantity;
  //     console.log(this.citem);
  //   })

  //   this.ngOnInit();
  // }
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