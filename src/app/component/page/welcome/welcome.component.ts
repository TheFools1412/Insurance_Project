import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CustomerAPI } from "src/app/models/customerapi.model";
import { CustomerAPIService } from "src/app/services/customerapi.service";

@Component({

    templateUrl: './welcome.component.html',

    styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {

    customer: CustomerAPI;
    id: any;
    customers: CustomerAPI[];
    email: any;
    nameCustomer: any;
    idCustomer: any;
    profilePhoto:any;

    constructor(
        private customerAPIService: CustomerAPIService,
        private activatedRoute: ActivatedRoute
    ) {

    }

    ngOnInit() {

        this.activatedRoute.paramMap.subscribe(param => {

            var email = this.activatedRoute.snapshot.paramMap.get('email');
            this.customerAPIService.findemail(email).then(
                res => {
                    this.customer = res as CustomerAPI;
                    //console.log(this.customer);
                    // var idCustomer = this.activatedRoute.snapshot.paramMap.get('idCustomer');

                    this.email = this.customer.email;

                    this.idCustomer = this.customer.idCustomer;

                    this.nameCustomer = this.customer.nameCustomer;
                    this.profilePhoto = this.customer.profilePhoto;

                }, err => {
                    console.log(err);
                }
            )
        })
    }
}
