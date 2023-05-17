import { Component } from '@angular/core';
import { ServiceLayerService } from 'src/app/service-layer.service';

@Component({
  selector: 'app-bookpreview',
  templateUrl: './bookpreview.component.html',
  styleUrls: ['./bookpreview.component.css']
})
export class BookpreviewComponent {

  bookByStatus:any;
  disableDownload:any;
  constructor(private service:ServiceLayerService){}

  statusDetail(data:any){
    this.service.bookStatusFreePaid(data).subscribe((info)=>{
      this.bookByStatus = info;
      console.log(this.bookByStatus[0].bstatus);
      
      if(this.bookByStatus[0].bstatus.toUpperCase() == "FREE" ){
        this.disableDownload = true;
      }else if(this.bookByStatus[0].bstatus.toUpperCase() == "PAID"){
        this.disableDownload = false;
      }
      
    })
    
  }
}
