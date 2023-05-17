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
  rd:any;
  updatedetails:any;

  constructor(private service:ServiceLayerService,private http:HttpClient,private toastr: ToastrService){
   
  }
  ngOnInit()
  {

    this.service.getAllCategories().subscribe((data)=>{
      this.bookCategories = data;
      
    })

    this.rd=localStorage.getItem("Adminupdate");
    this.updatedetails=JSON.parse(this.rd);
    
  }
  getFile(event:any){
    this.file = event.target.files[0];
  }

  update(data:any){
      this.updatedetails.bname=data.bname;
      console.log(this.updatedetails);
      this.service.updateBook(this.updatedetails).subscribe((info)=>{
        console.log(info);
        this.toastr.success(data.bname+" Updated Success");
      })
    };

  }