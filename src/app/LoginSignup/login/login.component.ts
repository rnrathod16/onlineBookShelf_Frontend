import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userData:any;
  constructor(private service:ServiceLayerService,private route:Router,private toastr: ToastrService){

  }

  loginDetails(data:any){
    this.service.loginUser(data).subscribe((info)=>{
      this.userData = info;
      console.log(this.userData);

      if(this.userData == null){
        console.log("No User Found");
        this.toastr.error("No User Found");      
      }else if(this.userData.isadmin == "true"){
        this.toastr.success("Login Success");
        this.route.navigateByUrl("register");
      }
    })
  }
}
