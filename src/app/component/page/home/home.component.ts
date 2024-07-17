import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { CustomerAPI } from "src/app/models/customerapi.model";

@Component({
   
    templateUrl: './home.component.html',

    styleUrls:['./home.component.css'],  
})
export class HomeComponent implements OnInit{

    cutomer: CustomerAPI; 
    nameCustomer:any;

    ngOnInit() {
       
    }

}