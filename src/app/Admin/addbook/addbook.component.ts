import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  bookCategories:any;
  file:any;
  bookImgUrl:any;
  bookData:any;

  constructor(private service:ServiceLayerService,private http:HttpClient){

  }

  ngOnInit(){
    this.service.getAllCategories().subscribe((data)=>{
      this.bookCategories = data;
      
    })
  }

  getFile(event:any){
    this.file = event.target.files[0];
  }

  addBook = async (data:any)=>{
    let formData = new FormData();

    formData.set("file",this.file);
    formData.set("upload_preset","onlinebookshelf");
    formData.set("cloud_name","dfgn4mltu")
    this.http.post("https://api.cloudinary.com/v1_1/dfgn4mltu/upload",formData).subscribe((info)=>{
      console.log(info);
      this.bookImgUrl = info;
      console.log(this.bookImgUrl.url);
      data.bimg = this.bookImgUrl.url;
      this.bookData = data;

      this.service.addBooks(data).subscribe((info)=>{
        console.log(info);
        
      })
    });
  
  }


}
