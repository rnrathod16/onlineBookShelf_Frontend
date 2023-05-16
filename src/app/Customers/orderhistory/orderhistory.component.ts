import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent {
                                                                                                                                                                                                           
  userorderhistory:any;
  userId:any;
  displayId:any;
  bookId:any=[];
  bookName:any=[];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  temp:any={"bname":"","oquantity":""};
  abcd:any;
  bid:any;
  orderDetails:any;
  book:any;

  constructor(private ser:ServiceLayerService, private route:Router,private toastr: ToastrService){

  }

  ngOnInit(){
    this.userId = localStorage.getItem("userdata");
    this.displayId = JSON.parse(this.userId).uid;    
    this.getOrderHistory(this.displayId);
  }


  getOrderHistory(info:any){
    console.log(2);
    
    this.ser.getOrderhistory(info).subscribe((data) => {
    this.userorderhistory = data;
    console.log(this.userorderhistory);
    
    for(let i=0;i<this.userorderhistory.length;i++){
      this.bid = this.userorderhistory[i].bid;
      this.getBookById(this.bid);
      // this.orderDetails.push({"bname":this.userorderhistory[i].oquantity,"oquantity":this.bookName[i].bname})
       this.bookId.push(this.userorderhistory[i].bid);
    }


    console.log(this.bookId);
    console.log(this.bookName);

    console.log(this.bookName.length);
    console.log(this.bookName);
    console.log(this.userorderhistory[0]);

  })
  
}

getBookById(id:any){
  console.log("1");
  
  this.ser.getBookById(id).subscribe((data) =>{
    this.book = data;
    console.log(this.book);
    // this.bookName.push(this.book);

    for(let i=0;i<this.userorderhistory.length;i++){
      if(this.userorderhistory[i].bid == this.book.bid){
        this.bookName.push({"book":this.book,"orders":this.userorderhistory[i]});
      }
    }
    
    
    })
  }


}