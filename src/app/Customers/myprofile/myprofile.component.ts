import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent 
{
  currentuser:any
  rd:any
  id:any
  uid:any;
  fullDetails:any = {"uid":"","uname":"","uemail":"","upassword":"","umobile":"","ucountry":""};
  constructor(private ser:ServiceLayerService,private toastr: ToastrService,private route:Router){

  }

  ngOnInit(){
   
    this.rd=localStorage.getItem("userdata")
    this.id= JSON.parse(this.rd)
    this.getCurrentUserDetails();
    
    console.log(this.currentuser);
    
  }

  getCurrentUserDetails(){
    this.ser.getUserById(this.id.uid).subscribe((data)=>{
      this.currentuser= data;
      this.uid = this.currentuser.uid;
    })
  }

  updateUserData(data:any){
    console.log(data);

    console.log(this.uid);
    this.fullDetails.uid = this.uid;
    this.fullDetails.uname = data.uname;
    this.fullDetails.uemail = data.uemail;
    this.fullDetails.upassword = data.upassword;
    this.fullDetails.umobile = data.umobile;
    this.fullDetails.ucountry = data.ucountry;
    console.log(this.fullDetails);
    
    this.ser.updateUserData(this.fullDetails).subscribe((info)=>{
      console.log(info);
      this.ngOnInit();
      this.toastr.success("User Profile Updated");
      this.route.navigateByUrl("userhomepage");
      localStorage.setItem('userdata',JSON.stringify(this.fullDetails));
    })
  }

}
