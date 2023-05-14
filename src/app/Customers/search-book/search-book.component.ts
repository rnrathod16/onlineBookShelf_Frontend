import { Component } from '@angular/core';
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
  constructor(private ser:ServiceLayerService){
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

}
