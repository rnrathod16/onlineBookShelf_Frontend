import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {

  userName:any;
  displayName:any;
  srd:any;
  bookdetail:any;
  searchedBooks:any;
  searchedBooks2:any;
  rd: any;
  user: any;
  currentWishList: any=[];
  ifexist: boolean=false;


  ngOnInit(){
    this.searchedBooks=[];
    this.srd= localStorage.getItem("searchbook");
  
    this.bookdetail=JSON.parse(this.srd);
    console.log(this.srd);
    console.log(this.bookdetail);
    this.BookSearch();

    this.userName = localStorage.getItem("userdata");
    this.displayName = JSON.parse(this.userName).uname;  
  }
  constructor(private ser:ServiceLayerService,private toastr: ToastrService){
    // this.searchedBooks=[];
  }

  // searchForBook(booksearchdetails:any){
  //   console.log(booksearchdetails.booksearch)
    

  //   this.ser.searchForBooks(booksearchdetails.booksearch).subscribe((data)=>{
  //     this.searchedBooks=data;
      
  //   })

    // localStorage.setItem("searchbook",JSON.stringify(this.searchedBooks));
    // this.route.navigateByUrl("searchbookpage");

  // }

  search2(data:any){
    this.ser.searchForBooks(data.booksearch2).subscribe((data)=>{
      this.searchedBooks2=data;
      this.searchedBooks=[];
    })
  }

  BookSearch()
  {
      this.ser.searchForBooks(this.bookdetail).subscribe((data)=>{
        this.searchedBooks=data;
        
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
      alert("already exists")
      //this.toastr.success(bname+" aLready exists in cart!");
    }
    })
  }

}
