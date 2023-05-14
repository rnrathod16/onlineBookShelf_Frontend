import { Component } from '@angular/core';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent {
  userName:any;
  displayName:any;

  ngOnInit(){
    this.userName = localStorage.getItem("userdata");
    this.displayName = JSON.parse(this.userName).uname;    
  }
}
