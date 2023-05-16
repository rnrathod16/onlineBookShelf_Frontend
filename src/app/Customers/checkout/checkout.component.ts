import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceLayerService } from 'src/app/service-layer.service';


declare var Razorpay: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent 
{

  rd:any;
  rd4:any;
  correctaddress:boolean=false;
  sum:any=0;
  taxes=78.89;
  dc=60.00
  fulladd:any
  countryList: any;
  curUser:any
  blist:any=[]
  toPay: any=0;

  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
    "key": "rzp_test_fRnBn4QRtzOWcX",
    "amount": "200",
    "name": "Book Shelf",
    "description": "Web Development",
    "image": "assets/Images/Logo.png",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  constructor(private ser:ServiceLayerService,private route:Router){
    this.getCountry();
  }
 ngOnInit(){
    
    this.rd4=localStorage.getItem("userdata")
    this.curUser=JSON.parse(this.rd4)
    this.rd=localStorage.getItem("list")
    this.blist=JSON.parse(this.rd)
    this.calculate(this.blist);
    
  }

  calculate(list:any){

    for(let i=0;i<this.blist.length;i++)
    {
      console.log(this.blist[i].bprice)
      console.log(this.blist[i].bquantity)
      console.log(this.sum)
        this.sum=this.sum+(this.blist[i].bprice*this.blist[i].bquantity); 
      this.toPay=this.sum+this.taxes+this.dc;
      console.log(this.sum)
    }
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
    

    this.paymentId = '';
    this.error = '';
    this.options.amount = (this.toPay *100).toString(); //paise
    this.options.prefill.name = this.curUser.uname;
    this.options.prefill.email = "vishaldongare823@gmail.com";
    this.options.prefill.contact = "9325592168";
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
      //this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
    }
    );
  }

  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    // this.message = "cart";
    for(let k=0;k<this.blist.length;k++){
      let orderItem={
        "oquantity": this.blist[k].bquantity,
        "oamount": this.blist[k].bprice*this.blist[k].bquantity ,
        "oaddress": this.fulladd,
        "uid": this.curUser.uid,
        "bid": this.blist[k].bid
      }
      this.ser.addOrder(orderItem).subscribe((data)=>{
          console.log(data)
      })
      this.ser.reduceStocks(orderItem.oquantity,orderItem.bid).subscribe((data)=>{
        
      });
    }
    
    this.route.navigateByUrl("orderhistory")
  }


}


// this.rd=localStorage.getItem("Totalsum")
    // console.log("proceed page"+this.rd);
// this.sum+=JSON.parse(this.rd)
    // this.sum = this.ser.getsum();
    // this.rd2=localStorage.getItem("AmountDetails")
    // this.amt=JSON.parse(this.rd2)
    // this.rd3=localStorage.getItem("booksPurchase")
    // this.OrderList=JSON.parse(this.rd3)
    // console.log(this.OrderList)
    // this.rd4=localStorage.getItem("userdata")
    // this.curUser=JSON.parse(this.rd4)
    // console.log("in checkout"+this.sum)