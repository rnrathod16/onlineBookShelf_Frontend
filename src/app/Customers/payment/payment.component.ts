import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent 
{
  rd: any;
  rd1:any
  rd2:any
  rd3:any
  curuser:any
  oq:any;
  op:any
  purchaseItem: any;
  countryList:any;
  address:any
  ngOnInit(){
    this.rd=localStorage.getItem("PurchaseItem")
    this.purchaseItem=JSON.parse(this.rd)
    this.rd3=localStorage.getItem("userdata")
    this.curuser=JSON.parse(this.rd3)
    this.rd1=localStorage.getItem("totalAmount")
    this.op=JSON.parse(this.rd1)
    this.rd2=localStorage.getItem("totalquantity")
    this.oq=JSON.parse(this.rd2)
  }
  constructor(private service:ServiceLayerService,private route:Router,private toastr: ToastrService){
    this.getCountry();
  }

  getCountry(){
    console.log(this.service.getCountries().subscribe((data)=>{
      this.countryList = data;
    }));
  }
  getAddress(add:any){
    this.address=add.uname+" "+add.uadd+" "+add.uzip+" "+add.ucountry;
  }

  addOrder(){
   
    let orderItem={
      "oquantity":  this.oq,
      "oamount":this.op,
      "oaddress":this.address,
      "uid": this.curuser.uid,
      "bid": this.purchaseItem.bid
    }

    this.service.addOrder(orderItem).subscribe((data)=>{

    })
    this.toastr.success("Your order has been Placed!");
  }
}
