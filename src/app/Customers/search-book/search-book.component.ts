import { Component } from '@angular/core';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {

  srd:any;
  bookdetail:any;
  searchedBooks:any;

  ngOnInit(){
    this.srd= localStorage.getItem("searchbook");
    this.bookdetail=JSON.parse(this.srd);
    console.log(this.srd);
    console.log(this.bookdetail);
    this.BookSearch();
  }
  constructor(private ser:ServiceLayerService){
    this.searchedBooks=[];
  }
  BookSearch()
  {
      this.ser.searchForBooks(this.bookdetail).subscribe((data)=>{
        this.searchedBooks=data;
        
      })
    
  }

}
