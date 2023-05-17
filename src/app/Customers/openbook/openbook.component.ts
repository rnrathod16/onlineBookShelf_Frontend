import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-openbook',
  templateUrl: './openbook.component.html',
  styleUrls: ['./openbook.component.css']
})
export class OpenbookComponent {

  book:any;
  rd: any;
  user: any;
  currentWishList: any=[];
  ifexist:boolean=false
  constructor(private ser:ServiceLayerService,private toastr: ToastrService){}

  ngOnInit(){
    this.bookDetails();
  }

  bookDetails(){
    console.log(this.ser.getBookData());
     this.book = this.ser.getBookData();
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
      let cartobject={
        "bid": bid,
        "uid": this.user.uid,
        "quantity":1

      }
      this.ser.addToCart(cartobject).subscribe((data)=>{
  
      });
      this.toastr.success(bname+" has been Added To Cart!");
    }
    else
    {
      console.log("in exist part")
      this.toastr.warning(bname+" Already Exists in Cart!");
      //this.toastr.success(bname+" aLready exists in cart!");
    }
    })
  }
}
