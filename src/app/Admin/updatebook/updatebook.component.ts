import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent {

  books:any;
  book:any;
  file:any;
  bookImgUrl:any;
  bookData:any;
  bookCategories:any;


  constructor(private service:ServiceLayerService,private http:HttpClient,private toastr: ToastrService){
   
  }
  ngOnInit()
  {
    this.service.getAllBooks().subscribe((info)=>{    
      this.books = info;
    })
    this.service.getAllCategories().subscribe((data)=>{
      this.bookCategories = data;
      
    })
    
  }
  getFile(event:any){
    this.file = event.target.files[0];
  }
  callAgain(){
    this.ngOnInit();
  }

  getbookbyid(id:any){
    this.service.getBookById(id).subscribe((data) =>{
      // console.log(data);
      this.book=data;
    
    })
  }

  updateBook = async (data:any)=>{

    data.set("file",this.file);
    data.set("upload_preset","onlinebookshelf");
    data.set("cloud_name","dfgn4mltu")
    this.http.post("https://api.cloudinary.com/v1_1/dfgn4mltu/upload",data).subscribe((info)=>{
      console.log(info);
      this.bookImgUrl = info;
      console.log(this.bookImgUrl.url);
      data.bimg = this.bookImgUrl.url;
      this.bookData = data;

      this.service.updateBook(data).subscribe((info)=>{
        console.log(info);
        this.toastr.success(data.bname+" Updated Success")
      })
    });
  
  }
 


}
