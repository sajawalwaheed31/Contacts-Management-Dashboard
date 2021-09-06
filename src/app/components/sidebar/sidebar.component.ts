import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ServiceApiService } from '../../service/service-api.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  title = 'Contacts';
    data:any;
    array: any = [];

	@Output() single_data: EventEmitter<any> = new EventEmitter<any>();

  constructor( private spinner: NgxSpinnerService, private service :ServiceApiService ) { 
    // this.data = new Data();
   }

  ngOnInit(){
      this.GetData();
  }
  GetData(){
    this.spinner.show();
      this.service.getData().subscribe((data)=>{
        this.spinner.hide();
        
          console.log(data);
          this.array = data;
          
          
          
      }, (error) => {
        console.log(error)
        this.spinner.hide();
      })
  }

  GetSingleData(id:any){
    this.spinner.show();
    this.service.getSingleUserData(id).subscribe((data)=>{
      this.spinner.hide();
    console.log(data);
    this.single_data.emit(data);
    }, (error)=> {
      console.log(error)
      this.spinner.hide();
    }
    )
  }

}
