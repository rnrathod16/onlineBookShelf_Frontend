import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.css']
})
export class AllcategoryComponent {

categories:any;


  constructor(private service:ServiceLayerService,private http:HttpClient,private toastr: ToastrService){
     
  }
  ngOnInit()
  {
    this.service.getAllCategories().subscribe((info)=>{    
      this.categories = info;
    })
    
  }
  callAgain(){
    this.ngOnInit();
  }

  deleteCategory(id:any){
    console.log(id);  
    this.service.deleteCategory(id).subscribe((info)=>{
      console.log(info);
      this.toastr.success("Category Deleted");
      this.ngOnInit();
    })
  }

 

}
