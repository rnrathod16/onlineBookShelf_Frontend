import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent {
  userName:any;
  displayName:any;

  searchedBooks:any;
  constructor(private route:Router,private ser:ServiceLayerService,private toastr:ToastrService){}

  ngOnInit(){
    this.userName = localStorage.getItem("userdata");
    this.displayName = JSON.parse(this.userName).uname;    
  }

  searchForBook(booksearchdetails:any){
    console.log(booksearchdetails.booksearch)
    

    localStorage.setItem("searchbook",JSON.stringify(booksearchdetails.booksearch));
    this.route.navigateByUrl("searchbookpage");

  }

  logoutUser(){
    window.localStorage.clear();
    this.toastr.success("User Logged Out");
    this.route.navigateByUrl("/");
  }
}
