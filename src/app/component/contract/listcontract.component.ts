import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContractAPI } from "src/app/models/contractapi.model";
import { CustomerAPI } from "src/app/models/customerapi.model";
import { InsuranceAPI } from "src/app/models/insuranceapi.model";
import { ContractAPIService } from "src/app/services/contractapi.service";
import { InsuranceAPIService, } from "src/app/services/insuranceapi.service";

@Component({

    templateUrl: './listcontract.component.html',


})
export class ListContractComponent implements OnInit {

    result: any[];
    contracts: ContractAPI[];
    customer: CustomerAPI;
    constructor(
        private contractAPIService: ContractAPIService,
        private activatetedRoute: ActivatedRoute,

    ) {

    }

    ngOnInit() {
        this.laytrangcontract();
    }
    laytrangcontract() {
        this.activatetedRoute.paramMap.subscribe(
            p => {
                var idCustomer = p.get('idCustomer');
                this.contractAPIService.findCustomer(idCustomer).then(
                    res => {
                        this.contracts = res as ContractAPI[];
                        console.log(this.contracts);
                        this.result = this.contracts
                    },
                    err => {
                        console.log(err);
                    }
                )
            }

        )
    }
}