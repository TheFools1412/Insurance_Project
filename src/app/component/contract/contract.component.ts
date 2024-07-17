import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContractAPI } from "src/app/models/contractapi.model";
import { CustomerAPI } from "src/app/models/customerapi.model";
import { InsuranceAPI } from "src/app/models/insuranceapi.model";
import { ContractAPIService } from "src/app/services/contractapi.service";
import { InsuranceAPIService, } from "src/app/services/insuranceapi.service";

@Component({

    templateUrl: './contract.component.html',


})
export class ContractComponent implements OnInit {

    result: any[];
    contracts: ContractAPI[];
    customer: CustomerAPI;
    page: number = 1;
    count: number = 0;
    tableSize: number = 5;
    tableSizes: any = [5, 10, 15, 20];
    constructor(
        private contractAPIService: ContractAPIService,
        private activatetedRoute: ActivatedRoute,

    ) {

    }

    ngOnInit() {
        this.tailaidscontract();
    }
    tailaidscontract() {
        this.contractAPIService.findAll().then(
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
    onTableSizeChange(evt: any) {
        this.tableSize = evt.target.value;
        this.page = 1;
        this.tailaidscontract();
    }

    onTableDataChange(evt: any) {
        this.page = evt;
        this.tailaidscontract();

    }

}