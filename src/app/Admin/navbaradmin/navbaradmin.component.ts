import { Component } from '@angular/core';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent {
  userName:any;
  displayName:any;

  ngOnInit(){
    this.userName = localStorage.getItem("userdata");
    this.displayName = JSON.parse(this.userName).uname;    
  }
}
