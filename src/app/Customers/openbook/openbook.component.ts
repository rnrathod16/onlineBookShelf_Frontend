import { Component } from '@angular/core';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-openbook',
  templateUrl: './openbook.component.html',
  styleUrls: ['./openbook.component.css']
})
export class OpenbookComponent {

  book:any;
  constructor(private service:ServiceLayerService){}

  ngOnInit(){
    this.bookDetails();
  }

  bookDetails(){
    console.log(this.service.getBookData());
     this.book = this.service.getBookData();
  }
}
