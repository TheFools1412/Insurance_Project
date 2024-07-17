import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CustomerAPI } from "src/app/models/customerapi.model";
import { ResultAPI } from "src/app/models/resultapi.model";
import { CustomerAPIService } from "src/app/services/customerapi.service";

@Component({

    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    profilephoto: File;
    resultAPI: ResultAPI[];

    codeRandom: any;


    constructor(
        private router: Router,
        private formBuider: FormBuilder,
        private customerService: CustomerAPIService,
    ) {

    }

    ngOnInit() {
        this.registerForm = this.formBuider.group({
            username: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(10)
            ]],
            password: ['', [
                Validators.required,
                Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$')

            ]],
            email: ['', [
                Validators.required,
                Validators.pattern(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)
            ]],
            nameCustomer: '',
            birthday: '',
            adress: '',
            phone: '',
            profilePhoto: '',
            created: '',
            identification: ''

        })
    }

    save() {

        //this.codeRandom = Math.floor((Math.random()*(999999-10000))+100000);
        // var codeConfirm = this.codeRandom.toString();
        // console.log(codeConfirm);

        //console.log(this.profilephoto);

        var customer: CustomerAPI = this.registerForm.value as CustomerAPI;
        customer.profilePhoto = this.profilephoto.name
        console.log(customer)

        var formData = new FormData();
        formData.append('profilephoto', this.profilephoto);
        formData.append('strcustomer', JSON.stringify(customer));
        console.log(formData)


        this.customerService.registerCustomer(formData).then(
            res => {
                var resultAPI: ResultAPI = res as ResultAPI;
                console.log(resultAPI);
                console.log(customer);
                console.log(res);

                if (resultAPI.result == true) {
                    alert('Register Success')
                    // Save data to sessionStorage
                    sessionStorage.setItem("key", "value");                
                    this.router.navigate([('/loginuser')])
                } else {
                    alert('dang ki that bai')
                }
            }, err => {
                console.log(err);
            }

        )

    }
    selectPhoto(evt: any) {
        this.profilephoto = evt.target.files[0];
        console.log(this.profilephoto)
    }
}