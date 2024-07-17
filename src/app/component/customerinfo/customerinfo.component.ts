import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { CustomerAPI } from "src/app/models/customerapi.model";
import { CustomerAPIService } from "src/app/services/customerapi.service";

@Component({

    templateUrl: './customerinfo.component.html',


})
export class CustomerInfoComponent implements OnInit {


    customers: CustomerAPI[];
    result: any[];

    idCustomer: any;
    nameCustomer: any;
    birthday: any;
    adress: any;
    phone: any;
    email: any;
    username: any;
    password: any;
    created: any;
    identification: any;
    profilePhoto: any;

    customer: CustomerAPI;
    constructor(
        private customerAPIService: CustomerAPIService,
        private activatedRoute: ActivatedRoute
    ) {

    }

    ngOnInit() {


        this.activatedRoute.paramMap.subscribe(param => {

            var email = this.activatedRoute.snapshot.paramMap.get('email');
            //console.log('--------------')
            //console.log('email: ' + email);

            this.customerAPIService.findemail(email).then(
                res => {
                    this.customer = res as CustomerAPI;
                    //console.log(this.customer);
                    this.idCustomer = this.customer.idCustomer;
                    this.nameCustomer = this.customer.nameCustomer;
                    this.birthday = this.customer.birthday;
                    this.adress = this.customer.adress;
                    this.phone = this.customer.phone;
                    this.email = this.customer.email;
                    this.username = this.customer.username;
                    this.password = this.customer.password;
                    this.identification = this.customer.identification;
                    this.created = this.customer.created;
                    this.profilePhoto = this.customer.profilePhoto;

                }, err => {
                    console.log(err);
                }
            )
        })





    }


}




