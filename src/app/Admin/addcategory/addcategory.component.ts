import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {
  

  constructor(private service:ServiceLayerService,private http:HttpClient,private toastr: ToastrService){

  }
  addCategory(data:any){
    this.service.insertCateogery(data).subscribe((info)=>{
      console.log(info);
      this.toastr.success("Category Added");
    })

  }
 


}
