import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { subscribeOn } from 'rxjs';
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


  constructor(private ser:ServiceLayerService, private route:Router,private toastr: ToastrService){
   
  }

  ngOnInit(){
    this.userId = localStorage.getItem("userdata");
    this.displayId = JSON.parse(this.userId).uid;    
    this.getOrderHistory();

  }


  getOrderHistory (){

    this.ser.getOrderhistory(this.displayId).subscribe((data) => {
    this.userorderhistory = data;
    for(let i=0;i<this.userorderhistory.length;i++){
      // console.log(this.userorderhistory[i].bid);
       this.bookId.push(this.userorderhistory[i].bid);
    }
   
    console.log(this.bookId);
    for(let i=0;i<this.userorderhistory.length;i++){
      // console.log(this.userorderhistory[i].bid);
      this.getBookById(this.bookId[i]);
    }
    
    for(let i=0;i<this.userorderhistory.length;i++){
      // console.log(this.userorderhistory[i].bid);
      for(let j=0;j<this.userorderhistory.length;j++){
          if(this.bookId[i] == this.bookName[j].bid){
            console.log(this.bookName[j].bid);
          }

      }
    
    }
    console.log(this.bookName);
    })

  }

  getBookById(id:any){
    this.ser.getBookById(id).subscribe((data) =>{
      // console.log(data);
      this.bookName.push(data);
    
    })
  }

}