import { Component } from '@angular/core';
import { ServiceLayerService } from '../service-layer.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent {

  users:any;
  constructor(private service:ServiceLayerService){

  }

  ngOnInit(){
    this.getAllUsers();
  }

  getAllUsers(){
    this.service.getAllUsers().subscribe((data)=>{
      console.log(data);
      
       this.users = data;
     })
   }
}
