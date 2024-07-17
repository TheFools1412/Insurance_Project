import { Component, OnInit } from "@angular/core";
import {  Router } from "@angular/router";
import { CustomerAPI } from "src/app/models/customerapi.model";
import { CustomerAPIService } from "src/app/services/customerapi.service";

@Component({
    
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css'],  
})
export class LoginComponent implements OnInit{

    username:string;
    password:string;
    msg:string;
    customer: CustomerAPI;
    constructor(
        private router: Router,
        private customerService : CustomerAPIService,
    ){

    }

    ngOnInit() {
        this.username ='';
        this.password = '';
        this.msg='';
    }
    login(){
        if(this.username == 'admin' && this.password =='dat12345'){
            alert("Login Admin Success ")
            this.msg = 'Valid';
            this.router.navigate(['/admin']);
        }
        else{
            alert("Login Admin Fail")
            this.msg = 'Invalid';
        }

    }

}