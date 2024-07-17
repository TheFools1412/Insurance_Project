import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { CustomerAPI } from "src/app/models/customerapi.model";
import { CustomerAPIService } from "src/app/services/customerapi.service";
import { __values } from "tslib";

@Component({
    selector: 'updatecustomer',
    templateUrl: './updatecustomer.component.html',
    encapsulation: ViewEncapsulation.None

})

export class UpdateCustomerComponent implements OnInit {

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



    customers: CustomerAPI[];
    customer: CustomerAPI;
    result: any;

    constructor(
        private customerapiservice: CustomerAPIService,
        private routerActive: ActivatedRoute,
        private router: Router,
    ) {

    }

    ngOnInit() {

        this.routerActive.paramMap.subscribe(p => {
            var idCustomer = p.get("idCustomer");
            console.log(idCustomer)
            this.customerapiservice.find(idCustomer).then(
                res => {
                    this.customer = res as CustomerAPI;
                    console.log(this.customer);

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
                }
            )
        })



    }
    selectPhoto(evt: any) {
        this.profilePhoto = evt.target.files[0];
        console.log(this.profilePhoto)
    }

    updateCustomer() {
        var val = {
            idCustomer: this.idCustomer,
            nameCustomer: this.nameCustomer,
            birthday : this.birthday,
            adress: this.adress,
            phone: this.phone,
            email: this.email,
            username: this.username,
            password: this.password,
            identification: this.identification,
            created: this.created,
            profilePhoto: this.profilePhoto,

        };
        console.log(val);
        this.customerapiservice.update(val).then(res => {
            this.customers = res as CustomerAPI[];
            console.log(this.customers);
            alert('Success'),
                this.router.navigate(['/admin/customer']);
        },
            err => {
                console.log(err);
                alert('Fail')
            }
        )

        // this.customerapiservice.update(val).then(res => {
        //     this.customers = res as CustomerAPI[];
        //     console.log(this.customers);
        //     alert('Success'),
        //         this.router.navigate(['/admin/customer']);
        // },
        //     err => {
        //         console.log(err);
        //         alert('Fail')
        //     }
        // )
    }


}
