import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userData:any;
  countryList:any;
  userExists:any;
  constructor(private service:ServiceLayerService,private route:Router,private toastr: ToastrService){
    this.getCountry();
  }

  registerUser(data:any){

    this.service.searchUserByEmail(data).subscribe((info)=>{
      this.userExists = info;
      console.log(this.userExists);
      
      if(this.userExists == 0){
            this.service.registerUser(data).subscribe((info:any)=>{
      console.log(info.uid);   
      this.toastr.success("Account for user "+info.uname+" created");
      this.route.navigateByUrl("");
    })  
      }else{
        this.toastr.error("Account already exists with this mailid");
      }
      
    }) 
  }

  getCountry(){
    console.log(this.service.getCountries().subscribe((data)=>{
      this.countryList = data;
    }));
  }
}
