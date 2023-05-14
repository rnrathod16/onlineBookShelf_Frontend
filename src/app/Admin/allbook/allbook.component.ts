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
  IsmodelShow:any;
  constructor(private service:ServiceLayerService,private toastr: ToastrService){}

  ngOnInit(){
    this.service.getAllBooks().subscribe((info)=>{    
      this.allBooks = info;
    })
    
  }

  callAgain(){
    this.ngOnInit();
  }

  stockDetails(data:any){
    console.log(data);
    this.IsmodelShow=true;
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
