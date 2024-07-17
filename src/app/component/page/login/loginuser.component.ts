import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerAPI } from "src/app/models/customerapi.model";
import { ResultAPI } from "src/app/models/resultapi.model";
import { CustomerAPIService } from "src/app/services/customerapi.service";

@Component({

    templateUrl: './loginuser.component.html',
    styleUrls: ['./loginuser.component.css'],
})
export class LoginUserComponent implements OnInit {

    loginForm: FormGroup
    customer: CustomerAPI;
    email: any;
    password: any;
    resultAPI: ResultAPI[];
    constructor(
        private formbuilder: FormBuilder,
        private router: Router,
        private customerService: CustomerAPIService,
        private activatetedRoute: ActivatedRoute,
    ) {

    }

    ngOnInit() {
        this.loginForm = this.formbuilder.group({
            email: [''],
            password: ['', Validators.required],

        })
    }
    login() {

        if (this.loginForm.valid) {
            console.log(this.loginForm.value)
            this.customerService.login(this.loginForm.value).then(
                res => {
                    
                    var resultAPI: ResultAPI = res as ResultAPI;
                    console.log(resultAPI);
                    
                    if(resultAPI.result == true){
                        alert("Login Success");
                        this.email = this.loginForm.controls["email"].value;
                        this.router.navigate([('/welcome/'), { email: this.email }])
                    }
                    else{
                        alert("Login Fail")
                    }

                    
                },
            ), err => {
                alert("Login Fail");

                console.log(err)
            }

        }




    }


}





