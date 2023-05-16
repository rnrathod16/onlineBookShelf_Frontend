import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent 
{

  rd:any;
  rd2:any;
  rd3:any;
  rd4:any;
  correctaddress:boolean=false;
  OrderList:any=[];
  amt:any
  sum:any
  taxes=78.89;
  dc=60.00
  fulladd:any
  countryList: any;
  curUser:any
  constructor(private ser:ServiceLayerService,private route:Router){
    this.getCountry();
  }
 ngOnInit(){
    this.rd=localStorage.getItem("Totalsum")
    this.sum=JSON.parse(this.rd)
    this.rd2=localStorage.getItem("AmountDetails")
    this.amt=JSON.parse(this.rd2)
    this.rd3=localStorage.getItem("booksPurchase")
    this.OrderList=JSON.parse(this.rd3)
    console.log(this.OrderList)
    this.rd4=localStorage.getItem("userdata")
    this.curUser=JSON.parse(this.rd4)
    console.log("in checkout"+this.sum)
  }

  getCountry(){
    console.log(this.ser.getCountries().subscribe((data)=>{
      this.countryList = data;
    }));
  }

  getAddress(addressValues:any){

    this.fulladd=addressValues.uname +" "+addressValues.uadd+" "+addressValues.uzip+" "+addressValues.ucountry;
    this.correctaddress=true;
  }

  backToCart(){
    this.route.navigateByUrl("mycartpage");
  }
  
  placeOrder(){
    for(let k=0;k<this.OrderList.length;k++){
      let orderItem={
        "oquantity": this.OrderList[k].bquantity,
        "oamount": this.OrderList[k].bprice,
        "oaddress": this.fulladd,
        "uid": this.curUser.uid,
        "bid": this.OrderList[k].bid
      }
      this.ser.addOrder(orderItem).subscribe((data)=>{

      })
    }
  }


}
