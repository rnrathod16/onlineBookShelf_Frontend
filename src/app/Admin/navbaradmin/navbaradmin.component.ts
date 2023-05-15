import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent {
  userName:any;
  displayName:any;

  constructor(private route:Router,private toastr:ToastrService){}

  ngOnInit(){
    this.userName = localStorage.getItem("userdata");
    this.displayName = JSON.parse(this.userName).uname;    
  }

  logoutUser(){
    window.localStorage.clear();
    this.toastr.success("User Logged Out");
    this.route.navigateByUrl("/");
  }

}
