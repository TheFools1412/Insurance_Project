import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContractAPI } from "src/app/models/contractapi.model";
import { InsuranceAPI } from "src/app/models/insuranceapi.model";
import { ContractAPIService } from "src/app/services/contractapi.service";
import { InsuranceAPIService, } from "src/app/services/insuranceapi.service";

@Component({

    templateUrl: './contractcustomer.component.html',


})
export class ContractCustomerComponent implements OnInit {

    result: any[];
    contracts: ContractAPI[];
    contract: ContractAPI;
    id: any;
   

    idCustomer: any;
    constructor(
        private contractAPIService: ContractAPIService,
        private activatetedRoute: ActivatedRoute,
    ) {

    }

    ngOnInit() {

        var idCustomer = this.activatetedRoute.snapshot.paramMap.get('idCustomer');
        console.log('--------------')
        console.log('idCustomer: ' + idCustomer);

        this.contractAPIService.findCustomer(idCustomer).then(
            res => {
                this.contracts = res as ContractAPI[];
                console.log(this.contracts);

                this.result = this.contracts;
            }, err => {
                console.log(err);
            }
        )
       

    }



}