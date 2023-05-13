import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent {

  booklist:any;
  constructor(private ser:ServiceLayerService, private route:Router){
  }

  getAllBooks()
  {
    this.ser.getAllBooks().subscribe((data)=>{
      this.booklist=data;
    })

  }
  addThisToCart(bid:any,bname:any)
  {
    this.ser.addToCart(bid);
    alert(bname+"has been Added To Cart!");
  }
  ngOnInit(){
    this.getAllBooks();
  }

}
