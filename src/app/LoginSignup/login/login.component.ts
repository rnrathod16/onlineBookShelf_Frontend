import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';
import * as CryptoJS from "crypto-js";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  encrPass:string="";
  secretkey:string="Group6"
  userData:any;
  userExists:any;
  decryptPass:string="";
  new:any;
  bytes:any;
  dec:any;

  loginuserDetails:any={"uemail":"","upassword":""};
  constructor(private service:ServiceLayerService,private route:Router,private toastr: ToastrService){
    this.Decrypt("Ritesh")
  }


  Decrypt(data:any){
    let bytes = CryptoJS.AES.decrypt(data,this.secretkey);
    var dec = bytes.toString(CryptoJS.enc.Utf8);
    // console.log(dec);
    
    return dec;
    
  }

  Encrypt(data:any){
    this.encrPass = CryptoJS.AES.encrypt(data,this.secretkey).toString();
    return this.encrPass;
    
   }

  loginDetails(data:any){

    this.service.getuserbyemail(data).subscribe((info)=>{
      this.userExists = info;
      console.log(this.userExists);
      
        // console.log(
        //  this.Decrypt("Ritesh"));
        // data.upassword = this.Decrypt(data.upassword);

        if(this.userExists == null){
          console.log("No User Found");
          this.toastr.error("No User Found");      
        }else{
          this.decryptPass = this.Decrypt(this.userExists.upassword);
        console.log(this.decryptPass);
          if(this.decryptPass === data.upassword){
            let storeData = {
              "isadmin": this.userExists.isadmin,
              "ucountry": this.userExists.ucountry,
              "uemail":this.userExists.uemail,
              "uid":this.userExists.uid,
              "umobile":this.userExists.umobile,
              "uname":this.userExists.uname
            }

            localStorage.setItem('userdata',JSON.stringify(storeData));

        if(this.userExists.isadmin == "true"){
          this.toastr.success("Login Success");
          this.route.navigateByUrl("addbook");
        }
        else{
          this.toastr.success("Login Success");
          this.route.navigateByUrl("userhomepage");
        }

          }else{
            this.toastr.error("Invalid Credentials");
          }
        }

        
        
        
    // this.service.loginUser(data).subscribe((info)=>{
    //   this.userData = info;
    //   console.log(this.userData);

    //   if(this.userData == null){
    //     console.log("No User Found");
    //     this.toastr.error("No User Found");      
    //   }else{

    //     let storeData = {
    //       "isadmin": this.userData.isadmin,
    //       "ucountry": this.userData.ucountry,
    //       "uemail":this.userData.uemail,
    //       "uid":this.userData.uid,
    //       "umobile":this.userData.umobile,
    //       "uname":this.userData.uname
    //     }

    //     localStorage.setItem('userdata',JSON.stringify(storeData));

    //     if(this.userData.isadmin == "true"){
    //       this.toastr.success("Login Success");
    //       this.route.navigateByUrl("addbook");
    //     }
    //     else{
    //       this.route.navigateByUrl("userhomepage");
    //     }

    //   } 
    // })
      
      
    }) 

    
    // this.service.loginUser(data).subscribe((info)=>{
    //   this.userData = info;
    //   console.log(this.userData);

    //   if(this.userData == null){
    //     console.log("No User Found");
    //     this.toastr.error("No User Found");      
    //   }else{

    //     let storeData = {
    //       "isadmin": this.userData.isadmin,
    //       "ucountry": this.userData.ucountry,
    //       "uemail":this.userData.uemail,
    //       "uid":this.userData.uid,
    //       "umobile":this.userData.umobile,
    //       "uname":this.userData.uname
    //     }

    //     localStorage.setItem('userdata',JSON.stringify(storeData));

    //     if(this.userData.isadmin == "true"){
    //       this.toastr.success("Login Success");
    //       this.route.navigateByUrl("addbook");
    //     }
    //     else{
    //       this.route.navigateByUrl("userhomepage");
    //     }

    //   } 
    // })
  }
}
