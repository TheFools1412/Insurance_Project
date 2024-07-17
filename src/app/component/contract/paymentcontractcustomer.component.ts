import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContractAPI } from "src/app/models/contractapi.model";
import { CustomerAPI } from "src/app/models/customerapi.model";
import { InsuranceAPI } from "src/app/models/insuranceapi.model";
import { PaymentAPI } from "src/app/models/paymentapi.model";
import { ContractAPIService } from "src/app/services/contractapi.service";
import { CustomerAPIService } from "src/app/services/customerapi.service";
import { InsuranceAPIService, } from "src/app/services/insuranceapi.service";
import { PaymentAPIService } from "src/app/services/paymentapi.service";

@Component({

    templateUrl: './paymentcontractcustomer.component.html',


})
export class PaymentContractCustomerComponent implements OnInit {


    payments : PaymentAPI[];
    result : any;
    constructor(
        private contractAPIService: ContractAPIService,
        private activatetedRoute: ActivatedRoute,
        private customerapiservice: CustomerAPIService,
        private paymentAPIService: PaymentAPIService,
        
    ) {

    }

    ngOnInit() {


        this.activatetedRoute.paramMap.subscribe(p => {
            var id = this.activatetedRoute.snapshot.paramMap.get('id');
            console.log('--------------')
            console.log('id : ' + id);

            this.paymentAPIService.find(id).then(
                res => {
                    this.payments = res as PaymentAPI[];
                    console.log(this.payments);

                    this.result = this.payments;                   

                }, err => {
                    console.log(err);
                }
            );



        })




    }



}