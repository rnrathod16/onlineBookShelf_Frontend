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
  constructor(private ser:ServiceLayerService){

  }

  ngOnInit(){
    this.getCurrentUserDetails();
  }

  getCurrentUserDetails(){
    this.ser.getUserById(2).subscribe((data)=>{
      this.currentuser= data;
    })
  }

}
