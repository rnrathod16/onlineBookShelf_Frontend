import { Component } from '@angular/core';
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
  constructor(private ser:ServiceLayerService){

  }

  ngOnInit(){
   
    this.rd=localStorage.getItem("userdata")
    this.id= JSON.parse(this.rd)
    this.getCurrentUserDetails();
  }

  getCurrentUserDetails(){
    this.ser.getUserById(this.id.uid).subscribe((data)=>{
      this.currentuser= data;
    })
  }

}
