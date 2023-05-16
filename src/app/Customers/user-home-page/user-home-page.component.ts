import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent {

  booklist:any;
  rd:any
  bookCategories:any;
  resultFilter:any;
  filterRes:any = [];
  user:any
  ifexist:boolean=false
  cartobject:any
  currentWishList:any=[]
  allBooks: any;
  constructor(private ser:ServiceLayerService, private route:Router,private toastr: ToastrService){
    this.cartobject={
      "bid": "",
      "uid": ""
      
    }
  }

  getAllBooks()
  {
    this.ser.getAllBooks().subscribe((data)=>{
      this.booklist=data;
    })

  }
  addThisToCart(bid:any,bname:any)
  {
    this.rd=localStorage.getItem("userdata");
    this.user=JSON.parse(this.rd);
    this.ser.getcart(this.user.uid).subscribe((data)=>{
      this.currentWishList=data;
      for(let x=0;x<this.currentWishList.length;x++){
        if(bid==this.currentWishList[x].bid){
            this.ifexist=true;
            console.log(this.ifexist);
        }
      }
      if(!this.ifexist)
    {
      console.log("in not exist part")
      this.cartobject={
        "bid": bid,
        "uid": this.user.uid,
        "quantity":1

      }
      this.ser.addToCart(this.cartobject).subscribe((data)=>{
  
      });
      this.toastr.success(bname+" has been Added To Cart!");
    }
    else
    {
      console.log("in exist part")
      alert("already exists")
      //this.toastr.success(bname+" aLready exists in cart!");
    }
    })
  }

  categoryDetail(data:any){
    this.filterRes = [];
    this.resultFilter = this.booklist.filter((book:any) =>{
      // book.cid==data.cid;
      if(book.cid == data.cid){
        this.filterRes.push(book);
      }     
    })
    console.log(this.filterRes);
  }

  ngOnInit(){
    this.getAllBooks();
    this.ifexist=false;
    this.ser.getAllBooks().subscribe((info)=>{    
      this.allBooks = info;
      this.filterRes = info;
    })

    this.ser.getAllCategories().subscribe((data)=>{
      this.bookCategories = data;    
    })
  }

}
