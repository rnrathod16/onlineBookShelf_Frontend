import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-allbook',
  templateUrl: './allbook.component.html',
  styleUrls: ['./allbook.component.css']
})
export class AllbookComponent {

  allBooks:any;
  bookCategories:any;
  resultFilter:any;
  filterRes:any = [];
  constructor(private service:ServiceLayerService,private toastr: ToastrService){}

  ngOnInit(){
    this.service.getAllBooks().subscribe((info)=>{    
      this.allBooks = info;
      this.filterRes = info;
    })

    this.service.getAllCategories().subscribe((data)=>{
      this.bookCategories = data;    
    })
    
  }

  categoryDetail(data:any){
    this.filterRes = [];
    this.resultFilter = this.allBooks.filter((book:any) =>{
      // book.cid==data.cid;
      if(book.cid == data.cid){
        this.filterRes.push(book);
      }     
    })
    console.log(this.filterRes);
    
    
  }

  callAgain(){
    this.ngOnInit();
  }

  stockDetails(data:any){
    console.log(data);
    this.service.updateStock(data).subscribe((info)=>{
      console.log(info); 
    })
  }

  deleteBook(data:any){
    console.log(data);  
    this.service.deleteBookById(data).subscribe((info)=>{
      console.log(info);
      this.toastr.success("Book Deleted");
      this.ngOnInit();
    })
  }
}
