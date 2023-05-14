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
  user:any
  cartobject:any
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
    this.cartobject={
      "bid": bid,
      "uid": this.user.uid
    }

    this.ser.addToCart(this.cartobject).subscribe((data)=>{

    });
    // alert(bname+"has been Added To Cart!");
    this.toastr.success(bname+" has been Added To Cart!");

  }


  ngOnInit(){
    this.getAllBooks();
  }

}
