import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { post } from 'selenium-webdriver/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  updatedata = false;
  dataId : any[];
  
  constructor(private http: Http, public dialogRef: MatDialogRef<CreateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) data:any) { 
     
     
    }
    addCustomer(f){
      
      //.subscribe(response => {
       // objdatalist['id'] =  response.json().id;
        //this.postList.fullListObj['id'].splice(0,0,objdatalist);
        //console.log(response.json().id);
      //});
    }
    
  /*log(x){
console.log(x);
  }*/

}
