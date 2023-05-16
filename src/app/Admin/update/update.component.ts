import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  book:any;
  file:any;
  bookImgUrl:any;
  bookData:any;
  bookCategories:any;


  constructor(private service:ServiceLayerService,private http:HttpClient,private toastr: ToastrService){
   
  }
  ngOnInit()
  {

    this.service.getAllCategories().subscribe((data)=>{
      this.bookCategories = data;
      
    })
    
  }
  getFile(event:any){
    this.file = event.target.files[0];
  }


 

  update = async (data:any)=>{

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
